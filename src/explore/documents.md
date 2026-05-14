---
title: "Find and Access Ticha Documents"
layout: "base"
permalink: "/explore/documents.html"
facets:
  - key: Language
    type: multiselect
    values:
      - Zapotec
      - Spanish
      - Spanish with some Zapotec
  - key: Document Type
    type: multiselect
    values:
      - Bill of Sale
      - Testament
      - Land Deed
      - Receipt
      - Petition
      - Complaint
  - key: Year
    type: numrange
    wip: true
    values:
      - 1633
      - 1832
  - key: Archive
    type: multiselect
    values:
      - "Archivo General de la Nación, Mexico"
      - "Archivo General del Poder Ejecutivo del Estado de Oaxaca, Mexico"
      - "Archivo Histórico de Notarias del Estado de Oaxaca, Mexico"
      - "Archivo Histórico de Tlacolula de Matamoros Oaxaca, Mexico"
  - key: Collection
    type: multiselect
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
          <li class="p-4 bg-[#f8f4ea] shadow rounded-md tracking-tight mb-6">
            <div class="text-xl font-bold my-3 px-2 {% if facet.wip %}text-red-700{% endif %}">
              {{ facet.key }} {% if facet.wip %}<span class="text-sm">[WiP!]</span>{% endif %}
            </div>
            {% if facet.type == 'multiselect'%}
            <ul>
              {%- for value in facet.values -%}
              <li>
                <label class="flex items-center cursor-pointer rounded px-2 py-1 transition-colors">
                  <input 
                    type="checkbox" 
                    data-facet="{{ facet.key }}"
                    data-value="{{ value }}"
                    class="w-4 h-4 rounded border-gray-300 text-red-700 focus:ring-gray-700 focus:ring cursor-pointer"
                  />
                  <span class="ml-2 text-gray-700 hover:text-red-700">{{ value }}</span>
                </label>
              </li>
              {%- endfor -%}
            </ul>
            {% elsif facet.type == "numrange" %}
                <div class="pl-2 flex flex-row w-full gap-2 items-center justify-start">
                  <input
                    type="number" 
                    data-facet="{{ facet.key }}-min" 
                    value="{{ facet.values.first }}" 
                    data-value="{{ facet.values.first }}" 
                    class="border rounded-md px-2 focus-visible:ring focus-visible:ring-gray-700 max-w-24"/>
                  <span class="text-center">—</span>
                  <input 
                    type="number" 
                    data-facet="{{ facet.key }}-max" 
                    data-value="{{ facet.values.last }}" 
                    value="{{ facet.values.last }}" 
                    class="border rounded-md px-2 focus:ring focus:ring-gray-700 max-w-24"/>
                </div>
            {% endif %}
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
