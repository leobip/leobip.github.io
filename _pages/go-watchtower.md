---
layout: single
classes: wide
title: "GoWatchTower"
categories:
  - Layout
  - Uncategorized
tags:
  - edge case
  - featured image
  - image
  - layout

---


{% capture fig_img %}
![Foo]({{ '/assets/images/chronos-header.webp' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Photo from Internet.</figcaption>
</figure>

## ***📝 GoWatchtower: Kubernetes-native Observability in Go***

## 1. Introduction 🌍

When you run workloads on Kubernetes, you learn one truth very quickly: **things break, and they break fast**. Pods crash, nodes get stressed, and operators — those little pieces of code meant to keep order — sometimes behave like stubborn coworkers who refuse to share updates.  

That’s where **observability** becomes critical. You can’t fix what you can’t see — and in the cloud-native world, visibility often means the difference between smooth sailing and chasing down a ghost bug at 3 AM.  

But here’s the pain point:

- Many Kubernetes Operators ship without meaningful observability.  
- Adding it often requires bolting on heavy monitoring stacks or hacking together exporters.  
- Worse, sometimes you’re forced to bend your operator’s design just to “fit” with a monitoring tool.  

It’s also fair to say that my current role as a **DevOps Automation Engineer at T-Systems** has been a huge source of inspiration.  
Day to day, we face the necessity of properly monitoring cluster services, and even built a custom operator to track the values we needed.  
At first, I treated this as a playground — a way to learn Golang, experiment with operators, and sharpen my skills.  
But over time, a bigger question emerged: *what if I could go further and create a universal, plug-and-play monitoring tool?*  
That simple “what if…” is what eventually evolved into **GoWatchtower**.  

While this is not a corporate project, it definitely carries the DNA of **real-world lessons learned on the job**.  
Special thanks to **Dr. Patrick Derck**, who has been both a guide and the occasional editor along the way. 🙌  

This project started with a simple (and maybe naïve) goal:  
👉 *Could we add real-time observability to any Operator, with minimal intrusion into the code?*  

From there, things snowballed — experiment by experiment, repo by repo — until GoWatchtower took shape.  

Think of it less like reinventing the wheel, and more like adding a dashboard to a car that was built without one. The engine was already running; you just had no idea how fast, how hot, or how close to breaking down it was.  

In the next sections, I’ll walk you through how it all came together: first a local monitoring stack, then a minimal operator, and finally abstracting metrics into a reusable library.  

⚠️ Disclaimer: this is still very much a **work in progress**. Expect rough edges, the occasional gazapo, and plenty of room for improvement. Feedback, corrections, and nitpicks are not just welcome — they’re part of the journey. 🚧  

---

## 2. The Starting Point: A Local Monitoring Stack 🛠️

Before dreaming about fancy libraries or operator magic, I had to get the basics right.  
In Kubernetes, “basics” often means one thing: **metrics**. You can’t observe what you can’t measure.  

So the very first step was setting up a local monitoring stack — nothing exotic, just the usual suspects:

- **Prometheus** (because metrics are life)  
- **Grafana** (because staring at raw numbers is not fun)  
- **Kafka** (because sometimes you want metrics to *travel places*)  

Why this setup?  
Because I needed a **playground** — a reproducible local environment where I could experiment with streaming pipelines, dashboards, and debugging flows without breaking anything in production.  

A few extras made the difference:

- **Helm charts** for easy reproducibility (spin it up, tear it down, no mess).  
- **Persistent volumes**, so I wouldn’t lose my work every time I restarted Minikube.  
- **Kafka UI**, which saved me from pulling my hair out when debugging what was actually flowing through the topics.  

This stack became the **foundation layer** for everything that followed. Without it, the rest of the journey (operators, libraries, GoWatchtower itself) wouldn’t have had solid ground to stand on.  

👉 You can find the repo here: [📡 Monitoring](https://github.com/leobip/monitoring)  
👉 And the detailed post here: [Local Monitoring Stack for Kubernetes (Prometheus + Grafana + Kafka)](/local-monitoring-env)  

{% capture fig_img %}
![Foo]({{ '/assets/images/adp-orig-structure.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>DB Structure of the first commercial atemp.</figcaption>
</figure>

With the code in Visual Basic for Applications and the queries in sql all inside MS Access
adp-orig-code

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-orig-code.png' | relative_url }}" 
       style="max-width:60%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    VBA Code Snippet.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-orig-sql-code.png' | relative_url }}" 
       style="max-width:60%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Sql Code Snippet.
  </figcaption>
</figure>

---

✍️ *Thanks for reading! This is more than a system — it’s the story of how real needs, resilience, and client trust shaped 25 years of development.*  
