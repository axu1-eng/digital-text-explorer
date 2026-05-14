---
title: "Find and Access Ticha Documents"
layout: "base"
permalink: "/explore/documents.html"
facets:
  - key: Language
    values:
      - Zapotec
      - Spanish
  - key: Document Type
    values:
      - Bill of Sale
      - Testament
      - Land Deed
      - Receipt
      - Petition
      - Complaint
      # - Land Description
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
      - "Archivo General de la Nación"
      - "Archivo General del Poder Ejecutivo del Estado de Oaxaca"
      - "Archivo Histórico de Notarias del Estado de Oaxaca"
      - "Archivo Histórico de Tlacolula de Matamoros Oaxaca"
  - key: Collection
    values:
      - Rodriguez, Joseph
      - Real Intendencia
      - Alcaldias Mayores
      - Joachin de Amador
      - Tierras
  - key: People
    wip: true
    values:
      - Marcos de los Angeles Lopez
      - Geronimo Mendes
      - Sebastiana de Mendosa
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
          <li class="pb-6 pr-6">
            <div class="text-xl tracking-tight my-1 text-red-700">Limit [WiP!]</div>
            <ul>
              <li class="py-1 pl-2">
                <input type="checkbox" />
                <a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="#">Is Primary Document</a>
              </li>
              <li class="py-1 pl-2">
                <input type="checkbox" />
                <a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="#">Is Translation Document</a>
              </li>
              <li class="py-1 pl-2">
                <input type="checkbox" />
                <a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="#">Has Translation Document</a>
              </li>
              <li class="py-1 pl-2">
                <input type="checkbox" />
                <a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="#">Has Linguistic Analysis</a>
              </li>
              <li class="py-1 pl-2">
                <input type="checkbox" />
                <a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="#">Has Full Text Transcription</a>
              </li>
              <li class="py-1 pl-2">
                <input type="checkbox" />
                <a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="#">Has Modern Spanish Translation</a>
              </li>
            </ul>
          </li>
          {%- for facet in facets -%}
          <li class="pb-6 pr-6 border rounded-md mb-6">
            <div class="text-xl tracking-tight my-1 {% if facet.wip %}text-red-700{% endif %}">{{ facet.key }} {% if facet.wip %}[WiP!]{% endif %}</div>
            <ul>
              {%- for value in facet.values -%}
              <li class="py-1 pl-2"><a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="{{ '/explore/documents.html' }}?limit={{ facet.key | uri_encode }}&query={{ value | uri_encode }}">{{ value }}</a></li>
              {%- endfor -%}
            </ul>
          </li>
          {%- endfor -%}
        </ul>
      </div>
      <div class="lg:basis-3/4 md:basis-2/3 basis-full">
        {% include "partials/searchbar.html" %}
        <div id="results-info" class="my-6"></div>
        <div id="results" class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 flex-wrap justify-between w-full"></div>
    </div>
  </div>
</section>

<script src="{{ '/js/search.js' }}"></script>
