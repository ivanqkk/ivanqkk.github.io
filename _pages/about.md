---
layout: archive
permalink: /
title: "Ivan Cucchi – AI for Life Sciences"
author_profile: true
description: "Personal website of Ivan Cucchi"
---

{% include base_path %}

<h2 class="home-section-title home-section-title--first"><span aria-hidden="true">🔬</span> About Me</h2>

<div class="home-intro">
  I am an <strong>Application Specialist in AI for Life Science</strong> at <a href="https://www.su.se/english" target="_blank" rel="noopener noreferrer" class="inline-link">Stockholm University</a>, working within the <a href="https://www.su.se/english/profiles/i/ivcu9753" target="_blank" rel="noopener noreferrer" class="inline-link">Department of Biochemistry and Biophysics</a> and based at <a href="https://www.scilifelab.se/" target="_blank" rel="noopener noreferrer" class="inline-link">SciLifeLab</a> (Campus Solna) in the <a href="https://bioinfo.se/" target="_blank" rel="noopener noreferrer" class="inline-link">Arne Elofsson Lab</a>.
</div>

<div class="home-intro home-intro--tight">
  As part of the <a href="https://SwedenAIFactory.se/" target="_blank" rel="noopener noreferrer" class="inline-link">Sweden AI Factory</a>, I collaborate with <a href="https://www.naiss.se/" target="_blank" rel="noopener noreferrer" class="inline-link">NAISS</a> to empower researchers from both academia and industry to leverage national AI and high-performance computing (HPC) infrastructure, accelerating data-driven discovery in the life sciences. I am also actively involved in training initiatives, contributing to the development of courses, seminars, and workshops aimed at strengthening AI competence across the life science community.
</div>

<!-- CORE EXPERTISE GRID -->
<div class="expertise-grid">
  <div class="expertise-box">
    <span class="expertise-icon" aria-hidden="true">🧬</span>
    <h3>Scientific ML</h3>
    <p>Deep learning architectures optimized for structural biology, bioimaging, omics, and general life science applications.</p>
  </div>
  <div class="expertise-box">
    <span class="expertise-icon" aria-hidden="true">💻</span>
    <h3>HPC &amp; Infrastructure</h3>
    <p>Scaling AI pipelines on national supercomputing infrastructures (NAISS) for high-throughput life science workflows.</p>
  </div>
  <div class="expertise-box">
    <span class="expertise-icon" aria-hidden="true">📊</span>
    <h3>Biomedical Data</h3>
    <p>Statistical learning and advanced feature engineering applied to complex clinical signals and biobank datasets.</p>
  </div>
</div>

<h2 class="home-section-title"><span aria-hidden="true">📣</span> News</h2>

{% comment %}
  Items live in _data/news.yml, newest first; only the first 5 are shown here.
{% endcomment %}
<div class="news-list">
{%- for item in site.data.news limit: 5 %}
  <div class="news-item">
    <span class="tag-home-date">{{ item.date }}</span>
    {%- if item.tag %}
    <span class="tag-home-label">{{ item.tag }}</span>
    {%- endif %}
    <div class="news-item-text">
      {%- if item.url -%}
        {%- if item.url contains '://' -%}
          <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer" class="inline-link">{{ item.text }}</a>
        {%- else -%}
          <a href="{{ base_path }}{{ item.url }}" class="inline-link">{{ item.text }}</a>
        {%- endif -%}
      {%- else -%}
        {{ item.text }}
      {%- endif -%}
    </div>
  </div>
{%- endfor %}
</div>

<h2 class="home-section-title"><span aria-hidden="true">📚</span> Recent Publications</h2>

{% comment %}
  Pulled live from the _publications collection (journal articles only) so this
  section never needs updating by hand. Full list lives at /publications/.
{% endcomment %}
{%- assign recent_papers = site.publications | where: "category", "manuscripts" | sort: "date" | reverse %}
<div class="pub-grid">
{%- for post in recent_papers limit: 2 %}
{% include pub-card.html post=post %}
{%- endfor %}
</div>

<div class="section-more">
  <a href="{{ base_path }}/publications/" class="inline-link">View all publications <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
</div>

<h2 class="home-section-title"><span aria-hidden="true">🎓</span> Academic Background</h2>

<div class="home-intro">
  I hold a Ph.D. in <a href="https://compmat.unipv.it/" target="_blank" rel="noopener noreferrer" class="inline-link">Computational Mathematics, Learning, and Data Science</a>, jointly offered by the <a href="https://portale.unipv.it/it" target="_blank" rel="noopener noreferrer" class="inline-link">University of Pavia</a> and the <a href="https://www.usi.ch/it" target="_blank" rel="noopener noreferrer" class="inline-link">Università della Svizzera Italiana</a>, which I defended in September 2026. My doctoral research was conducted within the thematic program <em>High Performance Computing and Deep Learning Methods for Protein Evolution and Design</em>, where I developed machine learning and deep learning methodologies for computational chemistry and biomedical applications, supervised by professors <a href="https://sites.google.com/unipv.it/lucafp/home" target="_blank" rel="noopener noreferrer" class="inline-link">Luca F. Pavarino</a> and Giorgio Colombo. My thesis, <a href="{{ base_path }}/publication/2026-phd-thesis" class="inline-link">Molecular Dynamics-Enhanced Machine Learning Models for Protein Binding and Stability</a>, coupled atomistic molecular dynamics with machine and deep learning to predict ligand modes of action, mutational protein stability, and nanobody binding.
</div>

<blockquote>
  My research background combines <strong>scientific machine learning, structural bioinformatics, molecular modeling, and statistical learning</strong>, with a focus on protein–ligand interactions, protein stability prediction, and allosteric mechanisms, including projects in low-data regimes.
</blockquote>

<div class="thesis-grid">

  <!-- PHD THESIS -->
  <a href="{{ base_path }}/publication/2026-phd-thesis" class="thesis-card-link" aria-label="2026 PhD Thesis, University of Pavia: Molecular Dynamics-Enhanced Machine Learning Models for Protein Binding and Stability">
    <div class="thesis-card">
      <div class="thesis-badge-container">
        <span class="tag-home-date">2026</span>
        <span class="tag-home-label">PhD Thesis</span>
        <span class="tag-home-label" style="margin-left: auto;">University of Pavia</span>
      </div>
      <h3><span class="thesis-title-text">Molecular Dynamics-Enhanced Machine Learning Models for Protein Binding and Stability</span></h3>
      <p class="thesis-venue-text">Coupled atomistic molecular dynamics with machine and deep learning across three biophysical domains — kinase ligand profiling, mutational protein stability, and target-independent nanobody binding — establishing a scalable computational triage protocol for molecular prioritization.</p>
    </div>
  </a>

</div>

<div class="home-intro" style="margin-top: 1.5em;">
  I also earned my <strong>BSc and MSc in Mathematics</strong> at the University of Pavia, with earlier theses on cardiac electrophysiology simulation and ECG-based arrhythmia classification — both listed on my <a href="{{ base_path }}/cv/" class="inline-link">CV</a>.
</div>

<div class="home-intro" style="margin-top: 2em; margin-bottom: 0;">
  Alongside my research, I served as a <strong>teaching assistant</strong> for multiple university courses, contributing to lectures, practical sessions, and student mentoring in mathematics and data science. I also co-supervised a Master’s thesis, contributing to the project’s methodological framework and implementation. These experiences strengthened my ability to translate complex concepts into clear, actionable guidance — a skill I now apply when supporting researchers in AI-driven projects.
</div>

<h2 class="home-heading-plain">Explore My Work</h2>

<div class="nav-grid">

  <!-- CARD 1: PUBLICATIONS -->
  <a href="{{ base_path }}/publications/" class="nav-card-link" aria-label="Publications — view papers">
    <div class="nav-card">
      <div class="nav-card-image">
        <img src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=400&q=80" alt="" loading="lazy" decoding="async" width="400" height="110">
      </div>
      <div class="nav-card-body">
        <div>
          <h3>Publications</h3>
          <p>Journal articles, conference papers, and active machine learning research manuscripts.</p>
        </div>
        <div class="nav-card-action">
          View Papers <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </a>

  <!-- CARD 2: TALKS -->
  <a href="{{ base_path }}/talks/" class="nav-card-link" aria-label="Talks and posters — view talks">
    <div class="nav-card">
      <div class="nav-card-image">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" alt="" loading="lazy" decoding="async" width="400" height="110">
      </div>
      <div class="nav-card-body">
        <div>
          <h3>Talks &amp; Posters</h3>
          <p>Conference presentations, invited biology seminars, and downloadable research posters.</p>
        </div>
        <div class="nav-card-action">
          View Talks <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </a>

  <!-- CARD 3: TEACHING -->
  <a href="{{ base_path }}/teaching/" class="nav-card-link" aria-label="Teaching — view courses">
    <div class="nav-card">
      <div class="nav-card-image">
        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80" alt="" loading="lazy" decoding="async" width="400" height="110">
      </div>
      <div class="nav-card-body">
        <div>
          <h3>Teaching</h3>
          <p>Academic courses, computational tutorials, and student mentoring initiatives.</p>
        </div>
        <div class="nav-card-action">
          View Courses <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </a>

</div>
