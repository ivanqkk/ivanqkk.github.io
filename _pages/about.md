---
layout: archive
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
  I am an <strong>Application Specialist in AI for Life Science</strong> at <a href="https://www.su.se/english" target="_blank" class="inline-link">Stockholm University</a>, working within the <a href="https://www.su.se/english/profiles/i/ivcu9753" target="_blank" class="inline-link">Department of Biochemistry and Biophysics</a> and based at <a href="https://www.scilifelab.se/" target="_blank" class="inline-link">SciLifeLab</a> (Campus Solna) in the <a href="https://bioinfo.se/" target="_blank" class="inline-link">Arne Elofsson Lab</a>.
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

<style>
  /* Thesis Cards Grid Layout */
  .thesis-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.8em;
    margin-top: 1.5em;
  }
  
  .thesis-card-link {
    text-decoration: none !important;
    color: inherit !important;
    display: block;
  }
  
  .thesis-card-modern {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    padding: 1.5em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  
  /* Hover effects on the main card */
  .thesis-card-link:hover .thesis-card-modern {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(46, 125, 50, 0.04), 0 3px 8px rgba(0, 0, 0, 0.02);
    border-color: rgba(46, 125, 50, 0.25);
  }
  
  .thesis-card-modern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #2e7d32;
    opacity: 0.8;
    transition: width 0.2s ease;
  }
  
  .thesis-card-link:hover .thesis-card-modern::before {
    width: 6px;
  }
  
  .thesis-badge-container {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    align-items: center;
    flex-wrap: wrap;
  }
  
  /* Cromatic Badge Types */
  .badge-thesis-phd {
    background: #e8eaf6;
    color: #1a237e;
    font-size: 0.75em;
    font-weight: 700;
    padding: 3px 9px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }
  
  .badge-thesis-msc {
    background: #efebe9;
    color: #4e342e;
    font-size: 0.75em;
    font-weight: 700;
    padding: 3px 9px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }
  
  .thesis-date-text {
    font-size: 0.82em;
    font-weight: 700;
    color: #2e7d32;
    text-transform: uppercase;
    margin-left: 6px;
  }
  
  .thesis-location-tag {
    background: #f5f5f5;
    color: #666;
    font-size: 0.78em;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 20px;
    margin-left: auto;
  }
  
  .thesis-card-modern h3 {
    margin: 0 0 6px 0 !important;
    font-size: 1.22em !important;
    font-weight: 600;
    line-height: 1.35;
    color: #111;
  }
  
  .thesis-title-text {
    background-image: linear-gradient(#2e7d32, #2e7d32);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s ease, color 0.2s ease;
  }
  
  .thesis-card-link:hover .thesis-title-text {
    color: #2e7d32;
    background-size: 100% 2px;
  }
  
  .thesis-venue-text {
    font-size: 0.9em;
    color: #555;
    margin: 0;
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    .thesis-location-tag { margin-left: 0; width: 100%; margin-top: 4px; }
  }
</style>

<div class="thesis-grid">

  <!-- MASTER THESIS -->
  <a href="{{ base_path }}/publication/2022-master-thesis" target="_blank" class="thesis-card-link">
    <div class="thesis-card-modern">
      <div class="thesis-badge-container">
        <span class="tag-home-date">2022</span>
        <span class="tag-home-label">Master's Thesis</span>
        <span class="tag-home-label" style="margin-left: auto;">University of Pavia</span>
      </div>
      <h3><span class="thesis-title-text">Machine Learning Methods for Identifying Atrial Fibrillation in 12-lead ECGs</span></h3>
      <p class="thesis-venue-text">Investigated the automated detection of atrial fibrillation using advanced supervised classification techniques applied to the public PTB-XL dataset, integrating digital signal processing with machine learning models.</p>
    </div>
  </a>

  <!-- BACHELOR THESIS -->
  <a href="{{ base_path }}/publication/2019-bachelor-thesis" target="_blank" class="thesis-card-link">
    <div class="thesis-card-modern">
      <div class="thesis-badge-container">
        <span class="tag-home-date">2019</span>
        <span class="tag-home-label">Bachelor's Thesis</span>
        <span class="tag-home-label" style="margin-left: auto;">University of Pavia</span>
      </div>
      <h3><span class="thesis-title-text">Numerical Models and Cardiac Electrophysiology Simulations for Long QT Syndrome</span></h3>
      <p class="thesis-venue-text">Developed and implemented numerical simulations of cardiac electrophysiology using biophysical models (such as the O’Hara–Rudy model) to reproduce and study the electrical dynamics of Long QT Syndrome.</p>
    </div>
  </a>

</div>

<div class="home-intro" style="margin-top: 2em; margin-bottom: 0;">
  Alongside my research, I served as a <strong>teaching assistant</strong> for multiple university courses, contributing to lectures, practical sessions, and student mentoring in mathematics and data science. I also co-supervised a Master’s thesis, contributing to the project’s methodological framework and implementation. These experiences strengthened my ability to translate complex concepts into clear, actionable guidance — a skill I now apply when supporting researchers in AI-driven projects.
</div>

<h2 style="margin-top: 2.5em; margin-bottom: 1em; font-size: 1.5em; font-weight: 700; color: #111; letter-spacing: -0.3px;">Explore My Work</h2>

<style>
  /* Navigation Grid System */
  .nav-grid-modern {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5em;
    margin-top: 1.5em;
    margin-bottom: 3em;
  }

  .nav-card-link {
    text-decoration: none !important;
    color: inherit !important;
    display: block;
  }

  .nav-card {
    display: flex;
    flex-direction: column;
    height: 240px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.015), 0 1px 3px rgba(0, 0, 0, 0.02);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }

  /* Image Header Container */
  .nav-card-image {
    height: 110px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #e8f5e9;
  }

  .nav-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Card Body */
  .nav-card-body {
    padding: 1.2em;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    position: relative;
    z-index: 2;
  }

  .nav-card h3 {
    margin: 0 0 6px 0 !important;
    font-size: 1.08em !important;
    font-weight: 600 !important;
    color: #111 !important;
    line-height: 1.3;
    transition: color 0.25s ease;
  }

  .nav-card p {
    margin: 0 !important;
    font-size: 0.82em !important;
    line-height: 1.4 !important;
    color: #666 !important;
  }

  /* Action Indicator Inside Card */
  .nav-card-action {
    font-size: 0.8em;
    font-weight: 700;
    color: #2e7d32;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.8;
    transition: all 0.25s ease;
  }

  .nav-card-action i {
    margin-left: 4px;
    transition: transform 0.25s ease;
  }

  /* Hover Animations */
  .nav-card-link:hover .nav-card {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(46, 125, 50, 0.05), 0 4px 12px rgba(0, 0, 0, 0.02);
    border-color: rgba(46, 125, 50, 0.2);
  }

  .nav-card-link:hover .nav-card-image img {
    transform: scale(1.06);
  }

  .nav-card-link:hover h3 {
    color: #2e7d32 !important;
  }

  .nav-card-link:hover .nav-card-action {
    opacity: 1;
    color: #1b5e20;
  }

  .nav-card-link:hover .nav-card-action i {
    transform: translateX(3px);
  }

  /* Responsive Breakpoints */
  @media (max-width: 768px) {
    .nav-grid-modern { grid-template-columns: repeat(2, 1fr); gap: 1.2em; }
  }
  @media (max-width: 500px) {
    .nav-grid-modern { grid-template-columns: 1fr; gap: 1.2em; }
    .nav-card { height: 210px; }
    .nav-card-image { height: 90px; }
  }
</style>

<div class="nav-grid-modern">

  <!-- CARD 1: PUBLICATIONS -->
  <a href="{{ base_path }}/publications/" class="nav-card-link">
    <div class="nav-card">
      <div class="nav-card-image">
        <!-- Immagine astratta che ricorda strutture molecolari/reticoli cristallini -->
        <img src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=400&q=80" alt="Publications Background">
      </div>
      <div class="nav-card-body">
        <div>
          <h3>Publications</h3>
          <p>Journal articles, conference papers, and active machine learning research manuscripts.</p>
        </div>
        <div class="nav-card-action">
          View Papers <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </a>

  <!-- CARD 2: TALKS -->
  <a href="{{ base_path }}/talks/" class="nav-card-link">
    <div class="nav-card">
      <div class="nav-card-image">
        <!-- Immagine astratta di un auditorium o network di nodi interconnessi per presentazioni -->
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" alt="Talks Background">
      </div>
      <div class="nav-card-body">
        <div>
          <h3>Talks & Posters</h3>
          <p>Conference presentations, invited biology seminars, and downloadable research posters.</p>
        </div>
        <div class="nav-card-action">
          View Talks <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </a>

  <!-- CARD 3: TEACHING -->
  <a href="{{ base_path }}/teaching/" class="nav-card-link">
    <div class="nav-card">
      <div class="nav-card-image">
        <!-- Immagine minimale astratta geometrica/lavagna luminosa che richiama l'insegnamento -->
        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80" alt="Teaching Background">
      </div>
      <div class="nav-card-body">
        <div>
          <h3>Teaching</h3>
          <p>Academic courses, computational tutorials, and student mentoring initiatives.</p>
        </div>
        <div class="nav-card-action">
          View Courses <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </a>

</div>