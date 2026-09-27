---
layout: page
title: "Contact Us"
seo_title: "Contact The Bond Studio | Speak to a Bond Originator in Cape Town"
description: "Start a home loan enquiry with The Bond Studio. Call 081 303 9611, WhatsApp or email us. Obligation-free, and our service costs you nothing."
permalink: /contact/
background: gray
---

<div class="contact-page">
  <header class="contact-page__header">
    <p class="contact-page__eyebrow">Speak to a bond originator</p>
    <h1 class="section-heading">Contact The Bond Studio</h1>
    <p class="contact-page__intro">
      Start a home loan enquiry, ask about pre-approval, or get help comparing bank offers.
      Enquiries are obligation-free and our service costs you nothing - the bank pays our
      fee once your home loan registers.
    </p>
  </header>

  <div class="contact-layout">
    <section class="contact-layout__direct" aria-label="Contact us directly">
      <a class="contact-card contact-card--primary" href="{{ site.whatsapp }}" target="_blank" rel="noopener noreferrer">
        <span class="contact-card__icon" aria-hidden="true"><i class="fab fa-whatsapp"></i></span>
        <span class="contact-card__body">
          <span class="contact-card__title">WhatsApp</span>
          <span class="contact-card__text">Fastest for new enquiries, documents and quick questions.</span>
          <span class="contact-card__action">Message us on WhatsApp</span>
        </span>
      </a>

      <a class="contact-card" href="tel:{{ site.telephone }}">
        <span class="contact-card__icon" aria-hidden="true"><i class="fas fa-phone"></i></span>
        <span class="contact-card__body">
          <span class="contact-card__title">Call Grant</span>
          <span class="contact-card__text">Speak directly with Grant Acutt, Founder &amp; Director of {{ site.company }}.</span>
          <span class="contact-card__action">{{ site.telephone_display }}</span>
        </span>
      </a>

      <a class="contact-card" href="mailto:{{ site.email }}?subject=Home loan enquiry from The Bond Studio website">
        <span class="contact-card__icon" aria-hidden="true"><i class="fas fa-envelope"></i></span>
        <span class="contact-card__body">
          <span class="contact-card__title">Email</span>
          <span class="contact-card__text">Best for detailed questions or when you want to attach documents.</span>
          <span class="contact-card__action">{{ site.email }}</span>
        </span>
      </a>

    <article class="contact-info-card">
      <h2>Office Hours</h2>
      <dl>
        <div>
          <dt>Mon - Fri</dt>
          <dd>8AM - 5PM</dd>
        </div>
        <div>
          <dt>Sat</dt>
          <dd>9AM - 1PM</dd>
        </div>
        <div>
          <dt>Sun, Public Holidays</dt>
          <dd>Closed</dd>
        </div>
        <div>
          <dt>After Hours</dt>
          <dd>Send a WhatsApp or email and we will come back to you.</dd>
        </div>
      </dl>
    </article>

    <article class="contact-info-card">
      <h2>Where to Find Us</h2>
      <address>
        {{ site.address.street }}<br>
        {{ site.address.suburb }}<br>
        {{ site.address.city }}, {{ site.address.postcode }}
      </address>
    </article>
    </section>

    <div class="contact-layout__form">
      {% include contact.html %}
    </div>
  </div>
</div>
