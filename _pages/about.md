---
layout: archive
permalink: /
title: "Ivan Cucchi – AI for Life Sciences"
author_profile: true
description: "Personal website of Ivan Cucchi"
hero: true
scripts: [hero-network, timeline, cite, events]
---

{% include base_path %}

{% include hero.html title="AI for Life Sciences" subtitle="Application Specialist at Stockholm University and Sweden AI Factory, helping life-science researchers put national AI and HPC infrastructure to work." %}

<h2 class="home-section-title" id="about">About me</h2>

<div class="home-intro">
  I am an <strong>Application Specialist in AI for Life Science</strong> at <a href="https://www.su.se/english" target="_blank" rel="noopener noreferrer" class="inline-link">Stockholm University</a>, working within the <a href="https://www.su.se/english/profiles/i/ivcu9753" target="_blank" rel="noopener noreferrer" class="inline-link">Department of Biochemistry and Biophysics</a> and based at <a href="https://www.scilifelab.se/" target="_blank" rel="noopener noreferrer" class="inline-link">SciLifeLab</a> (Campus Solna) in the <a href="https://bioinfo.se/" target="_blank" rel="noopener noreferrer" class="inline-link">Arne Elofsson Lab</a>.
</div>

<div class="home-intro home-intro--tight">
  As part of the <a href="https://SwedenAIFactory.se/" target="_blank" rel="noopener noreferrer" class="inline-link">Sweden AI Factory</a>, I collaborate with <a href="https://www.naiss.se/" target="_blank" rel="noopener noreferrer" class="inline-link">NAISS</a> to empower researchers from both academia and industry to leverage national AI and high-performance computing (HPC) infrastructure, accelerating data-driven discovery in the life sciences. I am also actively involved in training initiatives, contributing to the development of courses, seminars, and workshops aimed at strengthening AI competence across the life science community.
</div>

{% comment %}
  Upcoming workshops and courses from _data/events.yml, at most two; the
  section disappears when there is none (_includes/upcoming-events.html).
{% endcomment %}
{% include upcoming-events.html heading="Upcoming events" heading_id="upcoming" max=2 more="/talks/" %}

<h2 class="home-section-title" id="focus">What I work on</h2>

<ul class="focus">
  <li><span class="ico-wrap">{% include icon.html name="dna" %}</span><h3>Scientific ML</h3><p>Deep learning for structural biology, bioimaging, omics and wider life-science applications.</p></li>
  <li><span class="ico-wrap">{% include icon.html name="server" %}</span><h3>HPC and infrastructure</h3><p>Scaling AI pipelines on NAISS supercomputers for high-throughput life-science workflows.</p></li>
  <li><span class="ico-wrap">{% include icon.html name="pulse" %}</span><h3>Biomedical data</h3><p>Statistical learning and feature engineering on clinical signals and biobank data.</p></li>
</ul>

<h2 class="home-section-title" id="news">News</h2>

{% comment %}
  Items live in _data/news.yml, newest first. The timeline line fills as the
  page scrolls (assets/js/timeline.js); without JavaScript it is drawn full.
{% endcomment %}
{% include news-timeline.html items=site.data.news %}

<h2 class="home-section-title" id="recent">Recent publications</h2>

{% comment %}
  Pulled live from the _publications collection (journal articles only) so this
  section never needs updating by hand. Full list lives at /publications/.
{% endcomment %}
{%- assign recent_papers = site.publications | where: "category", "manuscripts" | sort: "date" | reverse %}
<div class="pubs pubs--grid">
{%- for post in recent_papers limit: 2 %}
{% include pub-card.html post=post %}
{%- endfor %}
</div>

<div class="section-more">
  <a href="{{ base_path }}/publications/" class="inline-link">View all publications {% include icon.html name="arrow-right" %}</a>
</div>

<h2 class="home-section-title" id="media">In the media</h2>

{% comment %}
  The most recent item of _data/press.yml; all of them are on /media/.
{% endcomment %}
{%- assign latest_press = site.data.press | sort: "date" | reverse | first %}
{% include press-card.html item=latest_press %}

<div class="section-more">
  <a href="{{ base_path }}/media/" class="inline-link">All coverage {% include icon.html name="arrow-right" %}</a>
</div>

<h2 class="home-section-title" id="background">Academic background</h2>

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
