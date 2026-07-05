---
permalink: /
title: "Ivan Cucchi – AI for Life Sciences"
author_profile: true
description: "Personal website of Ivan Cucchi"
---

{% include base_path %}

<style>
  /* Home Modern Theme Custom Enhancements */
  .home-intro {
    font-size: 1.08em;
    line-height: 1.65;
    color: #333;
    margin-bottom: 2em;
  }
  
  .home-section-title {
    border-bottom: 2px solid #2e7d32;
    padding-bottom: 8px;
    margin-top: 2.2em;
    margin-bottom: 1.2em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-size: 1.35em;
    color: #111;
  }
  
  /* Expertise Grid */
  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin: 2em 0 3em 0;
  }
  .expertise-box {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    padding: 22px 18px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .expertise-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(46, 125, 50, 0.04), 0 3px 8px rgba(0, 0, 0, 0.02);
    border-color: rgba(46, 125, 50, 0.2);
    background: rgba(46, 125, 50, 0.01);
  }
  .expertise-icon {
    font-size: 1.8em;
    margin-bottom: 10px;
    display: block;
  }
  .expertise-box h4 {
    margin: 0 0 8px 0 !important;
    color: #2e7d32;
    font-weight: 600;
    font-size: 1.1em;
  }
  .expertise-box p {
    margin: 0;
    font-size: 0.88em;
    color: #555;
    line-height: 1.45;
  }
  
  /* Project Grid */
  .home-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
  
  .home-card {
    display: flex;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    padding: 1.4em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  
  .home-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(46, 125, 50, 0.04), 0 3px 8px rgba(0, 0, 0, 0.02);
    border-color: rgba(46, 125, 50, 0.18);
  }
  
  .home-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #2e7d32;
    opacity: 0.8;
  }
  
  .card-link-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    text-decoration: none;
  }
  
  .home-card-main {
    flex: 1;
    position: relative;
    z-index: 2;
  }
  
  .home-card-main h3 {
    margin: 0 0 6px 0 !important;
    font-size: 1.2em !important;
    font-weight: 600;
    line-height: 1.3;
    color: #111;
  }
  
  .home-card-main h3 span.title-link-text {
    background-image: linear-gradient(#2e7d32, #2e7d32);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s ease, color 0.2s ease;
  }
  
  .home-card:hover .title-link-text {
    color: #2e7d32;
    background-size: 100% 2px;
  }
  
  .home-meta-tags {
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .tag-home-date {
    background: #e8f5e9;
    color: #2e7d32;
    font-size: 0.78em;
    font-weight: 700;
    padding: 2px 9px;
    border-radius: 20px;
    text-transform: uppercase;
  }
  
  .tag-home-label {
    background: #f5f5f5;
    color: #555;
    font-size: 0.78em;
    font-weight: 600;
    padding: 2px 9px;
    border-radius: 20px;
  }
  
  .home-card-desc {
    font-size: 0.92em;
    line-height: 1.5;
    color: #555;
    margin: 0;
  }
  
  .inline-link {
    color: #2e7d32;
    text-decoration: none;
    font-weight: 600;
  }
  .inline-link:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .home-card { padding: 1.2em; }
    .expertise-grid { grid-template-columns: 1fr; gap: 15px; }
  }
</style>

<h2 class="home-section-title" style="margin-top: 0.5em;">🔬 About Me</h2>

<div class="home-intro">
  I am an <strong>Application Specialist in AI for Life Sciences</strong> at <a href="https://www.su.se/english" target="_blank" class="inline-link">Stockholm University</a>, working within the <a href="https://www.su.se/english/profiles/i/ivcu9753" target="_blank" class="inline-link">Department of Biochemistry and Biophysics</a> and based at <a href="https://www.scilifelab.se/" target="_blank" class="inline-link">SciLifeLab</a> (Campus Solna) in the <a href="https://bioinfo.se/" target="_blank" class="inline-link">Arne Elofsson Lab</a>.
</div>

<div class="home-intro" style="margin-top: -0.5em;">
  As part of the <a href="https://mimer-ai.eu/" target="_blank" class="inline-link">MIMER AI Factory</a>, I collaborate with <a href="https://www.naiss.se/" target="_blank" class="inline-link">NAISS</a> to empower researchers from both academia and industry to leverage national AI and high-performance computing (HPC) infrastructure, accelerating data-driven discovery in the life sciences. I am also actively involved in training initiatives, contributing to the development of courses, seminars, and workshops aimed at strengthening AI competence across the life science community.
</div>

<!-- CORE EXPERTISE GRID -->
<div class="expertise-grid">
  <div class="expertise-box">
    <span class="expertise-icon">🧬</span>
    <h4>Scientific ML</h4>
    <p>Deep learning architectures optimized for structural biology, bioimaging, omics, and general life science applications.</p>
  </div>
  <div class="expertise-box">
    <span class="expertise-icon">💻</span>
    <h4>HPC & Infrastructure</h4>
    <p>Scaling AI pipelines on national supercomputing infrastructures (NAISS) for high-throughput life science workflows.</p>
  </div>
  <div class="expertise-box">
    <span class="expertise-icon">📊</span>
    <h4>Biomedical Data</h4>
    <p>Statistical learning and advanced feature engineering applied to complex clinical signals and biobank datasets.</p>
  </div>
</div>

<h2 class="home-section-title">🎓 Academic Background</h2>

<div class="home-intro">
  I am currently in the final stage of my Ph.D. in <a href="https://compmat.unipv.it/" target="_blank" class="inline-link">Computational Mathematics, Learning, and Data Science</a>, jointly offered by the <a href="https://portale.unipv.it/it" target="_blank" class="inline-link">University of Pavia</a> and the <a href="https://www.usi.ch/it" target="_blank" class="inline-link">Università della Svizzera Italiana</a>, and I will defend my thesis soon. My doctoral research was conducted within the thematic program <em>High Performance Computing and Deep Learning Methods for Protein Evolution and Design</em>, where I developed machine learning and deep learning methodologies for computational chemistry and biomedical applications, supervised by professors <a href="https://sites.google.com/unipv.it/lucafp/home" target="_blank" class="inline-link">Luca F. Pavarino</a> and Giorgio Colombo.
</div>

<blockquote>
  My research background combines <strong>scientific machine learning, structural bioinformatics, molecular modeling, and statistical learning</strong>, with a focus on protein–ligand interactions, protein stability prediction, and allosteric mechanisms, including projects in low-data regimes.
</blockquote>

<div class="home-intro" style="margin-top: 1.5em; margin-bottom: 1em;">
  I hold both a <strong>BSc and MSc in Mathematics</strong> from the University of Pavia. Below are the key structural details of my core research projects:
</div>

<div class="home-grid">

  <!-- THESIS 1 -->
  <div class="home-card">
    <a href="{{ base_path }}/publication/2022-master-thesis" class="card-link-overlay"></a>
    <div class="home-card-main">
      <div class="home-meta-tags">
        <span class="tag-home-date">2022</span>
        <span class="tag-home-label">Master's Thesis</span>
        <span class="tag-home-label" style="margin-left: auto;">University of Pavia</span>
      </div>
      <h3><span class="title-link-text">Machine Learning Methods for Identifying Atrial Fibrillation in 12-lead ECGs</span></h3>
      <p class="home-card-desc">
        Investigated the automated detection of atrial fibrillation using advanced supervised classification techniques applied to the public PTB-XL dataset, integrating digital signal processing with machine learning models.
      </p>
    </div>
  </div>

  <!-- THESIS 2 -->
  <div class="home-card">
    <a href="{{ base_path }}/publication/2019-bachelor-thesis" class="card-link-overlay"></a>
    <div class="home-card-main">
      <div class="home-meta-tags">
        <span class="tag-home-date">2019</span>
        <span class="badge-cv-location">Bachelor's Thesis</span>
        <span class="tag-home-label" style="margin-left: auto;">University of Pavia</span>
      </div>
      <h3><span class="title-link-text">Numerical Models and Cardiac Electrophysiology Simulations for Long QT Syndrome</span></h3>
      <p class="home-card-desc">
        Developed and implemented numerical simulations of cardiac electrophysiology using biophysical models (such as the O’Hara–Rudy model) to reproduce and study the electrical dynamics of Long QT Syndrome.
      </p>
    </div>
  </div>

</div>

<div class="home-intro" style="margin-top: 2em; margin-bottom: 0;">
  Alongside my research, I served as a <strong>teaching assistant</strong> for multiple university courses, contributing to lectures, practical sessions, and student mentoring in mathematics and data science. I also co-supervised a Master’s thesis, contributing to the project’s methodological framework and implementation. These experiences strengthened my ability to translate complex concepts into clear, actionable guidance — a skill I now apply when supporting researchers in AI-driven projects.
</div>