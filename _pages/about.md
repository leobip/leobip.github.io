---
layout: single
classes: wide
title: "Career Journey"
---


{% capture fig_img %}
![Foo]({{ '/assets/images/career-development.jpg' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Photo from Internet.</figcaption>
</figure>

## Welcome

This page highlights key information about my professional background, similar to what you can find on my LinkedIn. If you’re interested in more detailed information, including additional projects, references, and certifications, feel free to download my full CV by clicking the button below. (Password Protected - You can ask for it by email).

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <a href="mailto:leobip27@gmail.com?subject=CV%20Request"
    style="display: inline-block; padding: 0.75rem 2rem; background: indigo; color: #fff; border-radius: 8px; font-size: 1.1rem; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: background 0.2s;">
    📄 Request My CV via Email
  </a>
</div>

## About

DevOps Engineer with extensive experience in automation, database management, and process optimization. Specialized in Python programming and developing efficient, scalable software architectures. Passionate about integrating development and operations, using tools like Docker, Kubernetes, and Jenkins to improve workflows through automation.

{% capture fig_img %}
![Foo]({{ '/assets/images/devops.jpg' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Photo from Internet.</figcaption>
</figure>

## 📜 Courses & Certifications

- **AWS Certified Cloud Practitioner** - *AWS*, Aug-2025
- **Application Security for Developers and DevOps Professionals (Credential ID QUM2JCTLJN1Q)** - *IBM*, Jun-2025
- **Advanced PYTHON with CLOUD Computing** – *Training360 Kft*, 2024
- **PRINCE2® 7 Foundation in Project Management (Credential ID GR466035711LL)** – *PeopleCert*, May-2025
- **Well-Architected Proficient** – *AWS Training & Certification*, 2023
- **AWS Partner: Accreditation (Technical)** – *AWS Training & Certification*, 2023
- **Advanced Docker: Exploring Advanced Docker Principles & Practices** – *Skillsoft*, 2023
- **DevOps Culture and Mindset** – *Coursera - Univ. of California*, 2021
- **Google IT Automation with Python (Specialization)** – *Coursera - Google*, 2021
- **Polyspace for C/C++ Code Verification** – *MathWorks*, 2020
- **SonarQube, Install & Analysis** – 2020
- **Jira Admin. Part 1 & 2** – 2019

---

## 💼 Experience

### **DevOps Automation Engineer** – *T-Systems Itc Iberia S.A.U.* | 03/2023 – Present
- Design, develop, and deploy Python scripts and RESTful API functions to automate workflows.  
- Deploy and manage services using Docker, Kubernetes, and Helm to ensure scalability and reliability.  
- Create automation scripts for HashiCorp Vault to streamline secrets management.  
- Administer Linux systems and manage artifacts with JFrog Artifactory and GitLab version control.  

### **IT Delivery & Automation Engineer** – *HotelBeds Technology, S.L.U.* | 07/2022 – 02/2023
- Implement GitOps practices and manage deployments with ArgoCD.  
- Develop CI/CD pipelines in Jenkins/CloudBees using YAML and Groovy for automated software delivery.  
- Automate infrastructure with Docker, Ansible, Kubernetes, Terraform, and AWS services.  
- Monitor and optimize performance using Prometheus and Bitbucket.  

### **DevOps Consultant** – *Vermont Solutions* | 12/2021 – 06/2022
- Administer and deploy applications in OpenShift environments.  
- Develop and maintain Jenkins/CloudBees pipelines using YAML and Groovy for continuous integration.  
- Write automation scripts in Python, Shell, and Bash to enhance operational efficiency.  
- Utilize Docker, Ansible, and Kubernetes for container orchestration and deployment.  
- Conduct static code analysis using SonarQube to ensure code quality.  

### **GitLab CI/CD Admin & Developer** – *Capitole Consulting, S.L.* | 08/2021 – 12/2021
- Design and implement CI/CD pipelines and GitLab Runners using YAML and Groovy.  
- Develop Python and Shell scripts to automate deployment tasks.  
- Monitor GitLab statistics and system health using Grafana.  
- Manage remote connections and automate tasks with SSH scripts.  

### **Technologies and Support Engineer** – *GMV, Innovating Solutions* | 03/2019 – 07/2021
- Provide specialized user support and develop applications in Python, Ruby, and VBA.  
- Perform static code analysis using tools like SonarQube, MathWorks Polyspace, and Sci-Tools Understand.  
- Develop Python scripts to interact with SonarQube's REST API for data extraction and reporting.  
- Automate CI/CD processes with Jenkins, Docker, and Git/SVN.  
- Develop SQL queries and ETL processes using Talend Open Studio.  
- Configure and run code analysis in MathWorks Polyspace for C/C++ projects.  

### **Systems Manager** – *Alfa Sistemas, C.A.* | 2003 – 2018
- Develop and support database applications (Access, VBA, C#) for time management and project control for up to 10,000 users.  
- Design, install, and configure computer networks, including CISCO routers and switches.  
- Develop custom Python and VBA applications to meet client-specific needs.  
- Administer SQL Server databases, including stored procedures.  



## Skills

### Hard Skills

<style>
.skills-table {
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  margin: 0 auto;
  table-layout: fixed; /* fuerza distribución proporcional */
}

.skills-table th, .skills-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
}

.skills-table th {
  font-weight: bold;
}

.skill-col {
  width: 50%; /* Skill ocupa más */
}

.level-col {
  width: 50%; /* Barra ocupa menos */
}

.progress {
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  height: 20px;
  width: 100%; /* siempre llena la celda */
}

.progress-bar {
  height: 100%;
  background-color: indigo;
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 12px;
  font-weight: bold;
}
</style>

<table class="skills-table">
  <thead>
    <tr>
      <th class="skill-col">Skill</th>
      <th class="level-col">Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Python Programming</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 90%;">90%</div></div>
      </td>
    </tr>
    <tr>
      <td>Golang, C# Programming</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 75%;">75%</div></div>
      </td>
    </tr>
    <tr>
      <td>Version Control (Git, SVN, Bitbucket, GitLab)</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 85%;">85%</div></div>
      </td>
    </tr>
    <tr>
      <td>Docker & Containerization</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 90%;">90%</div></div>
      </td>
    </tr>
    <tr>
      <td>Kubernetes, OpenShift, ArgoCD</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 85%;">85%</div></div>
      </td>
    </tr>
    <tr>
      <td>CI/CD Pipelines (Jenkins/CloudBees)</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 90%;">90%</div></div>
      </td>
    </tr>
    <tr>
      <td>Cloud Platforms (AWS)</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 80%;">80%</div></div>
      </td>
    </tr>
    <tr>
      <td>Automation Tools (Ansible, Terraform)</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 85%;">85%</div></div>
      </td>
    </tr>
    <tr>
      <td>Code Quality (SonarQube, Static Analysis, Code Metrics)</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 90%;">90%</div></div>
      </td>
    </tr>
    <tr>
      <td>Shell Scripting (Bash, Linux)</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width: 85%;">85%</div></div>
      </td>
    </tr>
  </tbody>
</table>

### Soft Skills

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
  <div style="flex: 1 1 200px; border: 1px solid #ddd; border-radius: 8px; padding: 0.75rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
    <strong>🔄 Adaptability</strong>
  </div>
  <div style="flex: 1 1 200px; border: 1px solid #ddd; border-radius: 8px; padding: 0.75rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
    <strong>⏱️ Time Management</strong>
  </div>
  <div style="flex: 1 1 200px; border: 1px solid #ddd; border-radius: 8px; padding: 0.75rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
    <strong>💬 Effective Communication</strong>
  </div>
  <div style="flex: 1 1 200px; border: 1px solid #ddd; border-radius: 8px; padding: 0.75rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
    <strong>🎯 Leadership</strong>
  </div>
  <div style="flex: 1 1 200px; border: 1px solid #ddd; border-radius: 8px; padding: 0.75rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
    <strong>🧩 Problem Solver</strong>
  </div>
  <div style="flex: 1 1 200px; border: 1px solid #ddd; border-radius: 8px; padding: 0.75rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
    <strong>🧠 Critical Thinking</strong>
  </div>
  <div style="flex: 1 1 200px; border: 1px solid #ddd; border-radius: 8px; padding: 0.75rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
    <strong>🤝 Team Collaboration</strong>
  </div>
</div>
