---
section: Explore
title: "Documents by Town"
layout: "page"
permalink: "/explore/towns.html"
---

<main class="flex-1 my-6">
  <div class="xl:container mx-auto">
    <div class="flex md:flex-nowrap gap-12 xl:gap-18 flex-wrap-reverse w-full">
      <div class="basis-full md:basis-1/3">
        {% for town in towns %}
          <div class="my-6">
            <a class="text-accent-light hover:text-accent-dark font-bold pb-1" href="#">📍 {{ town }}</a>
            <p class="ml-5">Also known as _____. Lorem ipsum dolor si amet.<br>
            <a class="text-accent-light hover:text-accent-dark" href="/explore/documents?query={{ town | uri_encode }}">See Documents</a>
            </p>
          </div>
        {% endfor %}
      </div>
      <div class="basis-full md:basis-2/3">
        {% include "partials/map.html" %}
      </div>
    </div>
  </div>
</main>
