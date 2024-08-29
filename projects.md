---
layout: default
title: "Proyectos"
permalink: /projects/
---

<section class="projects">
  <div class="container">
    <h1>Proyectos</h1>
    <ul>
      {% for project in site.projects %}
        <li>
          <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
          <p>{{ project.description }}</p>
          <span class="date">{{ project.date | date: "%B %d, %Y" }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
