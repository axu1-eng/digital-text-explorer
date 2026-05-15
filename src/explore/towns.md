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
          <div class="my-2">
            📍 <a id="{{ town.id }}-link" class="text-accent-light hover:text-accent-dark hover:underline font-bold pb-1" href="#" data-gps="{{ town.gps_coordinates | escape }}">{{ town.town_modern_official }}</a>
            <!-- <a class="text-accent-light hover:text-accent-dark" href="/explore/documents?query={{ town.town_short | uri_encode }}">See Documents</a> -->
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

<script>
  window.addEventListener('DOMContentLoaded', () => {
    const townLinks = document.querySelectorAll('a[data-gps]');
    townLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const coords = JSON.parse(link.dataset.gps);
        if (window.map && Array.isArray(coords) && coords.length === 2) {
          const [lng, lat] = coords;
          window.map.setView([lat, lng], 13);

          const townId = link.id ? link.id.replace(/-link$/, '') : null;
          const marker = townId && window.townMarkers ? window.townMarkers[townId] : null;
          if (marker) {
            marker.openPopup();
          }
        }
      });
    });
  });
</script>
