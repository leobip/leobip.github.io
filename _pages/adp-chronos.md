---
layout: single
classes: wide
title: "CHRONOS Workforce App"
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

# From Access to Python: 25 Years of Building a Workforce Control System for the Oil Industry  

## 1. Introduction  

Back in the year 2000, I faced a very practical challenge while working on petroleum projects in Venezuela: keeping track of work hours in a reliable and structured way.  
The oil industry required strict control over **regular hours, overtime, shifts, payroll types, and classifications**, and the tools available at the time were either too generic or inefficient for the complexity of the operations.  

What began as a **personal project** — simply a Microsoft Access database with SQL queries to ease my own workload — soon evolved into something much bigger.  
Over time, this small side project grew into a professional-grade application, capable of handling multiple projects, contracts, and thousands of workers simultaneously.  

This article tells the story of how that tool was born, how it scaled to support more than **80 companies and 8,000 workers** in Venezuela’s oil industry, and how, after years of success and even after migration to Spain, it is being **reborn in 2025 with modern technologies**.  

---

## 2. Early Development (2000–2002)  

The very first version of the system was modest in scope.  
It started as a **Microsoft Access database**, where I wrote SQL queries to generate simple reports:

- Regular hours  
- Overtime  
- Totals per project  

The interface was non-existent — everything ran from **command-line queries**.  

But as reporting needs grew, I began adding **new parameters, conditions, and eventually, forms**.  
This was my first attempt at creating something resembling an application: an interface on top of the database that allowed me to input data, run queries, and view results without manually typing commands every time.  

By 2002, the project had matured to a point where it was no longer just for personal use.  
I saw an opportunity to **turn it into a commercial product**.  
What started as a tool for my own productivity had the potential to solve a much larger problem in the oil industry: accurately controlling and reporting labor hours across large-scale projects.  

This was the beginning of its transformation — from a simple database with ad hoc queries into a **professional application tailored for one of the most demanding industries**.  

---

### 📷 Where to Add Visuals  

- **Screenshot 1:** Original Access database structure (tables, fields, queries).  
- **Screenshot 2:** Example of a first-generation report (hours by category).  
- **Screenshot 3:** Early Access form (basic input screen).  
- **Code Snippet:** A short example of an early SQL query used for calculating regular vs. overtime hours.  

Adding these visuals will not only make the history tangible but also help readers appreciate how far the project has evolved.
