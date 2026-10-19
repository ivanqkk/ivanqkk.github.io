---
layout: archive
title: "In the media"
permalink: /media/
author_profile: true
description: "Interviews and articles that feature the work of Ivan Cucchi."
---

{% include base_path %}

{% comment %}
  Items live in _data/press.yml (fields documented there), newest first.
  Card markup: _includes/press-card.html.
{% endcomment %}
<p class="lede">Interviews and articles that feature my work, most recent first.</p>

{% assign press = site.data.press | sort: "date" | reverse %}
<div class="press-list">
{%- for item in press %}
{% include press-card.html item=item %}
{%- endfor %}
</div>
