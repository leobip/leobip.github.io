---
layout: single
classes: wide
title: "Projects"
permalink: /projects/
author_profile: true
---

A selection of projects I've built — from enterprise workforce systems to cloud-native observability tools.

---

<div class="project-cards">

  <div class="project-card">
    <img src="{{ '/assets/images/chronos-worktable.png' | relative_url }}" alt="Chronos">
    <div class="project-card__body">
      <h3>🕰️ CHRONOS — Workforce Control System</h3>
      <p>A journey that started in 2000 as a simple database to track work hours in Venezuela's oil industry. It grew into a professional application used by <strong>8,000+ workers</strong> across <strong>80+ companies</strong>, and in 2025, it's being reborn with Python, Flet, and SQLite.</p>
      <p class="project-card__tech"><strong>Tech:</strong> Python · Flet · SQLite · VBA · Access · SQL Server</p>
      <a href="{{ '/adp-chronos/' | relative_url }}" class="btn btn--primary">Read the full story →</a>
    </div>
  </div>

  <div class="project-card">
    <img src="{{ '/assets/images/watchtower-logos.png' | relative_url }}" alt="GoWatchtower">
    <div class="project-card__body">
      <h3>🚀 GoWatchtower — Kubernetes-native Observability</h3>
      <p>A lightweight Golang library that turns any Operator into a real-time observability tool. Collects cluster metrics from native <code>/metrics</code> endpoints, streams them via Kafka, and powers dashboards with Prometheus & Grafana.</p>
      <p class="project-card__tech"><strong>Tech:</strong> Go · Kubernetes · Kafka · Prometheus · Grafana · Helm</p>
      <a href="{{ '/go-watchtower/' | relative_url }}" class="btn btn--primary">Explore the project →</a>
    </div>
  </div>

</div>
