---
section: "Explore"
title: "Ticha Digital Editions"
description: >-
  Ticha Digital Editions are specially curated documents with additional critical ___ and linguistic ___. Read more in our ___ guide.
layout: "page"
permalink: "/explore/editions.html"
---

<div class="flex flex-wrap gap-12 justify-start">
  {%- for edition in editions -%}
  <div class="xl:w-1/6 lg:w-1/5 md:w-1/3 w-full transition duration-250 ease-in-out hover:scale-105">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
    </a>
    <div class="mt-4">
      <h3 class="text-red-700 text-xs tracking-widest title-font mb-1 uppercase">Digital Edition</h3>
      <h2 class="text-gray-900 title-font text-lg font-bold leading-tight">{{ edition.title }}</h2>
      <p class="mt-1 text-xs">{{ edition.subtitle }}</p>
    </div>
  </div>
  {%- endfor -%}
</div>

