---
section: "Explore"
title: "Digital Editions"
description: >-
  Lorem ipsum dolor si amet
layout: "page"
permalink: "/explore/editions.html"
---
{% assign digital_editions = api.documents | where: 'digital_edition' | reverse %}

<div class="flex flex-wrap gap-12 justify-start">
  {%- for edition in digital_editions -%}
    <div class="group xl:w-1/5 lg:w-1/4 md:w-1/3 w-full transition duration-250 ease-in-out hover:scale-105">
      {%- if edition.id -%}
        <a class="block relative h-48 rounded overflow-hidden" href="/document/{{ edition.slug }}.html">
      {%- else -%}
        <a class="block relative h-48 rounded overflow-hidden">
      {%- endif -%}
      <div data-i18n="Zapotec" class="absolute top-0 right-0 bg-red-950 text-[#f7efdc] text-lg font-bold px-2 py-1 rounded-bl-lg z-10">Zapotec</div>
        <div class="absolute bottom-0 left-0 h-14 w-14 shadow bg-accent-alt-light bg-[url(../static/flower.png)] bg-cover bg-center px-2 py-1 rounded-tr-lg z-10">
        </div>
        <img alt="" class="rounded-tl-[3rem] rounded-br-[3rem] object-cover object-center w-full h-full block" src="/static/thumbnails/{{ edition.slug }}.jpg">
        <div class="absolute top-0 left-0 w-full h-full block transition-opacity saturate-50 opacity-80 duration-350 ease-in-out group-hover:opacity-0 rounded-tl-[3rem] rounded-br-[3rem]" style="background-color: #{{edition.color}};"></div>
      </a>
      <div class="mt-4">
        <h2 class="text-text-dark title-font text-lg font-bold leading-tight"><span data-i18n="digital_edition_text" class="group-hover:text-accent-dark underline">Digital Edition</span> · {{ edition.title }}</h2>
        <p class="mt-1 text-xs">{{ edition.subtitle }}</p>
      </div>
    </div>
  {%- endfor -%}
</div>

