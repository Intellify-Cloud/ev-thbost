---
layout: page
title: "Contact Form Test"
seo_title: "Contact Form Test"
description: "Hidden contact form test page for Broadsheet workflow validation."
permalink: /contact-test/
background: gray
noindex: true
---

<div class="contact-page">
  <header class="contact-page__header">
    <p class="contact-page__eyebrow">Internal testing</p>
    <h1 class="section-heading">Hidden contact form test</h1>
    <p class="contact-page__intro">
      This page is only for validating the Broadsheet contact flow. It is not linked from the main site navigation.
      Open the browser console to see the request and response logs.
    </p>
  </header>

  <div class="contact-page__form">
    <form id="testForm" novalidate>
      <label for="testEmail">Email address</label>
      <input type="email" id="testEmail" name="emailAddress" required>
      <button type="submit" id="testSubmit">Send test</button>
    </form>
    <pre id="testLog" style="white-space: pre-wrap; margin-top: 1rem;"></pre>
  </div>
</div>

<script>
  (function () {
    'use strict';

    const API_URL = '{{ site.broadsheetApiUrl | default: "https://api.broadsheet.intellify.co.za/v1/messages" }}';
    const form = document.getElementById('testForm');
    const email = document.getElementById('testEmail');
    const submitBtn = document.getElementById('testSubmit');
    const logEl = document.getElementById('testLog');

    function log(label, value) {
      console.log('[broadsheet-test] ' + label, value === undefined ? '' : value);
      logEl.textContent += label + (value === undefined ? '' : ' ' + (typeof value === 'string' ? value : JSON.stringify(value, null, 2))) + '\n';
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      logEl.textContent = '';

      const body = { emailAddress: email.value.trim() };

      log('POST', API_URL);
      log('Origin', window.location.origin);
      log('Body', body);

      submitBtn.disabled = true;
      const started = performance.now();

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(body)
        });

        log('Status', response.status + ' ' + response.statusText + ' (' + Math.round(performance.now() - started) + ' ms)');

        const headers = {};
        response.headers.forEach(function (v, k) { headers[k] = v; });
        log('Response headers', headers);

        const text = await response.text();
        log('Response body', text || '(empty)');
      } catch (error) {
        // A network or CORS failure lands here and has no status code.
        console.error('[broadsheet-test] Request failed', error);
        log('Request failed', String(error));
      } finally {
        submitBtn.disabled = false;
      }
    });
  })();
</script>
