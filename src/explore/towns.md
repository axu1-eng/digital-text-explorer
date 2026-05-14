---
section: Explore
title: "Find and Access Documents by Town"
layout: "page"
permalink: "/explore/towns.html"
---


<div class="my-6">
  <h2 class="md:text-2xl text-xl font-medium title-font text-gray-900 mb-6">Towns</h2>
  <ul class="list-disc text-red-700">
    {% for town in towns %}
    <li><a class="hover:text-red-800" href="#">{{ town }}</a></li>
    {% endfor %}
  </ul>
</div>
