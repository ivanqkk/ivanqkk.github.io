# Ivan Cucchi — Application Specialist in AI for Life Science

<div align="center">
  <a href="https://ivanqkk.github.io"><strong>🌐 Visit my website: ivanqkk.github.io</strong></a>
</div>

---

### 🧬 About me
I am an **Application Specialist in AI for Life Science** at **Stockholm University**, working within the Department of Biochemistry and Biophysics and based at **SciLifeLab** (Campus Solna) in the Arne Elofsson Lab.

As part of the **Sweden AI Factory** and in collaboration with **NAISS**, I help researchers from academia and industry scale and optimise machine learning on national high-performance computing (HPC) infrastructure. I also contribute to courses, seminars and workshops that build AI competence across the life science community.

### 🎓 Background
* **PhD** in *Computational Mathematics, Learning, and Data Science*, University of Pavia and Università della Svizzera Italiana (2023–2026). Thesis: *Molecular Dynamics-Enhanced Machine Learning Models for Protein Binding and Stability*, defended in September 2026.
* **BSc and MSc in Mathematics**, University of Pavia, specialising in modelling and learning methods for life science.
* **Research focus:** scientific machine learning, structural bioinformatics, deep learning on molecular dynamics (MD) data, and high-throughput biomedical pipelines.

---

### 🛠️ Expertise and tools
* **Methods:** deep learning for structural biology, feature engineering, signal processing (ECG), biophysical simulations, HPC.
* **Languages and tools:** Python, Julia, MATLAB, LaTeX, Linux/Bash, Git, `uv`, Jupytext.
* **Libraries:** PyTorch, scikit-learn, NumPy, pandas, SciPy, RDKit.

---

### 📄 Selected publications
* **MOLECULE:** a dual-modal deep learning architecture for entropy-regularized classification and uncertainty-aware evaluation of kinase ligands. *J. Chem. Theory Comput.* (2025). [doi:10.1021/acs.jctc.5c01140](https://doi.org/10.1021/acs.jctc.5c01140)
* **Large-scale energy decomposition for the analysis of protein stability.** *Cell Stress and Chaperones* (2025). [doi:10.1016/j.cstres.2025.01.001](https://doi.org/10.1016/j.cstres.2025.01.001)
* **Integrating molecular dynamics and machine learning algorithms to predict the functional profile of kinase ligands.** *J. Chem. Theory Comput.* (2024). [doi:10.1021/acs.jctc.4c01097](https://doi.org/10.1021/acs.jctc.4c01097)

The full list, with talks and teaching, is on the [website](https://ivanqkk.github.io/publications/).

---

### 📬 Connect with me
<div align="left">
  <a href="https://linkedin.com/in/ivan-cucchi-298758193" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://scholar.google.com/citations?user=McUStm0AAAAJ" target="_blank">
    <img src="https://img.shields.io/badge/Google_Scholar-4285F4?style=for-the-badge&logo=google-scholar&logoColor=white" alt="Google Scholar">
  </a>
  <a href="https://www.researchgate.net/profile/Ivan-Cucchi" target="_blank">
    <img src="https://img.shields.io/badge/ResearchGate-00CCBB?style=for-the-badge&logo=researchgate&logoColor=white" alt="ResearchGate">
  </a>
  <a href="https://orcid.org/0009-0007-8832-6820" target="_blank">
    <img src="https://img.shields.io/badge/ORCID-A6CE39?style=for-the-badge&logo=orcid&logoColor=white" alt="ORCID">
  </a>
</div>

---

### ⚙️ About this repository
The website is built with [Jekyll](https://jekyllrb.com) on a customised [AcademicPages](https://github.com/academicpages/academicpages.github.io) theme and published by GitHub Pages from the `master` branch.

* **Content:** `_pages/` (pages), `_publications/` and `_talks/` (one Markdown file per item), `_data/` (news, events, press, academic lineage, citation counts).
* **Citation counts:** refreshed monthly from OpenAlex by `.github/workflows/citations.yml`.
* **CV PDF:** built from the LaTeX source in `cv-latex/` by `scripts/build_cv.sh`, locally or by `.github/workflows/build_cv.yml` on every change to the source (see `cv-latex/README.md`).
* **Licences:** the theme code is MIT ([`LICENSE`](LICENSE)); bundled libraries and fonts are listed in [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).
* **Privacy:** no analytics and no cookies; the pages load fonts, scripts and images only from this site. The one exception is the PhD defence slides (`files/phd-defence.html`), which load their fonts from Google Fonts.

To preview locally, with Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

or with Docker: `docker compose up`. The site is then at http://localhost:4000.
