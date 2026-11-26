---
layout: archive
title: "Sitemap"
description: "All the pages on the website of Ivan Cucchi."
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

All the pages on this site. Search engines can use the [XML sitemap]({{ base_path }}/sitemap.xml).

{%- comment -%} site.pages also holds CSS, JSON and text files: list only
  titled pages that are not kept out of the sitemap (the 404). {%- endcomment %}
<h2>Pages</h2>
{% for post in site.pages %}
  {% if post.title and post.sitemap != false %}
  {% include archive-single.html %}
  {% endif %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label | capitalize }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}
