---
layout: default
title: "Noticias"
permalink: /posts/
---

<section class="posts-list">
  <div class="container">
    <h1>Noticias</h1>
    <ul>
      {% for post in site.posts %}
        <li>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <p class="date">{{ post.date | date: "%B %d, %Y" }}</p>
          <p>{{ post.excerpt }}</p>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
