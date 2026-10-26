---
layout: landing
permalink: /
title: "Ivan Cucchi – AI for Life Sciences"
scripts: [hero-network, landing]
---

{% include base_path %}
{%- assign author = site.author -%}

{% comment %}
  The home page: a business card over the molecular network
  (assets/js/hero-network.js), always on a dark scene. The old home content
  is on /about/ (_pages/about-me.md). Complete without JavaScript: the
  network, the credit line and the JS-only extras (typing tagline, clock,
  copy button, countdown) simply don't appear. Behaviour:
  assets/js/landing.js. Styles: _sass/layout/_landing.scss.
{% endcomment %}
<main class="landing">
  <canvas class="hero-canvas" aria-hidden="true"></canvas>

  <div class="landing-card">
    <img class="landing-avatar" src="{{ author.avatar | prepend: '/images/' | prepend: base_path }}" alt="" width="112" height="112" fetchpriority="high">
    <p class="landing-aff">Sweden AI Factory · Stockholm University</p>
    <h1>Ivan Cucchi</h1>
    <p class="landing-tag"><span class="sr-only">AI for life sciences: proteins, drug discovery, medical data and supercomputers</span><span aria-hidden="true"><span class="rot-text">AI for life sciences</span><span class="rot-caret"></span></span></p>
    <p class="landing-local"><span class="live-dot" aria-hidden="true"></span><span>SciLifeLab, Stockholm<span data-clock hidden>: <time></time>, <span data-tz-diff></span></span></span></p>
    <p class="landing-mail"><span data-email>ivanqkk92 [at] naiss.se</span><button class="mail-copy" type="button" data-copy-email aria-label="Copy email address" title="Copy email address" hidden>{% include icon.html name="copy" %}</button></p>

    <nav class="landing-go" aria-label="Explore">
      <a class="ui-btn ui-btn--primary" href="{{ base_path }}/about/">About me</a>
      <a class="ui-btn ui-btn--secondary" href="{{ base_path }}/files/Curriculum_Vitae.pdf">CV</a>
      <a class="ui-btn ui-btn--secondary" href="{{ base_path }}/publications/">Publications</a>
      <a class="ui-btn ui-btn--secondary" href="{{ base_path }}/talks/">Talks</a>
    </nav>

    <ul class="landing-links" aria-label="Profiles">
      {%- if author.linkedin %}
      <li><a href="https://www.linkedin.com/in/{{ author.linkedin }}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">{% include icon.html name="linkedin" %}</a></li>
      {%- endif %}
      {%- if author.github %}
      <li><a href="https://github.com/{{ author.github }}" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">{% include icon.html name="github" %}</a></li>
      {%- endif %}
      {%- if author.googlescholar %}
      <li><a href="{{ author.googlescholar }}" target="_blank" rel="noopener" aria-label="Google Scholar" title="Google Scholar">{% include icon.html name="scholar" %}</a></li>
      {%- endif %}
      {%- if author.orcid %}
      <li><a href="{{ author.orcid }}" target="_blank" rel="noopener" aria-label="ORCID" title="ORCID">{% include icon.html name="orcid" %}</a></li>
      {%- endif %}
      {%- if author.researchgate %}
      <li><a href="{{ author.researchgate }}" target="_blank" rel="noopener" aria-label="ResearchGate" title="ResearchGate">{% include icon.html name="researchgate" %}</a></li>
      {%- endif %}
    </ul>

    {%- comment -%}
      "Next": one link per event of _data/events.yml, in start order; the
      first one that had not ended at build time is shown. The line is
      dropped when there is none. landing.js redoes the choice with the
      visitor's clock and adds "in N days" or "Happening now".
    {%- endcomment -%}
    {%- assign now_s = site.time | date: "%s" | plus: 0 -%}
    {%- assign next_events = site.data.events | sort: "start" -%}
    {%- assign next_shown = false %}
    <div class="landing-next-wrap">
    {%- for e in next_events -%}
      {%- assign end_s = e.end | date: "%s" | plus: 0 -%}
      {%- assign show = false -%}
      {%- if end_s > now_s and next_shown == false %}{% assign show = true %}{% assign next_shown = true %}{% endif %}
      <a class="landing-next" href="{{ base_path }}/talks/" data-next data-start="{{ e.start | date_to_xmlschema }}" data-end="{{ e.end | date_to_xmlschema }}"{% unless show %} hidden{% endunless %}>
        <span class="ln-label" data-next-label>Next</span>
        <span class="ln-title">{{ e.title }}</span>
        {%- assign d1 = e.start | date: "%Y-%m-%d" -%}{%- assign d2 = e.end | date: "%Y-%m-%d" -%}
        {%- assign mo1 = e.start | date: "%Y-%m" -%}{%- assign mo2 = e.end | date: "%Y-%m" %}
        <span class="ln-date"><time datetime="{{ e.start | date_to_xmlschema }}">{% if d1 == d2 %}{{ e.start | date: "%a %-d %b" }}{% elsif mo1 == mo2 %}{{ e.start | date: "%-d" }}–{{ e.end | date: "%-d %b" }}{% else %}{{ e.start | date: "%-d %b" }} – {{ e.end | date: "%-d %b" }}{% endif %}</time>, {{ e.format }}</span>
      </a>
    {%- endfor %}
    </div>
  </div>

  <p class="landing-credit">Background: a molecular network, simulated live in your browser. Tap it to give it a kick.</p>

  <div class="toast" id="toast" role="status" aria-live="polite">{% include icon.html name="check" %}<span></span></div>
</main>
