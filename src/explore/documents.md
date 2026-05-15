---
section: Explore
title: "All Documents"
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

{% include "components/search-header.html" %}
<main class="flex-1">
  <section class="text-text-light body-font">
    <div class="xl:container px-5 py-12 mx-auto">
      <div class="flex md:flex-nowrap gap-12 flex-wrap w-full">
        <div class="basis-full md:basis-1/3 xl:basis-1/4">
          <ul>
            {%- for facet in facets -%}
            <li class="p-4 bg-[#f8f4ea] shadow rounded-md tracking-tight mb-6">
              <div class="text-xl font-bold my-3 px-2 {% if facet.wip %}text-accent-light{% endif %}">
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
                      class="w-4 h-4 rounded accent-accent-alt-dark border-text-light text-accent-light focus:ring-text-light focus:ring cursor-pointer"
                    />
                    <span class="ml-2 text-text-dark hover:text-accent-light">{{ value }}</span>
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
                      class="border rounded-md px-2 focus-visible:ring focus-visible:ring-text-light max-w-24"/>
                    <span class="text-center">—</span>
                    <input 
                      type="number" 
                      data-facet="{{ facet.key }}-max" 
                      data-value="{{ facet.values.last }}" 
                      value="{{ facet.values.last }}" 
                      class="border rounded-md px-2 focus:ring focus:ring-text-light max-w-24"/>
                  </div>
              {% endif %}
            </li>
            {%- endfor -%}
          </ul>
        </div>
        <div class="basis-full md:basis-2/3 xl:basis-3/4">
          <div id="results-info" class="mb-6 font-bold"></div>
          <div id="active-facets" class="flex flex-wrap gap-2 mb-12"></div>
          <div id="results" class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 flex-wrap justify-between w-full"></div>
      </div>
    </div>
  </section>
</main>
<script src="{{ '/js/search.js' }}"></script>
