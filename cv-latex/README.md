# CV LaTeX source

`CV.tex` is the source of `/files/Curriculum_Vitae.pdf`. The build picks the
entry point automatically: the `.tex` file here that declares
`\documentclass`. Everything else — `\input` fragments, a `.cls`/`.sty`,
images, fonts — sits alongside it.

## Images

`CV.tex` references images as `images/<name>`, and `\graphicspath{{./}{../}}`
resolves those first against `cv-latex/images/` and then against the site's
top-level `images/`, so the CV reuses the website's logos and photo.

Only the CV uses the five social icons, so they live in `cv-latex/images/`:

    scholar.png github.png orcid.png researchgate.png linkedin.png

The 17 it takes from the site's `images/`:

    me.jpeg b2.png copernico.png crocebianca.png geblod.png naiss.jpeg
    nvidia.png pnrr.jpg scilifelab.png shoreikan.png su.png
    swedenaifactory.png synclab.jpg unipv.png usi.png ver.png weil.png

An entry can show several logos, as on the website: pass a comma-separated
list with no spaces, e.g. `{images/unipv.png,images/usi.png}`. One logo is
drawn at full size, two or more in a small grid.

Renaming or deleting one of these in `images/` breaks the CV build. When the
CV starts using another image from `images/`, add it to the `paths` list in
`.github/workflows/build_cv.yml` too, so that changing it rebuilds the CV. To give
the CV a different version of a logo without touching the site, put a file
with the same name in `cv-latex/images/`.

## Keeping it in step with the website

The main column of the PDF mirrors the CV page of the website
(`/cv/`, from `_pages/cv.md`): same sections in the same order, and the same
titles, organisations, places, dates, descriptions, abstracts and logos.
Education is listed newest first, the opposite of the website's timeline.
The sidebar (photo, about, languages, contacts) exists only in the PDF.

`CV.tex` is still written by hand, so a change to the CV page (or to
`_talks/`, `_data/events.yml`, `_publications/`) has to be copied into
`CV.tex` as well.

The public CV carries only work contact details: no phone number, date of
birth or private email.

Everything else the class pulls in — `raleway`, `paracol`, `fontawesome5`,
`comment`, `smartdiagram`, `tikz-3dplot`, `titlesec`, `tikz`, `hyperref`,
`iftex`, `xcolor`, `geometry`, `graphicx`, `array`, `float`, `ifthen` — is in
TeX Live, so a container build needs nothing extra.

The document compiles with **pdfTeX**: `simplehipstercv.sty` guards
`fontspec` behind `\ifPDFTeX` and takes the `fontenc`/`inputenc` branch
instead, so it is engine-agnostic and the build picks pdfTeX automatically.

Nothing in this directory is published: `cv-latex` is listed under `exclude`
in `_config.yml`, so Jekyll never copies it into the built site. Only the
resulting PDF is public, at `/files/Curriculum_Vitae.pdf`.

## Building

    scripts/build_cv.sh            # build and update files/Curriculum_Vitae.pdf
    scripts/build_cv.sh --check    # build only, leave files/ untouched
    scripts/build_cv.sh --docker   # use the TeX Live container, not local TeX

The engine is chosen from what the document loads — `fontspec`,
`unicode-math` or `polyglossia` mean LuaTeX, otherwise pdfTeX. Override any of
this with environment variables; `scripts/build_cv.sh --help` lists them.

A local `latexmk` is used when present. This machine has **BasicTeX**, which
ships few packages; seven that this CV needs are absent from it. Either
install them once:

    sudo tlmgr install comment fontawesome5 paracol raleway \
                       smartdiagram tikz-3dplot titlesec

or build with `--docker`, which uses a full TeX Live image and needs nothing
installed locally. The container route is the one CI takes, and it has been
verified to build this document (4 pages, A4, pdfTeX).

## On demand, without a local build

The **Build CV PDF** workflow (`.github/workflows/build_cv.yml`) does the same
thing on GitHub:

- run it by hand from the Actions tab, or `gh workflow run build_cv.yml`
- it also runs automatically on any push that touches this directory

It commits the rebuilt PDF back to the branch. That commit is what makes the
new version appear on the site, because GitHub Pages serves the file directly
from the repository and rebuilds on every push. Each run also attaches the PDF
as a downloadable artifact.

## The same source gives the same PDF

pdfTeX normally writes the build time into the PDF, so every build would
differ. `build_cv.sh` pins it with `SOURCE_DATE_EPOCH` to the date of the
last commit that touched `cv-latex/`: building the same source again, on
this machine or on GitHub, gives a byte-identical file, and the workflow
only commits when the CV has really changed.

## A note on repository size

The PDF is a ~2 MB binary and every rebuild that changes it adds another copy
to the git history. If you expect to iterate on the CV frequently, prefer
`--check` while drafting and only run the real build when you want to publish.
