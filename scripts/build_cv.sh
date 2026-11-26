#!/usr/bin/env bash
#
# Build files/Curriculum_Vitae.pdf from the LaTeX source in cv-latex/.
#
# Uses a local latexmk when there is one (MacTeX, TeX Live) and otherwise
# falls back to a TeX Live container, so the same script runs on a laptop and
# on a GitHub Actions runner with no TeX installed.
#
#   scripts/build_cv.sh              build, then copy the PDF into files/
#   scripts/build_cv.sh --check      build only, leave files/ untouched
#   scripts/build_cv.sh --docker     force the container even if latexmk exists
#
# Overrides:
#   CV_SRC_DIR    source directory            (default cv-latex)
#   CV_MAIN_TEX   main file within it         (default: the one with
#                                              \documentclass)
#   CV_OUT_PDF    where to copy the result    (default files/Curriculum_Vitae.pdf)
#   CV_TEX_ENGINE pdf | lua | xe              (default: autodetected)
#   CV_TEX_IMAGE  container image for the fallback
#   CV_TEX_PLATFORM  platform for that image  (default linux/amd64)
#   SOURCE_DATE_EPOCH  date written into the PDF (default: last commit to
#                      the source, so the same source gives the same PDF)
#
set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="${CV_SRC_DIR:-$REPO/cv-latex}"
OUT_PDF="${CV_OUT_PDF:-$REPO/files/Curriculum_Vitae.pdf}"
TEX_IMAGE="${CV_TEX_IMAGE:-ghcr.io/xu-cheng/texlive-full:latest}"
TEX_PLATFORM="${CV_TEX_PLATFORM:-linux/amd64}"
BUILD_DIR=".build"          # relative to SRC_DIR, gitignored

check_only=0
force_docker=0
for arg in "$@"; do
  case "$arg" in
    --check)  check_only=1 ;;
    --docker) force_docker=1 ;;
    -h|--help) sed -n '3,25p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "unknown option: $arg" >&2; exit 2 ;;
  esac
done

[[ -d "$SRC_DIR" ]] || { echo "error: no source directory at $SRC_DIR" >&2; exit 1; }

# ---------------------------------------------------------------- main file
# The entry point is the .tex that declares \documentclass; anything else in
# the directory is assumed to be \input, a class, or an asset.
main=""
if [[ -n "${CV_MAIN_TEX:-}" ]]; then
  main="$SRC_DIR/$CV_MAIN_TEX"
  [[ -f "$main" ]] || { echo "error: CV_MAIN_TEX not found: $main" >&2; exit 1; }
else
  while IFS= read -r f; do
    if grep -q '\\documentclass' "$f"; then main="$f"; break; fi
  done < <(find "$SRC_DIR" -maxdepth 1 -name '*.tex' | sort)
fi
if [[ -z "$main" ]]; then
  echo "error: no .tex containing \\documentclass in $SRC_DIR" >&2
  echo "       put your CV source there, or set CV_MAIN_TEX." >&2
  exit 1
fi
main_base="$(basename "$main")"
stem="${main_base%.tex}"

# ------------------------------------------------------------------- engine
# fontspec, unicode-math and polyglossia need LuaTeX or XeTeX, so a document
# that loads one of them unconditionally settles the engine. But a class may
# well load fontspec inside an \ifPDFTeX ... \else branch that pdfTeX never
# takes (simplehipstercv.sty does exactly that), and such a document is
# engine-agnostic — so an engine guard anywhere means pdfTeX is fine.
engine="${CV_TEX_ENGINE:-}"
if [[ -z "$engine" ]]; then
  tex_sources=(--include='*.tex' --include='*.cls' --include='*.sty')
  if grep -rqE '\\(ifPDFTeX|ifpdftex|ifxetex|ifXeTeX|ifluatex|ifLuaTeX)|\\(usepackage|RequirePackage)\{(iftex|ifxetex|ifluatex|ifpdf)\}' \
       "$SRC_DIR" "${tex_sources[@]}" 2>/dev/null; then
    engine="pdf"                       # document branches per engine
  elif grep -rqE '\\(usepackage|RequirePackage)(\[[^]]*\])?\{[^}]*(fontspec|unicode-math|polyglossia)' \
       "$SRC_DIR" "${tex_sources[@]}" 2>/dev/null; then
    engine="lua"                       # needs a Unicode engine
  else
    engine="pdf"
  fi
fi
case "$engine" in
  pdf) flag="-pdf" ;;
  lua) flag="-pdflua" ;;
  xe)  flag="-pdfxe" ;;
  *)   echo "error: CV_TEX_ENGINE must be pdf, lua or xe (got '$engine')" >&2; exit 2 ;;
esac

LATEXMK_ARGS=(
  "$flag"
  -interaction=nonstopmode
  -halt-on-error
  -file-line-error
  -outdir="$BUILD_DIR"
  "$main_base"
)

echo "source : ${SRC_DIR#$REPO/}/$main_base"
echo "engine : $engine ($flag)"

# ------------------------------------------------------------ reproducible
# pdfTeX writes the build time into the PDF (creation date and document ID),
# so two builds of the same source would differ byte for byte and the CI
# would commit a "new" PDF every time. Pin that time to the last commit that
# touched the CV source: the same source then always gives the same bytes.
# FORCE_SOURCE_DATE=1 makes \today and friends use it too.
date_from="SOURCE_DATE_EPOCH from the environment"
if [[ -z "${SOURCE_DATE_EPOCH:-}" ]]; then
  SOURCE_DATE_EPOCH="$(git -C "$REPO" log -1 --format=%ct -- "$SRC_DIR" 2>/dev/null || true)"
  date_from="last commit to ${SRC_DIR#$REPO/}"
fi
if [[ -n "${SOURCE_DATE_EPOCH:-}" ]]; then
  export SOURCE_DATE_EPOCH FORCE_SOURCE_DATE=1
  echo "date   : $(date -u -r "$SOURCE_DATE_EPOCH" '+%Y-%m-%d %H:%M UTC' 2>/dev/null || date -u -d "@$SOURCE_DATE_EPOCH" '+%Y-%m-%d %H:%M UTC') ($date_from)"
else
  echo "date   : not pinned (no git history), so the PDF will differ on every build" >&2
fi

# -------------------------------------------------------------------- build
if [[ $force_docker -eq 0 ]] && command -v latexmk >/dev/null 2>&1; then
  echo "builder: local latexmk"
  ( cd "$SRC_DIR" && latexmk "${LATEXMK_ARGS[@]}" )
else
  command -v docker >/dev/null 2>&1 || {
    echo "error: neither latexmk nor docker is available" >&2; exit 1; }
  echo "builder: $TEX_IMAGE"
  # Run as the invoking user so the build products are not left root-owned.
  # That uid has no passwd entry inside the image, so point HOME somewhere
  # writable or TeX fails trying to create its caches.
  #
  # The TeX Live images publish amd64 only, which a CI runner is anyway; on an
  # Apple Silicon machine the platform has to be named explicitly or docker
  # refuses the image outright, and it then runs (slowly) under emulation.
  #
  # Mount the source directory's parent, not the directory alone: CV.tex
  # finds its images through \graphicspath{{../}}, i.e. the site's images/.
  src_parent="$(dirname "$SRC_DIR")"
  docker run --rm \
    --platform "$TEX_PLATFORM" \
    -v "$src_parent":/work -w "/work/$(basename "$SRC_DIR")" \
    -u "$(id -u):$(id -g)" -e HOME=/tmp \
    ${SOURCE_DATE_EPOCH:+-e SOURCE_DATE_EPOCH -e FORCE_SOURCE_DATE} \
    "$TEX_IMAGE" latexmk "${LATEXMK_ARGS[@]}"
fi

pdf="$SRC_DIR/$BUILD_DIR/$stem.pdf"
[[ -f "$pdf" ]] || { echo "error: latexmk finished but $pdf is missing" >&2; exit 1; }

# Page count comes from the log; object streams in the PDF are compressed,
# so counting /Type /Page in the raw bytes finds nothing.
pages="$(sed -n 's/.*Output written on .*(\([0-9]\{1,\}\) page.*/\1/p' \
         "$SRC_DIR/$BUILD_DIR/$stem.log" 2>/dev/null | tail -1)"
printf 'built  : %s (%s KB, %s pages)\n' \
  "${pdf#$REPO/}" "$(( $(wc -c < "$pdf") / 1024 ))" "${pages:-?}"

if [[ $check_only -eq 1 ]]; then
  echo "note   : --check, so $( basename "$OUT_PDF") was not replaced"
  exit 0
fi

mkdir -p "$(dirname "$OUT_PDF")"
cp "$pdf" "$OUT_PDF"
echo "copied : ${OUT_PDF#$REPO/}"
