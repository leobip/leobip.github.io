---
layout: default
title: "Contacto"
permalink: /contact/
---

<section class="contact-section">
  <div class="container">
    <h1>Contacto</h1>
    <!-- Aquí vamos a incluir la sección About y Personal Info -->

    <!-- ABOUT SECTION -->
    <section class="about">
      <div class="about-container">
        <div class="about-column">
          <h3>About Me (English)</h3>
          <p>{{ site.author.about_en | markdownify }}</p>
        </div>
        <div class="about-column">
          <h3>Sobre Mí (Español)</h3>
          <p>{{ site.author.about_es | markdownify }}</p>
        </div>
      </div>
    </section>

    <!-- PERSONAL INFO -->
    <section id="personal-info">
      <div class="personal-container">
        <div class="personal-column">
          <!-- EDUCATION -->
          <div class="education">
            <h3>Education</h3>
            <ul>
              {% for edu in site.personal_info.education %}
                <li>{{ edu.title }}, {{ edu.institution }}, {{ edu.year }}</li>
              {% endfor %}
            </ul>
          </div>

          <!-- CERTIFICATIONS -->
          <div class="certifications">
            <h3>Certifications</h3>
            <ul>
              {% for cert in site.personal_info.certifications %}
                <li>{{ cert.title }}{% if cert.institution %}, {{ cert.institution }}{% endif %}, {{ cert.year }}</li>
              {% endfor %}
            </ul>
          </div>
        </div>

        <div class="personal-column">
          <!-- EXPERIENCE -->
          <div class="experience">
            <h3>Experience</h3>
            {% for exp in site.personal_info.experience %}
            <div class="job">
              <h4>{{ exp.job_title }}</h4>
              <p>{{ exp.company }} ({{ exp.period }})</p>
              <ul class="responsibilities">
                {% for responsibility in exp.responsibilities %}
                  <li>{{ responsibility }}</li>
                {% endfor %}
              </ul>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>
    </section>
    
    <!-- SKILLS SECTION -->
    <section class="skills">
      <div class="container skills-container">
        <!-- Hard Skills -->
        <div class="skills-category hard-skills">
          <h3>Hard Skills</h3>
          {% for skill in site.personal_info.skills.hard_skills %}
          <div class="skill">
            <h4>{{ skill.name }}</h4>
            <div class="progress-bar">
              <div class="progress" style="width: {{ skill.level }};">
                <span class="progress-percentage">{{ skill.level }}</span>
              </div>
            </div>
          </div>
          {% endfor %}
        </div>

        <!-- Soft Skills -->
        <div class="skills-category soft-skills">
          <h3>Soft Skills</h3>
          {% for skill in site.personal_info.skills.soft_skills %}
          <div class="skill">
            <h4>{{ skill.name }}</h4>
            <div class="circular-progress" data-progress="{{ skill.level }}"></div>
          </div>
          {% endfor %}
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <h1>Contacto</h1>
        <p>Puedes contactarme a través de las siguientes plataformas:</p>
        <ul>
          <li>Email: <a href="mailto:tu-email@example.com">tu-email@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/tu-perfil" target="_blank">Mi Perfil en LinkedIn</a></li>
          <li>GitHub: <a href="https://github.com/tu-usuario" target="_blank">Mi Perfil en GitHub</a></li>
        </ul>
      </div>
    </section>

  </div>
</section>

<!-- JavaScript para animar los indicadores circulares -->
<script>
  document.querySelectorAll('.circular-progress').forEach(function(elem) {
    let progress = elem.getAttribute('data-progress');
    elem.style.setProperty('--progress', progress + '%');
  });
</script>
