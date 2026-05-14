---
title: "Find and Access Ticha Documents"
layout: "base"
permalink: "/explore/documents.html"
facets:
  - key: Language
    values:
      - Zapotec
      - Spanish
      - Spanish with some Zapotec
  - key: Document Type
    values:
      - Bill of Sale
      - Testament
      - Land Deed
      - Receipt
      - Petition
      - Complaint
  - key: Year
    wip: true
    values:
      - 16**
      - 170*
      - 171*
      - 172*
      - 173*
      - 174*
      - 175*
      - 176* 
      - 178*
      - 179*  
      - 18**
  - key: Archive
    values:
      - "Archivo General de la Nación, Mexico"
      - "Archivo General del Poder Ejecutivo del Estado de Oaxaca, Mexico"
      - "Archivo Histórico de Notarias del Estado de Oaxaca, Mexico"
      - "Archivo Histórico de Tlacolula de Matamoros Oaxaca, Mexico"
  - key: Collection
    values:
      - Rodriguez, Joseph
      - Real Intendencia
      - Alcaldias Mayores
      - Joachin de Amador
      - Tierras
---

<section class="text-gray-600 body-font">
  <div class="xl:container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h3 class="text-xs text-red-700 tracking-widest font-medium title-font mb-1 uppercase">Explore</h3>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{{ title }}</h1>
        <div class="h-1 w-20 bg-red-700 rounded mt-4"></div>
      </div>
      <div class="lg:w-1/2 w-full"></div>
    </div>
    <div class="flex flex-wrap w-full">
      <div class="lg:basis-1/4 md:basis-1/3 basis-full pr-12">
        <ul>
          {%- for facet in facets -%}
          <li class="pb-6 pr-6 border border-gray-300 rounded-md mb-6">
            <div class="text-xl tracking-tight my-3 px-2 {% if facet.wip %}text-red-700{% endif %}">
              {{ facet.key }} {% if facet.wip %}<span class="text-sm">[WiP!]</span>{% endif %}
            </div>
            <ul class="space-y-2">
              {%- for value in facet.values -%}
              <li class="py-1 pl-2">
                <label class="flex items-center cursor-pointer hover:bg-gray-50 rounded px-2 py-1 transition-colors">
                  <input 
                    type="checkbox" 
                    data-facet="{{ facet.key }}"
                    data-value="{{ value }}"
                    class="w-4 h-4 rounded border-gray-300 text-red-700 focus:ring-red-700 focus:ring-2 cursor-pointer"
                  />
                  <span class="ml-2 text-gray-700 hover:text-red-700">{{ value }}</span>
                </label>
              </li>
              {%- endfor -%}
            </ul>
          </li>
          {%- endfor -%}
        </ul>
      </div>
      <div class="lg:basis-3/4 md:basis-2/3 basis-full">
        {% include "partials/searchbar.html" %}
        <div id="results-info" class="my-6"></div>
         <div id="active-facets" class="mb-4 flex flex-wrap gap-2"></div>
        <div id="results" class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 flex-wrap justify-between w-full"></div>
    </div>
  </div>
</section>

<script src="{{ '/js/search.js' }}"></script>
