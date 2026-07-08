---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
---

{% include base_path %}

<style>
  /* Modern Professional CV Theme - Dark Mode Adaptive */
  .cv-section-title {
    border-bottom: 2px solid #2e7d32;
    padding-bottom: 8px;
    margin-top: 2.5em;
    margin-bottom: 1.2em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-size: 1.4em;
    color: inherit;
  }
  
  .cv-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
  
  .cv-card {
    display: flex;
    background: var(--background-color, #ffffff);
    border: 1px solid var(--border-color, rgba(0, 0, 0, 0.07));
    border-radius: 12px;
    padding: 1.5em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  
  .cv-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(46, 125, 50, 0.05);
    border-color: rgba(46, 125, 50, 0.25);
  }
  
  .cv-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #2e7d32;
    opacity: 0.8;
  }
  
  .cv-meta-container {
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  
  /* Badge Traslucidi Coerenti */
  .badge-cv-date {
    background: rgba(46, 125, 50, 0.12);
    color: #4ea852;
    font-size: 0.8em;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .badge-cv-location {
    background: rgba(128, 128, 128, 0.1);
    color: inherit;
    font-size: 0.8em;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    opacity: 0.9;
  }
  
  .cv-card-main {
    flex: 1;
    padding-right: 20px;
  }
  
  .cv-card-main h3 {
    margin: 0 0 4px 0 !important;
    font-size: 1.25em !important;
    font-weight: 600;
    line-height: 1.3;
    color: inherit !important;
  }
  
  .cv-card-main h3 a {
    color: #4ea852;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }
  
  .cv-card-main h3 a:hover {
    border-bottom: 1px solid #2e7d32;
  }
  
  .cv-org-text {
    font-size: 0.92em;
    color: inherit;
    opacity: 0.8;
    font-style: italic;
    margin-bottom: 12px;
  }
  
  .cv-desc-text {
    font-size: 0.93em;
    line-height: 1.5;
    color: inherit;
    opacity: 0.85;
    margin: 0;
  }
  
  .cv-card-logo {
    width: 55px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .cv-card-logo img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.04));
  }
  
  /* Contenitori per Elenchi Piatti (Pubblicazioni / Didattica) */
  .cv-flat-list-box {
    background: var(--background-color, #ffffff);
    border: 1px solid var(--border-color, rgba(0,0,0,0.07));
    border-radius: 12px;
    padding: 0 1.5em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01);
  }

  .pub-item {
    padding: 1.2em 0;
    border-bottom: 1px dashed var(--border-color, rgba(0,0,0,0.12));
    line-height: 1.6;
    font-size: 0.95em;
    color: inherit;
  }
  .pub-item:last-child { border-bottom: none; }
  
  .pub-title-link {
    color: #4ea852;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
  }
  .pub-title-link:hover { border-bottom: 1px solid #2e7d32; }
  
  .grid-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
    align-items: center;
  }
  
  /* Certificates Grid */
  .cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 15px;
    margin-top: 5px;
  }
  .cert-card-modern {
    display: flex;
    align-items: center;
    background: var(--background-color, #ffffff);
    border: 1px solid var(--border-color, rgba(0,0,0,0.07));
    border-radius: 8px;
    padding: 14px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.01);
    transition: all 0.2s ease;
  }
  .cert-card-modern:hover {
    background: rgba(46, 125, 50, 0.03);
    border-color: rgba(46, 125, 50, 0.25);
    transform: translateY(-1px);
  }
  .cert-logo-box {
    width: 42px;
    margin-right: 14px;
    flex-shrink: 0;
    text-align: center;
  }
  .cert-logo-box img {
    max-width: 100%;
    max-height: 38px;
    height: auto;
  }
  .cert-info-box {
    font-size: 0.91em;
    line-height: 1.4;
    color: inherit;
  }
  .cert-info-box a {
    color: #4ea852;
    text-decoration: none;
    font-weight: 600;
  }
  .cert-info-box a:hover { text-decoration: underline; }

  @media (max-width: 600px) {
    .cv-card { flex-direction: column-reverse; }
    .cv-card-logo { width: 45px; margin-bottom: 12px; align-self: flex-start; }
  }
</style>

<div style="margin: 1.5em 0 0.5em 0; text-align: left;">
  <a href="{{ base_path }}/files/Curriculum_Vitae.pdf" download="Ivan_Cucchi_CV.pdf" style="display: inline-flex; align-items: center; background-color: #2e7d32; color: white; padding: 10px 18px; font-weight: 600; font-size: 0.95em; text-decoration: none; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.15); transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='#1b5e20'; this.style.transform='translateY(-1px)';" onmouseout="this.style.backgroundColor='#2e7d32'; this.style.transform='none';">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style="width: 18px; height: 18px; margin-right: 8px;">
      <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
    </svg>
    Download Full CV (PDF)
  </a>
</div>

<!-- ==================== PROFESSIONAL EXPERIENCE ==================== -->
<h2 class="cv-section-title" style="margin-top: 1.5em;">💼 Professional Experience</h2>
<div class="cv-grid">

  <!-- ROLE 1: SU -->
  <div class="cv-card" style="position: relative;">
    <a href="https://mimer-ai.eu/" target="_blank" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; text-decoration: none;"></a>
    <div class="cv-card-main" style="position: relative; z-index: 2; pointer-events: none;">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2026 – Present</span>
        <span class="badge-cv-location">Stockholm, Sweden</span>
      </div>
      <h3>Application Specialist in AI for Life Science</h3>
      <div class="cv-org-text" style="pointer-events: auto; position: relative; z-index: 3;">
        <a href="https://www.su.se/english" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          Stockholm University
        </a>
      </div>
      <p class="cv-desc-text">As an Application Specialist in AI for Life Science, I work at the interface of SciLifeLab, NAISS, and the MIMER AI competence center, supporting life science researchers in the development and deployment of advanced AI and machine-learning solutions on national high-performance computing infrastructures. My responsibilities include curating and managing large, heterogeneous biological datasets; assisting with applications for computational resources; and designing end-to-end machine learning pipelines for applications such as microscopy image analysis, biomolecular structure prediction, genomics, and precision medicine. I also contribute to user support, training activities, and workshops, and collaborate with national and international research infrastructures to promote the effective adoption of AI methodologies in life science research.</p>
    </div>
    <div class="cv-card-logo" style="position: relative; z-index: 2; pointer-events: none;">
      <img src="{{ base_path }}/images/su.png" alt="SU">
    </div>
  </div>

  <!-- ROLE 2: PhD UniPv -->
  <div class="cv-card" style="position: relative;">
    <a href="https://compmat.unipv.it/" target="_blank" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; text-decoration: none;"></a>
    <div class="cv-card-main" style="position: relative; z-index: 2; pointer-events: none;">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2023 – 2026</span>
        <span class="badge-cv-location">Pavia, Italy</span>
      </div>
      <h3>PhD Student</h3>
      <div class="cv-org-text" style="pointer-events: auto; position: relative; z-index: 3;">
        <a href="https://portale.unipv.it/it" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          University of Pavia
        </a>
      </div>
      <p class="cv-desc-text">PhD student in Computational Mathematics, Learning, and Data Science, enrolled in the thematic program titled <em>High Performance Computing and Deep Learning Methods for Protein Evolution and Design</em>. Research involves the analysis and prediction of protein stability, folding, and function, using data from molecular dynamics simulations and structural bioinformatics. Work includes designing hybrid AI models that combine sequence-based and structural features, with the goal of supporting drug discovery and therapeutic protein engineering. The project is carried out in collaboration with the University of Pavia and Università della Svizzera italiana (USI) in Lugano, with results published in peer-reviewed scientific journals.</p>
    </div>
    <div class="cv-card-logo" style="position: relative; z-index: 2; pointer-events: none;">
      <img src="{{ base_path }}/images/unipv.png" alt="UniPv">
    </div>
  </div>

  <!-- ROLE 3: SciLifeLab -->
  <div class="cv-card">
    <div class="cv-card-main">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2025 – 2026</span>
        <span class="badge-cv-location">Stockholm, Sweden</span>
      </div>
      <h3>PhD Visiting Student</h3>
      <div class="cv-org-text">
        <a href="https://www.scilifelab.se/" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          SciLifeLab
        </a>
      </div>
      <p class="cv-desc-text">3-month visiting period at SciLifeLab as part of my PhD program. I have regularly attended meetings and conferences, actively cooperating with Prof. Elofsson and his research team.</p>
    </div>
    <div class="cv-card-logo">
      <img src="{{ base_path }}/images/scilifelab.png" alt="SciLifeLab">
    </div>
  </div>

  <!-- ROLE 4: Weil -->
  <div class="cv-card">
    <div class="cv-card-main">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2025</span>
        <span class="badge-cv-location">Treviglio, Italy</span>
      </div>
      <h3>Mathematics Instructor</h3>
      <div class="cv-org-text">
        <a href="https://isweil.edu.it/" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          Istituto d'Istruzione Superiore Simone Weil
        </a>
      </div>
      <p class="cv-desc-text">10-hour targeted mathematics course focused on student skill potentiation and reinforcement of core concepts.</p>
    </div>
    <div class="cv-card-logo">
      <img src="{{ base_path }}/images/weil.png" alt="Weil">
    </div>
  </div>

  <!-- ROLE 5: USI -->
  <div class="cv-card">
    <div class="cv-card-main">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2024</span>
        <span class="badge-cv-location">Lugano, Switzerland</span>
      </div>
      <h3>PhD Visiting Student</h3>
      <div class="cv-org-text">
        <a href="https://www.usi.ch/it" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          Università della Svizzera Italiana
        </a>
      </div>
      <p class="cv-desc-text">6-month visiting period at Euler Institute of Università della Svizzera Italiana as part of my PhD program. I have regularly attended meetings, conferences and courses, actively cooperating with Prof. Krause and his research team.</p>
    </div>
    <div class="cv-card-logo">
      <img src="{{ base_path }}/images/usi.png" alt="USI">
    </div>
  </div>

  <!-- ROLE 6: Sync Lab -->
  <div class="cv-card">
    <div class="cv-card-main">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2022</span>
        <span class="badge-cv-location">Milan, Italy</span>
      </div>
      <h3>Intern</h3>
      <div class="cv-org-text">
        <a href="https://synclab.it/home" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          Sync Lab S.r.l.
        </a>
      </div>
      <p class="cv-desc-text">Development of integration flows using TIBCO BusinessWorks, through lessons, practical exercises, and real enterprise use cases, covering software engineering, distributed systems, relational databases with SQL, and implementation of projects with TIBCO BW and BPM as part of a postgraduate internship in the engineering and design area.</p>
    </div>
    <div class="cv-card-logo">
      <img src="{{ base_path }}/images/synclab.jpg" alt="Sync Lab">
    </div>
  </div>

  <!-- ROLE 7: Ver Italia -->
  <div class="cv-card">
    <div class="cv-card-main">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2021 – 2022</span>
        <span class="badge-cv-location">Monza, Italy</span>
      </div>
      <h3>Trainer</h3>
      <div class="cv-org-text">
        <a href="https://ver-italia.it/" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          Ver Italia — Tutoring & Education
        </a>
      </div>
      <p class="cv-desc-text">Provided educational support through private tutoring for students, focusing on study methods and school activities.</p>
    </div>
    <div class="cv-card-logo">
      <img src="{{ base_path }}/images/ver.png" alt="Ver Italia">
    </div>
  </div>
</div>

<!-- ==================== EDUCATION ==================== -->
<h2 class="cv-section-title">🎓 Education</h2>

<style>
  /* Griglia specifica a 3 colonne per i titoli di studio */
  .education-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2em;
    width: 100%;
  }

  .edu-card-modern {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--background-color, #ffffff);
    border: 1px solid var(--border-color, rgba(0, 0, 0, 0.08));
    border-radius: 12px;
    padding: 1.2em;
    min-height: 140px; /* Altezza compatta e bilanciata */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .edu-card-modern:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(46, 125, 50, 0.06);
    border-color: rgba(46, 125, 50, 0.25);
  }

  /* Barra verticale verde asimmetrica */
  .edu-card-modern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #2e7d32;
    opacity: 0.8;
    z-index: 3;
  }

  /* Watermark del logo sullo sfondo della card */
  .edu-bg-watermark {
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 110px;
    height: 110px;
    opacity: 0.04;
    z-index: 1;
    pointer-events: none;
    transition: all 0.3s ease;
    filter: grayscale(100%);
  }

  .edu-card-modern:hover .edu-bg-watermark {
    opacity: 0.08;
    transform: scale(1.05) rotate(-5deg);
  }

  .edu-main-content {
    position: relative;
    z-index: 2;
  }

  .edu-card-modern h3 {
    margin: 4px 0 2px 0 !important;
    font-size: 1.1em !important;
    font-weight: 600;
    line-height: 1.35;
    color: inherit !important;
  }

  /* Responsive: si rompe su una colonna unica su schermi piccoli */
  @media (max-width: 768px) {
    .education-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="education-grid">

  <!-- DEGREE 1: Master -->
  <div class="edu-card-modern">
    <img src="{{ base_path }}/images/unipv.png" class="edu-bg-watermark" alt="">
    <div class="edu-main-content">
      <div class="cv-meta-container" style="margin-bottom: 6px;">
        <span class="badge-cv-date" style="padding: 1px 8px; font-size: 0.72em;">2019 – 2022</span>
        <span class="badge-cv-location" style="padding: 1px 8px; font-size: 0.72em;">Pavia, Italy</span>
      </div>
      <h3>Master in Mathematics</h3>
      <div class="cv-org-text" style="margin-bottom: 0; font-size: 0.85em; opacity: 0.75;">
        <a href="https://portale.unipv.it/it" target="_blank" style="color: inherit; text-decoration: none;">University of Pavia</a>
      </div>
    </div>
  </div>

  <!-- DEGREE 2: Bachelor -->
  <div class="edu-card-modern">
    <img src="{{ base_path }}/images/unipv.png" class="edu-bg-watermark" alt="">
    <div class="edu-main-content">
      <div class="cv-meta-container" style="margin-bottom: 6px;">
        <span class="badge-cv-date" style="padding: 1px 8px; font-size: 0.72em;">2011 – 2019</span>
        <span class="badge-cv-location" style="padding: 1px 8px; font-size: 0.72em;">Pavia, Italy</span>
      </div>
      <h3>Bachelor in Mathematics</h3>
      <div class="cv-org-text" style="margin-bottom: 0; font-size: 0.85em; opacity: 0.75;">
        <a href="https://portale.unipv.it/it" target="_blank" style="color: inherit; text-decoration: none;">University of Pavia</a>
      </div>
    </div>
  </div>

  <!-- DEGREE 3: High School -->
  <div class="edu-card-modern">
    <img src="{{ base_path }}/images/copernico.png" class="edu-bg-watermark" alt="">
    <div class="edu-main-content">
      <div class="cv-meta-container" style="margin-bottom: 6px;">
        <span class="badge-cv-date" style="padding: 1px 8px; font-size: 0.72em;">2007 – 2011</span>
        <span class="badge-cv-location" style="padding: 1px 8px; font-size: 0.72em;">Pavia, Italy</span>
      </div>
      <h3>Scientific High School Graduation</h3>
      <div class="cv-org-text" style="margin-bottom: 0; font-size: 0.85em; opacity: 0.75;">
        <a href="https://copernico.edu.it/" target="_blank" style="color: inherit; text-decoration: none;">Niccolò Copernico</a>
      </div>
    </div>
  </div>

</div>

<!-- ==================== THESES ==================== -->
<h2 class="cv-section-title">📝 Theses</h2>

<style>
  /* Griglia specifica a 2 colonne per le Tesi */
  .theses-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
    width: 100%;
  }

  .thesis-card-modern {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--background-color, #ffffff);
    border: 1px solid var(--border-color, rgba(0, 0, 0, 0.08));
    border-radius: 12px;
    padding: 1.3em;
    min-height: 220px; /* Altezza ottimale per contenere l'abstract (excerpt) */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .thesis-card-modern:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(46, 125, 50, 0.06);
    border-color: rgba(46, 125, 50, 0.25);
  }

  /* Barra verticale verde asimmetrica */
  .thesis-card-modern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #2e7d32;
    opacity: 0.8;
    z-index: 3;
  }

  /* Logo UniPv in Filigrana sullo sfondo */
  .thesis-bg-watermark {
    position: absolute;
    right: -15px;
    bottom: -15px;
    width: 140px;
    height: 140px;
    opacity: 0.03; /* Molto leggero per non disturbare la lettura dell'abstract */
    z-index: 1;
    pointer-events: none;
    transition: all 0.3s ease;
    filter: grayscale(100%);
  }

  .thesis-card-modern:hover .thesis-bg-watermark {
    opacity: 0.07;
    transform: scale(1.05) rotate(-5deg);
  }

  .thesis-main-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .thesis-card-modern h3 {
    margin: 4px 0 3px 0 !important;
    font-size: 1.15em !important;
    font-weight: 600;
    line-height: 1.35;
    color: inherit !important;
  }

  .thesis-card-modern h3 a {
    color: inherit;
    text-decoration: none;
    background-image: linear-gradient(#2e7d32, #2e7d32);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s ease, color 0.2s ease;
  }

  .thesis-card-modern:hover h3 a {
    color: #4ea852;
    background-size: 100% 2px;
  }

  /* Responsive: collassa a 1 colonna su smartphone */
  @media (max-width: 768px) {
    .theses-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="theses-grid">

  <!-- MASTER'S THESIS -->
  <div class="thesis-card-modern">
    <img src="{{ base_path }}/images/unipv.png" class="thesis-bg-watermark" alt="">
    <div class="thesis-main-content">
      <div class="cv-meta-container" style="margin-bottom: 8px;">
        <span class="badge-cv-date" style="padding: 1px 8px; font-size: 0.72em;">2022</span>
        <span class="badge-cv-location" style="padding: 1px 8px; font-size: 0.72em;">Master's Thesis</span>
      </div>
      
      <h3><a href="{{ base_path }}/publication/2022-master-thesis">Machine Learning Methods for Identifying Atrial Fibrillation in 12-lead ECGs</a></h3>
      <div class="cv-org-text" style="margin-bottom: 10px; font-size: 0.84em; opacity: 0.75;">
        Supervisor: Luca F. Pavarino | University of Pavia
      </div>
      
      <p class="cv-desc-text" style="font-size: 0.85em; opacity: 0.8; line-height: 1.45;">
        The work focused on identifying atrial fibrillation through the analysis of 12-lead ECG signals using supervised Machine Learning techniques. Explored and compared the performance of k-Nearest Neighbors, Random Forest, and Multilayer Perceptron classifiers. The study involved preprocessing clinical data, implementing classification models, and evaluating their accuracy in detecting cardiac arrhythmias. Integrated concepts from physiology, signal processing, and computational modeling to enhance understanding and support preventive diagnostics in cardiology.
      </p>
    </div>
  </div>

  <!-- BACHELOR'S THESIS -->
  <div class="thesis-card-modern">
    <img src="{{ base_path }}/images/unipv.png" class="thesis-bg-watermark" alt="">
    <div class="thesis-main-content">
      <div class="cv-meta-container" style="margin-bottom: 8px;">
        <span class="badge-cv-date" style="padding: 1px 8px; font-size: 0.72em;">2019</span>
        <span class="badge-cv-location" style="padding: 1px 8px; font-size: 0.72em;">Bachelor's Thesis</span>
      </div>
      
      <h3><a href="{{ base_path }}/publication/2019-bachelor-thesis">Numerical Models and Cardiac Electrophysiology Simulations for Long QT Syndrome</a></h3>
      <div class="cv-org-text" style="margin-bottom: 10px; font-size: 0.84em; opacity: 0.75;">
        Supervisor: Luca F. Pavarino | University of Pavia
      </div>
      
      <p class="cv-desc-text" style="font-size: 0.85em; opacity: 0.8; line-height: 1.45;">
        The work focused on modeling and simulating Long QT Syndrome (LQTS) through numerical representations of cardiac electrophysiology. Explored and implemented biophysical models such as Hodgkin-Huxley, Luo-Rudy, and O’Hara-Rudy to reproduce action potentials and ion current dynamics. Simulations were conducted to study the electrical behavior of cardiac cells under normal and pathological conditions. The study integrated concepts from cardiac physiology, mathematical modeling, and computational simulation to deepen the understanding of arrhythmogenic mechanisms and support research in cardiology.
      </p>
    </div>
  </div>

</div>

<!-- ==================== PUBLICATIONS ==================== -->
<h2 class="cv-section-title">📚 Publications</h2>
<div class="cv-flat-list-box">
  <div class="pub-item">
    <span style="background: rgba(46, 125, 50, 0.12); color: #4ea852; font-size: 0.75em; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-right: 6px; text-transform: uppercase;">JCTC</span>
    📅 <strong>2025</strong> | <strong>Cucchi, I.</strong>, Frasnetti, E., Frigerio, F., Cinquini, F., Pavoni, S., Pavarino, L. F., & Colombo, G. (2025). 
    <a href="{{ base_path }}/publication/2025-09-11-Molecule" class="pub-title-link">MOLECULE: Molecular-dynamics and Optimized deep Learning for Entropy-regularized Classification and Uncertainty-aware Ligand Evaluation</a>. 
    <em>Journal of Chemical Theory and Computation</em>, 21(18), 9186–9199. <a href="https://doi.org/10.1021/acs.jctc.5c01140" target="_blank" style="font-size: 0.85em; opacity: 0.7; text-decoration: none; color: inherit;">[DOI]</a>
  </div>
  <div class="pub-item">
    <span style="background: rgba(46, 125, 50, 0.12); color: #4ea852; font-size: 0.75em; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-right: 6px; text-transform: uppercase;">Cell Stress</span>
    📅 <strong>2025</strong> | Mansoor, S., Frasnetti, E., <strong>Cucchi, I.</strong>, Magni, A., Bonollo, G., Serapian, S. A., Pavarino, L. F., & Colombo, G. (2025). 
    <a href="{{ base_path }}/publication/2025-02-01-Large-scale-energy-decomposition" class="pub-title-link">LARGE SCALE ENERGY DECOMPOSITION FOR THE ANALYSIS OF PROTEIN STABILITY</a>. 
    <em>Cell Stress and Chaperones</em>, 30(1), 57–68. <a href="https://doi.org/10.1016/j.cstres.2025.01.001" target="_blank" style="font-size: 0.85em; opacity: 0.7; text-decoration: none; color: inherit;">[DOI]</a>
  </div>
  <div class="pub-item">
    <span style="background: rgba(46, 125, 50, 0.12); color: #4ea852; font-size: 0.75em; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-right: 6px; text-transform: uppercase;">JCTC</span>
    📅 <strong>2024</strong> | Frasnetti, E., <strong>Cucchi, I.</strong>, Pavoni, S., Frigerio, F., Cinquini, F., Serapian, S. A., Pavarino, L. F., & Colombo, G. (2024). 
    <a href="{{ base_path }}/publication/2024-10-10-Integrating-Molecular-Dynamics" class="pub-title-link">Integrating Molecular Dynamics and Machine Learning Algorithms to Predict the Functional Profile of Kinase Ligands</a>. 
    <em>Journal of Chemical Theory and Computation</em>, 20(20), 9209–9229. <a href="https://doi.org/10.1021/acs.jctc.4c01097" target="_blank" style="font-size: 0.85em; opacity: 0.7; text-decoration: none; color: inherit;">[DOI]</a>
  </div>
</div>

<!-- ==================== ACADEMIC SUPERVISION ==================== -->
<h2 class="cv-section-title">👥 Academic Supervision</h2>
<div class="cv-card">
  <div class="cv-card-main">
    <div class="cv-meta-container">
      <span class="badge-cv-date">2025</span>
      <span class="badge-cv-location">Master Thesis Co-supervision</span>
    </div>
    <h3>Integrating Molecular Dynamics Simulations with Machine Learning and Deep Learning to Predict Nanobody Binding Modes</h3>
    <div style="font-size: 0.88em; margin: 4px 0 12px 0; opacity: 0.8; color: inherit; line-height: 1.4;">
      <strong>Student:</strong> Mattia Lai | <strong>University:</strong> University of Pavia <br>
      <strong>Supervisors:</strong> Luca F. Pavarino, Giorgio Colombo | <strong>Co-supervisors:</strong> Gauthier Trèves, Ivan Cucchi
    </div>
    <p class="cv-desc-text">The work focused on predicting nanobody–antigen binding mechanisms by integrating molecular dynamics simulations with supervised machine learning approaches. Physicochemical descriptors were extracted from high-quality crystallographic structures and used to train and compare machine learning and deep learning classifiers, optimizing the trade-off between predictive performance and computational efficiency. The models were developed in a target-free setting, without prior assumptions on binding sites or antigen type, and addressed both orthosteric and allosteric recognition mechanisms. Feature importance analysis was then performed to uncover the structural determinants distinguishing the two binding classes, transforming machine learning from a purely predictive tool into a physics-informed framework for molecular insight in drug discovery.</p>
  </div>
</div>

<!-- ==================== TALKS & PRESENTATIONS ==================== -->
<h2 class="cv-section-title">📢 Talks & Presentations</h2>
<div class="cv-flat-list-box">
  
  <div class="pub-item">
    <span style="background: rgba(13, 71, 161, 0.12); color: #42a5f5; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">TALK</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">Sep 2025</strong> | 
    <a href="{{ base_path }}/talks/2025-09-26-yamc" class="pub-title-link">5th Edition of Young Applied Mathematicians Conference</a>. University of Padua.
  </div>
  
  <div class="pub-item">
    <span style="background: rgba(26, 35, 126, 0.12); color: #7986cb; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">SEMINAR</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">May 2025</strong> | 
    <a href="{{ base_path }}/talks/2025-05-26-beltrami" class="pub-title-link">Caffè Beltrami</a>. University of Pavia.
  </div>
  
  <div class="pub-item">
    <span style="background: rgba(230, 81, 0, 0.12); color: #ffb74d; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">POSTER</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">May 2025</strong> | 
    <a href="{{ base_path }}/talks/2025-05-23-compmat2" class="pub-title-link">Spring Workshop COMPMAT</a>. University of Pavia.
  </div>
  
  <div class="pub-item">
    <span style="background: rgba(230, 81, 0, 0.12); color: #ffb74d; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">POSTER</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">May 2025</strong> | 
    <a href="{{ base_path }}/talks/2025-05-22-icam" class="pub-title-link">ICAM Workshop</a>. University of Pavia.
  </div>
  
  <div class="pub-item">
    <span style="background: rgba(230, 81, 0, 0.12); color: #ffb74d; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">POSTER</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">Apr 2025</strong> | 
    <a href="{{ base_path }}/talks/2025-04-07-human-technopole" class="pub-title-link">1st Workshop on Data Science for Health and Biology</a>. HT & PoliMi.
  </div>
  
  <div class="pub-item">
    <span style="background: rgba(13, 71, 161, 0.12); color: #42a5f5; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">TALK</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">Jan 2025</strong> | 
    <a href="{{ base_path }}/talks/2025-01-31-bari" class="pub-title-link">3rd Workshop of UMI Group — Mathematics for Artificial Intelligence and Machine Learning</a>. University of Bari.
  </div>
  
  <div class="pub-item">
    <span style="background: rgba(230, 81, 0, 0.12); color: #ffb74d; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">POSTER</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">Jun 2024</strong> | 
    <a href="{{ base_path }}/talks/2024-06-21-sissa" class="pub-title-link">Scientific Machine Learning, emerging topics</a>. SISSA.
  </div>
  
  <div class="pub-item">
    <span style="background: rgba(78, 52, 46, 0.12); color: #bcaaa4; font-size: 0.75em; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-right: 8px; display: inline-block; min-width: 65px; text-align: center;">TALK+POST</span>
    <strong style="color:#4ea852; font-size: 0.9em; margin-right: 5px;">May 2024</strong> | 
    <a href="{{ base_path }}/talks/2024-05-08-compmat1" class="pub-title-link">Spring Workshop COMPMAT</a>. University of Pavia.
  </div>

</div>

<!-- ==================== TEACHING ASSISTANCE ==================== -->
<h2 class="cv-section-title">🏫 Teaching Assistance</h2>
<div class="cv-flat-list-box">
  <div class="pub-item">📅 <strong>2024 – 2025</strong> | <a href="https://unipv.coursecatalogue.cineca.it/corsi/2024/10057/insegnamenti/2024/17222/2024/9999?schemaid=16894" class="pub-title-link">507290 — Programming 2</a> <span style="opacity: 0.7;">(BSc in Mathematics, University of Pavia)</span></div>
  <div class="pub-item">📅 <strong>2024 – 2025</strong> | <a href="https://unipv.coursecatalogue.cineca.it/corsi/2024/10057/insegnamenti/2024/13139/2024/9999?schemaid=16894" class="pub-title-link">507289 — Programming 1</a> <span style="opacity: 0.7;">(BSc in Mathematics, University of Pavia)</span></div>
  <div class="pub-item">📅 <strong>2024 – 2025</strong> | <a href="https://unipv.coursecatalogue.cineca.it/corsi/2024/10017/insegnamenti/2024/7561/2024/9999?schemaid=16505" class="pub-title-link">500142 — Mathematics</a> <span style="opacity: 0.7;">(BSc in Economics, University of Pavia)</span></div>
  <div class="pub-item">📅 <strong>2024 – 2025</strong> | <a href="https://unipv.coursecatalogue.cineca.it/corsi/2024/10063/insegnamenti/2024/9502/2024/1?schemaid=16900" target="_blank" class="pub-title-link">502886 — Dynamical systems: theory and numerical methods (Year 2)</a> <span style="opacity: 0.7;">(MSc in Mathematics and Bioengineering, University of Pavia)</span></div>
  <div class="pub-item">📅 <strong>2023 – 2024</strong> | <a href="https://unipv.coursecatalogue.cineca.it/corsi/2023/10063/insegnamenti/2023/9502/2009/10004?schemaid=16006" target="_blank" class="pub-title-link">502886 — Dynamical systems: theory and numerical methods (Year 1)</a> <span style="opacity: 0.7;">(MSc in Mathematics and Bioengineering, University of Pavia)</span></div>
</div>

<!-- ==================== TECHNICAL SKILLS ==================== -->
<h2 class="cv-section-title">🛠 Technical Skills</h2>

### **Programming Languages**
<div class="grid-badges">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" style="height: 20px;">
  <span style="display: inline-flex; align-items: center; background-color: #ED8B00; color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 11px; font-weight: bold; padding: 0 8px; height: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
    <img src="{{ base_path }}/images/matlab.png" alt="MATLAB Logo" style="height: 14px; width: 14px; object-fit: contain; margin-right: 6px; border-radius: 2px;">
    MATLAB
  </span>
  <img src="https://img.shields.io/badge/Julia-9558B2?style=flat-square&logo=julia&logoColor=white" alt="Julia" style="height: 20px;">
  <img src="https://img.shields.io/badge/LaTeX-008080?style=flat-square&logo=latex&logoColor=white" alt="LaTeX" style="height: 20px;">
</div>

### **Core Libraries & Modules**
`NumPy` • `pandas` • `PyTorch` • `scikit-learn` • `SciPy` • `RDKit`

<!-- ==================== CERTIFICATES & GRANTS ==================== -->
<h2 class="cv-section-title">🎖 Certificates & Grants</h2>
<div class="cert-grid">
  <div class="cert-card-modern">
    <div class="cert-logo-box"><img src="{{ base_path }}/images/b2.png" alt="B2"></div>
    <div class="cert-info-box"><strong>2024</strong><br><a href="https://app.myopenbadge.com/receive/CEsL-4857988ff331239c331c8b1e18c48c48-7fB2I1w0PFbe-51710857757/vgFUTrces-b534f9e3b9537a0b5bfcb536bd011a02-7S43uD1AUf-5/public" target="_blank">B2 English Open Badge</a></div>
  </div>
  <div class="cert-card-modern">
    <div class="cert-logo-box"><img src="{{ base_path }}/images/nvidia.png" alt="NVIDIA"></div>
    <div class="cert-info-box"><strong>2023</strong><br><a href="https://learn.nvidia.com/certificates?id=bbb853648afc49519efc7d3da887fa70" target="_blank">Fundamentals of Accelerated Computing with CUDA Python</a></div>
  </div>
  <div class="cert-card-modern">
    <div class="cert-logo-box"><img src="{{ base_path }}/images/nvidia.png" alt="NVIDIA"></div>
    <div class="cert-info-box"><strong>2023</strong><br><a href="https://courses.nvidia.com/certificates/2286a85c41c041f9a0c079ad6ea12a5e" target="_blank">Accelerating End-to-End Data Science Workflows</a></div>
  </div>
  <div class="cert-card-modern">
    <div class="cert-logo-box"><img src="{{ base_path }}/images/nvidia.png" alt="NVIDIA"></div>
    <div class="cert-info-box"><strong>2023</strong><br><a href="https://courses.nvidia.com/certificates/bde07bd68b52478bb152a297ae1cac20/" target="_blank">Getting Started with Deep Learning</a></div>
  </div>
  <div class="cert-card-modern">
    <div class="cert-logo-box"><img src="{{ base_path }}/images/pnrr.jpg" alt="PNRR"></div>
    <div class="cert-info-box"><strong>2022</strong><br>PNRR-MUR Research Programme CN00000013 (National Centre for HPC)</div>
  </div>
  <div class="cert-card-modern">
    <div class="cert-logo-box"><img src="{{ base_path }}/images/shoreikan.png" alt="Karate"></div>
    <div class="cert-info-box"><strong>2009</strong><br>Shorei-Kan Karate Gojuryu Sho Dan</div>
  </div>
</div>

<!-- ==================== VOLUNTEERING ==================== -->
<h2 class="cv-section-title">🤝 Volunteering</h2>
<div class="cv-grid">
  <div class="cv-card">
    <div class="cv-card-main">
      <div class="cv-meta-container">
        <span class="badge-cv-date">2016 – 2023</span>
        <span class="badge-cv-location">Binasco, Italy</span>
      </div>
      <h3>Rescuer</h3>
      <div class="cv-org-text">
        <a href="https://www.crocebianca.org/" target="_blank" style="color: #4ea852; text-decoration: none; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid #2e7d32'" onmouseout="this.style.borderBottom='transparent'">
          Croce Bianca Milano
        </a>
      </div>
      <p class="cv-desc-text">Volunteered as a rescuer providing emergency medical assistance, patient transport, and support during urgent interventions, demonstrating teamwork, stress management, and a strong commitment to public service.</p>
    </div>
    <div class="cv-card-logo">
      <img src="{{ base_path }}/images/crocebianca.png" alt="Croce Bianca">
    </div>
  </div>
</div>