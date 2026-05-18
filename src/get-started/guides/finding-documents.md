---
section: Getting Started
title: "Guide: Finding Documents in the Ticha Digital Text Explorer"
description: >-
  The Ticha Digital Text Explorer allows users to access and explore many interlinked layers of texts from a corpus of Colonial Valley Zapotec manuscripts and printed books, including images of the original documents, transcriptions, translations, and linguistic analysis, including morphological interlinearization.
layout: "page"
permalink: "/get-started/guides/finding-documents.html"
browse_blocks:
  - label: 'Browse by Place'
    link: ''
    description: ''
    icon: ''
  - label: 'Browse by Year'
    link: ''
    description: ''
    icon: ''
  - label: 'Browse by People'
    link: ''
    description: ''
    icon: ''
  - label: 'Browse by Archive'
    link: ''
    description: ''
    icon: ''
  - label: 'Browse by Type'
    link: ''
    description: ''
    icon: ''
---
<div class="my-6">
  <h2 class="md:text-2xl text-xl font-medium title-font text-text-dark">Exploring By Category</h2>
</div>
<div class="container mx-auto flex flex-wrap mb-12">
  <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <img alt="feature" class="object-cover object-center w-full" src="https://dummyimage.com/460x500">
    <p class="text-xs text-accent-light tracking-widest font-medium title-font my-2 uppercase">Above: Translation of Bill of Sale from San Jerónimo Tlacochahuaya, 1675</p>
  </div>
  <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
    {% for block in browse_blocks %}
    <div class="flex flex-col mb-10 lg:items-start items-center">
      <div class="flex-grow">
        <div class="flex items-baseline">
          <div class="w-6 h-6 inline-flex items-center justify-center rounded-full bg-red-100 text-accent-light mr-2 float-left">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-3 h-3" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <h2 class="text-text-dark text-lg title-font font-medium mb-3">{{ block.label }}</h2>
        </div>
        <p class="leading-relaxed text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar accumsan ex ultrices congue.</p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
