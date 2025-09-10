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
  # actions:
  #   - label: "<i class='fas fa-download'></i> Install now"
  #     url: "/docs/quick-start-guide/"
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
    btn_label: "Learn more →"
  - image_path: /assets/images/chronos-worktable.png
    alt: "fully responsive"
    title: "From Access-VBA to Python: 25 Years of Building CHRONOS Workforce Control System for the Oil Industry"
    excerpt: "A journey that started in 2000 as a simple database with SQL queries to track work hours in Venezuela’s oil industry. It grew into a professional application used by 8,000+ workers across 80+ companies, and in 2025, it’s being reborn with modern tools like Python, Flet, and SQLite.."
    url: "/adp-chronos/"
    btn_class: "btn--primary"
    btn_label: "👉 Read the full story →"
  - image_path: /assets/images/watchtower-logos.png
    alt: "GoWatchTower"
    title: "GoWatchtower: Kubernetes-native Observability in Go"
    excerpt: "A lightweight Golang library that turns any Operator into a real-time observability tool. Collects cluster metrics from native /metrics endpoints, streams them via Kafka, and powers full dashboards with Prometheus & Grafana — portable, fast, and designed for modern cloud-native environments."
    url: "/go-watchtower/"
    btn_class: "btn--primary"
    btn_label: "🚀 Explore the project →"      
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
