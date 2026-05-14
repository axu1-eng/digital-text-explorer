---
section: Explore
title: "Find and Access Documents by Archive"
layout: "page"
permalink: "/explore/archive.html"
---


<h2 class="md:text-2xl text-xl font-medium title-font text-text-dark mb-6">Archives</h2>
<ul class="list-disc text-accent-light">
  {% for archive in archives %}
  <li><a class="hover:text-accent-dark" href="#">{{ archive }}</a></li>
  {% endfor %}
</ul>
