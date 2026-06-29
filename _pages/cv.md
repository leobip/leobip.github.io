---
layout: single
title: "CV — Leoncio Lopez"
permalink: /cv/
author_profile: false
classes: wide
---

<style>
  /* ── GATE ── */
  .cv-gate {
    max-width: 420px;
    margin: 5rem auto 3rem;
    text-align: center;
  }
  .cv-gate__icon { font-size: 2.8rem; margin-bottom: 1rem; }
  .cv-gate__title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    color: #e2e8f0;
  }
  .cv-gate__sub {
    font-size: 0.85rem;
    color: #94a3b8;
    margin-bottom: 2rem;
  }
  .cv-gate__form {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .cv-gate__input {
    padding: 0.65rem 1rem;
    border-radius: 8px;
    border: 1px solid #334155;
    background: #0f172a;
    color: #e2e8f0;
    font-size: 1rem;
    width: 200px;
    outline: none;
    transition: border-color 0.2s;
  }
  .cv-gate__input:focus { border-color: #5eead4; }
  .cv-gate__btn {
    padding: 0.65rem 1.4rem;
    background: #5eead4;
    color: #0d1117;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background 0.2s;
  }
  .cv-gate__btn:hover { background: #2dd4bf; }
  .cv-gate__error {
    color: #f87171;
    font-size: 0.82rem;
    margin-top: 0.9rem;
    display: none;
  }

  /* ── CV CONTENT ── */
  .cv-content { display: none; }
  .cv-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .cv-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 1.4rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.88rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cv-btn--primary {
    background: #5eead4;
    color: #0d1117;
    border: none;
  }
  .cv-btn--primary:hover { background: #2dd4bf; color: #0d1117; }
  .cv-btn--outline {
    background: transparent;
    color: #5eead4;
    border: 1px solid #5eead4;
  }
  .cv-btn--outline:hover { background: rgba(94,234,212,0.1); color: #5eead4; }
  .cv-btn--ghost {
    background: transparent;
    color: #94a3b8;
    border: 1px solid #334155;
  }
  .cv-btn--ghost:hover { color: #e2e8f0; border-color: #64748b; }

  .cv-frame-wrap {
    border: 1px solid #1e293b;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  }
  #cv-frame {
    width: 100%;
    min-height: 1500px;
    border: none;
    display: block;
  }
</style>

<!-- GATE -->
<div class="cv-gate" id="cv-gate">
  <div class="cv-gate__icon">🔐</div>
  <div class="cv-gate__title">Protected CV</div>
  <div class="cv-gate__sub">Enter the password to view and download the CV.<br>You can request it via <a href="mailto:leobip27@gmail.com?subject=CV%20Password%20Request" style="color:#5eead4">email</a> or <a href="https://www.linkedin.com/in/leoncio-l%C3%B3pez-00527474" target="_blank" style="color:#5eead4">LinkedIn</a>.</div>
  <div class="cv-gate__form">
    <input class="cv-gate__input" id="cv-pw" type="password" placeholder="Password" autocomplete="off">
    <button class="cv-gate__btn" onclick="unlockCV()">Unlock</button>
  </div>
  <div class="cv-gate__error" id="cv-error">❌ Incorrect password. Try again.</div>
</div>

<!-- CV CONTENT (hidden until unlocked) -->
<div class="cv-content" id="cv-content">
  <div class="cv-actions">
    <a class="cv-btn cv-btn--primary" href="/assets/cv/leoncio-lopez-cv.html#print" target="_blank">
      📥 Download / Print PDF
    </a>
    <a class="cv-btn cv-btn--outline" href="/assets/cv/leoncio-lopez-cv.html" target="_blank">
      🖨️ Open to Print
    </a>
    <a class="cv-btn cv-btn--ghost" href="mailto:leobip27@gmail.com">
      ✉️ Contact
    </a>
  </div>
  <div class="cv-frame-wrap">
    <iframe id="cv-frame" title="Leoncio Lopez CV" scrolling="yes"></iframe>
  </div>
</div>

<script>
  function unlockCV() {
    var pw = document.getElementById('cv-pw').value.trim();
    var h = Array.from(pw).map(function(c) {
      return c.charCodeAt(0).toString(16).padStart(2,'0');
    }).join('');
    if (h === '43562d4c4c503236') {
      document.getElementById('cv-gate').style.display = 'none';
      var content = document.getElementById('cv-content');
      content.style.display = 'block';
      var frame = document.getElementById('cv-frame');
      frame.onload = function() {
        try {
          frame.style.height = (frame.contentWindow.document.documentElement.scrollHeight + 30) + 'px';
        } catch(e) {
          frame.style.height = '1600px';
        }
      };
      frame.src = '/assets/cv/leoncio-lopez-cv.html';
    } else {
      var err = document.getElementById('cv-error');
      err.style.display = 'block';
      document.getElementById('cv-pw').value = '';
      document.getElementById('cv-pw').focus();
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cv-pw').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') { unlockCV(); }
    });
  });
</script>
