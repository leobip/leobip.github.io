---
layout: splash
permalink: /
hidden: true
title: "Build · Automate · Deliver"
header:
  overlay_color: "#1a1d23"
  overlay_image: /assets/images/llp-banner.png
  overlay_filter: 0.45
excerpt: >
  Designing and automating cloud-native infrastructure — Kubernetes, Golang, Python, and CI/CD pipelines.<br />
  <small>Cloud & DevOps Engineer · Madrid, Spain</small>
feature_row:
  - image_path: /assets/images/engineering-career.jpg
    alt: "Career Journey"
    title: "Career Journey"
    excerpt: "Learn more about my experience, academic background, certifications, and projects that have shaped my career in technology."
    url: "/about/"
    btn_class: "btn--primary"
    btn_label: "Learn more →"
  - image_path: /assets/images/chronos-worktable.png
    alt: "Chronos"
    title: "CHRONOS — 25 Years of Workforce Control"
    excerpt: "From Access-VBA to Python: a system that started tracking work hours in Venezuela's oil industry, growing to serve 8,000+ workers across 80+ companies."
    url: "/adp-chronos/"
    btn_class: "btn--primary"
    btn_label: "Read the full story →"
  - image_path: /assets/images/watchtower-logos.png
    alt: "GoWatchTower"
    title: "GoWatchtower — Kubernetes-native Observability"
    excerpt: "A lightweight Go library that turns any Operator into a real-time observability tool — metrics collection, Kafka streaming, and Prometheus + Grafana dashboards."
    url: "/go-watchtower/"
    btn_class: "btn--primary"
    btn_label: "Explore the project →"
---

{% include ephemeris-card.html %}

{% include feature_row %}

## Latest Posts

<div class="latest-posts">
  {% for post in site.posts limit:3 %}
    <div class="post-card">
      <div class="post-card__date">{{ post.date | date: "%b %-d, %Y" }}</div>
      <div class="post-card__title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </div>
      <div class="post-card__excerpt">
        {{ post.excerpt | strip_html | truncate: 120 }}
      </div>
    </div>
  {% endfor %}
</div>
