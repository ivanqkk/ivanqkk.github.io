#!/usr/bin/env python3
"""Update citation counts for the publications from OpenAlex.

Reads the DOI of every file in _publications/ (a `doi:` field, or a
`paperurl:` on doi.org), asks OpenAlex for its `cited_by_count` and writes
_data/citations.json, which the publication cards and pages read
(_includes/pub-byline.html). Theses have no DOI and are skipped.

- Standard library only, so it runs as is in the GitHub Action
  (.github/workflows/citations.yml) and locally: python3 scripts/update_citations.py
- If a request fails, the previous count is kept rather than dropped.
- `updated` only changes when a count changes, so an unchanged run leaves
  the file untouched and the Action commits nothing.
"""

import datetime
import json
import pathlib
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUBLICATIONS = ROOT / "_publications"
OUTPUT = ROOT / "_data" / "citations.json"
API = "https://api.openalex.org/works/doi:{doi}?select=id,cited_by_count"
USER_AGENT = "ivanqkk.github.io citation counts (+https://github.com/ivanqkk/ivanqkk.github.io)"

DOI_FIELD = re.compile(r"^doi:\s*['\"]?(10\.[^'\"\s]+)", re.M)
DOI_URL = re.compile(r"^paperurl:\s*['\"]?https?://(?:dx\.)?doi\.org/(10\.[^'\"\s]+)", re.M)


def front_matter(path):
    text = path.read_text(encoding="utf-8")
    parts = text.split("---", 2)
    return parts[1] if len(parts) == 3 else ""


def find_dois():
    dois = []
    for path in sorted(PUBLICATIONS.glob("*.md")):
        fm = front_matter(path)
        m = DOI_FIELD.search(fm) or DOI_URL.search(fm)
        if m:
            dois.append(m.group(1).lower())
    return dois


def fetch(doi):
    url = API.format(doi=urllib.parse.quote(doi, safe="/"))
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.load(resp)
    return {
        "count": int(data["cited_by_count"]),
        "openalex": data["id"].rsplit("/", 1)[-1],
    }


def main():
    try:
        old = json.loads(OUTPUT.read_text(encoding="utf-8"))
    except (FileNotFoundError, ValueError):
        old = {}
    old_works = old.get("works", {})

    works, failures = {}, 0
    for doi in find_dois():
        try:
            works[doi] = fetch(doi)
        except (urllib.error.URLError, KeyError, ValueError, TimeoutError) as err:
            failures += 1
            print(f"warning: {doi}: {err}; keeping the previous count", file=sys.stderr)
            if doi in old_works:
                works[doi] = old_works[doi]

    changed = works != old_works
    result = {
        "source": "OpenAlex",
        "updated": datetime.date.today().isoformat() if changed else old.get("updated"),
        "works": works,
    }
    if changed or not OUTPUT.exists():
        OUTPUT.write_text(json.dumps(result, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    for doi, w in sorted(works.items()):
        print(f"{w['count']:>5}  {doi}")
    print("updated" if changed else "no change", f"({failures} failed)" if failures else "")


if __name__ == "__main__":
    main()
