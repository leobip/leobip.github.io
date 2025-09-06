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

## ***From Access to Python: 25 Years of Building a Workforce Control System for the Oil Industry***

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

But as reporting needs grew, I began adding **new parameters, conditions, and eventually, forms**.  
This was my first attempt at creating something resembling an application: an interface on top of the database that allowed me to input data, run queries, and view results without manually typing commands every time.

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-orig-menu.png' | relative_url }}" 
       style="max-width:60%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    DB Application first Menu.
  </figcaption>
</figure>

By 2002, the project had matured to a point where it was no longer just for personal use.  
I saw an opportunity to **turn it into a commercial product**.  
What started as a tool for my own productivity had the potential to solve a much larger problem in the oil industry: accurately controlling and reporting labor hours across large-scale projects.  

This was the beginning of its transformation — from a simple database with ad hoc queries into a **professional application tailored for one of the most demanding industries**.  

---

## 3. Adoption of the Application in the Venezuelan Oil Industry (2002–2018)

By 2002, the project had grown from a personal database into a **fully functional commercial application**.  
It quickly gained traction in the Venezuelan oil industry, where accurate workforce management and reporting were critical for day-to-day operations.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-login.png' | relative_url }}" 
       style="max-width:60%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - DB Menus.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-menus.png' | relative_url }}" 
       style="max-width:60%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - DB Application login.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-struct.png' | relative_url }}" 
       style="max-width:60%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - DB Structure.
  </figcaption>
</figure>

Of course the code also evolve into more complicated.

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-code-snippet.png' | relative_url }}" 
       style="max-width:100%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - DB Structure.
  </figcaption>
</figure>

Over the years, the system was implemented in more than **80 companies**, supporting over **8,000 workers** across multiple projects and contracts.  
This wide adoption marked a turning point: the software became a trusted tool in one of the most complex and demanding industries in the country.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-intropers.png' | relative_url }}" 
       style="max-width:90%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Personnel Form.
  </figcaption>
</figure>

---

### 🔑 Key Features and Innovations  

- **Multi-project management**: control several contracts and service orders simultaneously, each with their own flows.  
- **Flexible scheduling**: adapt to any national or international labor regulations.  
- **Detailed reports**: attendance, overtime, daily/weekly/monthly summaries, averages, workforce distribution.  
- **Payroll integration**: export data to Excel or generate PDFs ready for electronic distribution.  
- **Security**: user roles, password management, encryption of payroll files, and detailed activity logs.  
- **Device connectivity**: support for RFID, biometric systems, and card readers (magnetic stripe/barcode).
- **Device compatibility**: the system could be configured to work with **any time & attendance device** available in the market.  
  This included biometric scanners, RFID readers, proximity card systems, and magnetic stripe/barcode readers.  
  I also personally developed the software for portable data collectors, such as the **Unitech HT630**, to capture and transfer attendance data directly into the system.  
  This capability ensured seamless integration regardless of the client’s existing hardware or field requirements.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-timetools.png' | relative_url }}" 
       style="max-width:90%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Some of equips.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-reports.png' | relative_url }}" 
       style="max-width:90%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Weekly Reports Form.
  </figcaption>
</figure>

---

### ⚙️ Technical Foundation  

- **Platform**: Microsoft Access (database and forms).  
- **Programming**: VBA for GUI and automation.  
- **Queries**: SQL for calculations and reporting.  
- **Integration scripts**: Bash for device communication.  
- **Device programming**: C for low-level configuration of attendance equipment.  

This stack provided flexibility, speed of development, and adaptability to client-specific requirements — a key differentiator from generic commercial solutions.  

---

### 📈 Scale and Impact  

- **80+ companies** implemented the system, from local contractors to international service providers.  
- **8,000+ workers** managed, across multiple locations and projects.  
- Reports and automation significantly **reduced human error** in timekeeping and payroll preparation.  
- The system helped companies improve **efficiency, compliance, and resource management**, even during times of economic and political uncertainty.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-daily-hours-report.png' | relative_url }}" 
       style="max-width:50%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Daily Hours Report.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-daily-hours-report2.png' | relative_url }}" 
       style="max-width:50%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Daily Hours Report.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-weekly-report.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Weekly Hours Report.
  </figcaption>
</figure>

The success of the application proved that a solution originally built for personal use could evolve into a robust, industry-scale product with long-term impact.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-total-hours-report-interval.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Accumulated hours report by Interval.
  </figcaption>
</figure>

---

## 4. Context and Challenges  

The system was developed and commercialized during one of the most complex and dynamic periods of the Venezuelan oil industry.  
Between the early 2000s and the mid-2010s, the country experienced both a **significant oil boom** and a sharp **decline in production**, strongly influenced by political and economic instability.  

These external factors created enormous uncertainty for companies and workers alike.  
Yet, despite the difficulties, the application remained relevant and valuable:

- It provided **consistency and reliability** in workforce management, even when other operational processes were affected.  
- It gave companies **transparency and compliance tools** to manage complex labor regulations.  
- It proved that software developed locally could adapt to international standards and client demands.  

This resilience was one of the reasons the application continued to be used across dozens of companies for over a decade and a half.  

---

## 5. Migration and Continuity (2018–2025)  

In 2018–2019, due to family reasons, I made the personal decision to migrate to Spain and begin a new professional chapter.  
Even with this change, the story of the application did not end.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-remote-support.webp' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Remote Support.
  </figcaption>
</figure>

From abroad, I continued to provide **remote support** to clients who relied on the system for their daily operations — not only in Venezuela but also internationally.  
The fact that the application remained in production for more than **two decades** is a testament to its robustness and the trust built with clients over the years.  

This continuity kept the project alive, and in some cases, client requests for updates or adaptations pushed me to revisit its core design.  
One such request in 2025 would ultimately become the spark to **restart development of a completely new version**, adapted to modern technologies and devices, but still carrying the same principles of flexibility and client-focused design that guided its beginnings.  

---

## ***To Be Continued...***
