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

## 1. Introduction 🌍

Back in the year 2000, I faced a very practical challenge while working on petroleum projects in Venezuela: keeping track of work hours in a reliable and structured way.  
The oil industry required strict control over **regular hours, overtime, shifts, payroll types, and classifications**, and the tools available at the time were either too generic or inefficient for the complexity of the operations.  

What began as a **personal project** — simply a Microsoft Access database with SQL queries to ease my own workload — soon evolved into something much bigger.  
Over time, this small side project grew into a professional-grade application, capable of handling multiple projects, contracts, and thousands of workers simultaneously.  

This article tells the story of how that tool was born, how it scaled to support more than **80 companies and 8,000 workers** in Venezuela’s oil industry, and how, after years of success and even after migration to Spain, it is being **reborn in 2025 with modern technologies**.  

---

## 2. Early Development (2000–2002)  🏗️

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

## 3. Adoption of the Application in the Venezuelan Oil Industry (2002–2018) 🏭

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

- 🗂️ **Multi-project management**: control several contracts and service orders simultaneously, each with their own flows.  
- ⏱️ **Flexible scheduling**: adapt to any national or international labor regulations.  
- 📊 **Detailed reports**: attendance, overtime, daily/weekly/monthly summaries, averages, workforce distribution.  
- 📄 **Payroll integration**: export data to Excel or generate PDFs ready for electronic distribution.  
- 🔐 **Security**: user roles, password management, encryption of payroll files, and detailed activity logs.  
- 🔌 **Device connectivity**: support for RFID, biometric systems, and card readers (magnetic stripe/barcode).
- 📱 **Device compatibility**: the system could be configured to work with **any time & attendance device** available in the market.  
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

Over the years, the system evolved to include more than **75 different reports**, each configurable with a wide range of parameters such as shift, date, time interval, payroll type, accumulated hours, area, department, and even union affiliation.  
In addition, data could be exported so that clients could generate their own analyses or custom reports.  

This constant growth was driven by a simple philosophy: **listen to client needs and adapt the software accordingly**.  
Rather than forcing a fixed set of outputs, the application was continuously updated to deliver new reports and features based on real-world requirements.  
This flexibility not only solved immediate problems but also built long-term trust with clients.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-act-reports.png' | relative_url }}" 
       style="max-width:90%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Weekly Reports Form.
  </figcaption>
</figure>

***Key Insight:*** The client should never adapt to the software — the software must adapt to the client.  

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

I am deeply grateful to ***Spain***, which has given me the opportunity to keep growing professionally and personally. That growth, however, is another story — one you can explore in more detail in the [About section](/about/).  

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

## 6. Relaunch: A New Version (2025) 🚀

After more than two decades in production, a client request in 2025 sparked the idea of bringing the system back to life in a modern form. The motivation was clear: the software had proven its value and adaptability, and it deserved a new chapter with today’s technologies.

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-2025-home.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos 2025 - Home.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-2025-pers-mng.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos 2025 - Personnel Management.
  </figcaption>
</figure>

Technology stack of the new version:

- 🗄️ Database: SQLite (lightweight, reliable, and portable).
- 🐍 Programming & GUI: Python with Flet, allowing modern, responsive interfaces.
- 💻 Multi-platform: Fully compatible with Windows, Linux, and macOS.
- 📡 Device compatibility: Designed to work with a wide range of attendance devices — from Wi-Fi and USB-based readers to laser scanners and Android mobile devices.
- 📱 Extensible by design: Built to adapt to future needs and integrate new devices or workflows seamlessly.

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-2025-db-struct.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos 2025 - SQLite DB Structure.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-2025-code-snipped.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos 2025 - Code Snipped.
  </figcaption>
</figure>

This new phase is not just a rewrite — it’s a reinvention. The goal is to preserve the robustness and flexibility of the original system, while embracing modern development practices, open-source tools, and cross-platform compatibility.

More importantly, the system is no longer limited to time and attendance tracking. Its architecture now allows extending its scope into broader areas of workforce and operational management, such as:

- Activity-based tracking: Measuring hours dedicated to specific tasks, projects, or activities.
- Workstation monitoring: Associating labor hours with production lines, equipment, or workstations.
- Production chain integration: Recording and analyzing time spent across different steps of industrial workflows.
- Planning and projections: Estimating workload, forecasting resource consumption, and supporting strategic scheduling.
- Flexible reporting: From traditional attendance logs to predictive dashboards with charts and analytics.

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-2025-variables-creation.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos 2025 - Variables Creation Form.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-2025-shifts&schedulles.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos 2025 - Shifts & Schedulles Form.
  </figcaption>
</figure>

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-2025-trans-mng.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos 2025 - Transactions Management Form.
  </figcaption>
</figure>

***In short, the 2025 version is designed as a modular and future-ready platform — capable of evolving from a personnel control system into a full workforce and process management solution.***

## 7. Reflections & Lessons Learned  

Looking back at this 25-year journey, the development and evolution of the system taught me valuable lessons that go far beyond technical skills.  

### 🕰️ Software Longevity

One of the most striking aspects of this project is its **long lifespan**.  
What started as a simple Access database in 2000 continued to run successfully for almost two decades, even after I migrated to another country.  
This reinforced the idea that software doesn’t always need to be “reinvented” every few years — if it is well designed, stable, and solves real problems, it can remain relevant far longer than expected.  

### 🤝 Adapting to Client Needs

From the very beginning, the philosophy was clear: **the client should not adapt to the software — the software must adapt to the client**.  
This flexibility, whether in adding new reports, supporting custom workflows, or integrating with different attendance devices, built a strong reputation and loyalty.  
It also highlighted that the real value of a system is not in imposing “best practices,” but in empowering the client to optimize their own processes.  

### 🛠️ Building in Tough Environments

Developing and maintaining a commercial system in Venezuela between 2002 and 2018 was no easy task.  
Economic instability, political challenges, and the rise and fall of oil production created a constantly shifting environment.  
Yet, this forced the project to be **resilient and practical**: lightweight, flexible, and able to deliver results even with limited resources.  
These conditions became an unexpected training ground for building robust and efficient solutions.  

### 🌍 The Value of Trust

Perhaps the most important lesson is the **long-term trust built with clients**.  
Even years after migrating to Spain, I continued to provide support to companies still running the system in Venezuela and abroad.  
The fact that clients relied on the application for critical operations over two decades is a testament to the importance of reliability, communication, and commitment in professional relationships.  

---

***These lessons are not only part of the system’s history, but also part of my personal and professional growth as a developer and engineer.***

## 8. Conclusion  

Looking back, it is remarkable to see how a small tool built in 2000 for my own personal use gradually grew into an **industry-wide solution** adopted by more than 80 companies and used by over 8,000 workers by 2018.  
What started as a set of SQL queries in Microsoft Access became a robust workforce management system capable of adapting to complex requirements in one of the most demanding industries.  

Looking forward, the story continues.  
In 2025, I am developing a **new version of the system** built with modern technologies:

- **Database**: SQLite  
- **Programming & GUI**: Python with Flet  
- **Platforms**: Windows, macOS, Linux  
- **Hardware integration**: adaptable to Wi-Fi, USB, mobile, and other attendance devices  

This new chapter reflects not only technological progress, but also the resilience of an idea that has proven its value for more than two decades.  

On a personal note, the system mirrors my own professional journey:  
from Venezuela, where it was born and reached commercial success in the oil industry, to Spain, where I continue to grow as a developer and engineer.  
Even today, I still provide support to clients who rely on the original system — a testament to the trust built over the years and to the longevity of software that truly solves real-world problems.  

The project has come full circle: from a personal solution, to a commercial success, and now back to a new version shaped by both **experience and modern tools**.  
And just like in 2000, the goal remains the same: **to listen, adapt, and deliver solutions that truly meet client needs**.  

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/adp-timeline.png' | relative_url }}" 
       style="max-width:75%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Chronos - Timeline.
  </figcaption>
</figure>

It is both a story of **software evolution** and of **personal growth** — from Venezuela’s oil industry, through migration to Spain, and back into active development with today’s tools.  

---

✍️ *Thanks for reading! This is more than a system — it’s the story of how real needs, resilience, and client trust shaped 25 years of development.*  
