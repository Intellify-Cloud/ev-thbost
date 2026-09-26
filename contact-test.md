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
    </p>
  </header>

  <div class="contact-page__form">
    {% include contact.html %}
  </div>
</div>
