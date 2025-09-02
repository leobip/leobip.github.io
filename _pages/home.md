---
layout: splash
permalink: /
hidden: true
title: Develop. Share. Learn.
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/llp-banner.png
  overlay_filter: 0.3
  height: 300px
  min_height: 300px
  actions:
    - label: "<i class='fas fa-download'></i> Install now"
      url: "/docs/quick-start-guide/"
excerpt: >
  Your digital gateway to my personal and professional career in the world of technology.<br />
  <small><a href="https://github.com/leobip">Personal - GitHub</a></small>
feature_row:
  - image_path: /assets/images/engineering-career.jpg
    alt: "Career Journey"
    title: "Career Journey"
    excerpt: "Learn more about my experience, academic background, certifications, and projects that have shaped my career in technology."
    url: "/about/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
  - image_path: /assets/images/mm-responsive-feature.png
    alt: "fully responsive"
    title: "Responsive layouts"
    excerpt: "Built with HTML5 + CSS3. All layouts are fully responsive with helpers to augment your content."
    url: "/docs/layouts/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
  - image_path: /assets/images/mm-free-feature.png
    alt: "100% free"
    title: "100% free"
    excerpt: "Free to use however you want under the MIT License. Clone it, fork it, customize it... whatever!"
    url: "/docs/license/"
    btn_class: "btn--primary"
    btn_label: "Learn more"      
---

{% include feature_row %}

## 🆕 Latest Posts

<ul>
  {% for post in site.posts limit:3 %}
    <li style="margin-bottom: 1rem;">
      <span style="color: #666; font-size: 0.9em;">
        {{ post.date | date: "%b %-d, %Y" }}
      </span><br>
      <a href="{{ post.url | relative_url }}" style="font-weight: bold; font-size: 1.1em;">
        {{ post.title }}
      </a><br>
      <span style="color: #444;">
        {{ post.excerpt | strip_html | truncate: 120 }}
      </span>
    </li>
  {% endfor %}
</ul>
