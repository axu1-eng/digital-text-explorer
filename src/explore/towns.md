---
section: Explore
title: "Find and Access Documents by Town"
layout: "page"
permalink: "/explore/towns.html"
---


<div class="my-6">
  <h2 class="md:text-2xl text-xl font-medium title-font text-text-dark mb-6">Towns</h2>
  <ul class="list-disc text-accent-light">
    {% for town in towns %}
    <li><a class="hover:text-accent-dark" href="#">{{ town }}</a></li>
    {% endfor %}
  </ul>
</div>
