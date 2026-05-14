---
section: Explore
title: "Find and Access Documents by Archive"
layout: "page"
permalink: "/explore/archive.html"
---


<h2 class="md:text-2xl text-xl font-medium title-font text-gray-900 mb-6">Archives</h2>
<ul class="list-disc text-red-700">
  {% for archive in archives %}
  <li><a class="hover:text-red-800" href="#">{{ archive }}</a></li>
  {% endfor %}
</ul>
