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

  {% comment %}
  Contact form disabled because it is not currently sending email.
  <div class="contact-page__form">
    {% include contact.html %}
  </div>
  {% endcomment %}

  <section class="contact-page__grid" aria-label="Contact options">
    <article class="contact-card contact-card--primary">
      <div class="contact-card__icon" aria-hidden="true">
        <i class="fab fa-whatsapp"></i>
      </div>
      <h2>WhatsApp</h2>
      <p>Fastest for new enquiries, documents and quick questions.</p>
      <a class="contact-card__button" href="{{ site.whatsapp }}" target="_blank" rel="noopener noreferrer">
        Message us on WhatsApp
      </a>
    </article>

    <article class="contact-card">
      <div class="contact-card__icon" aria-hidden="true">
        <i class="fas fa-phone"></i>
      </div>
      <h2>Call Grant</h2>
      <p>Speak directly with Grant Acutt, Founder &amp; Director of {{ site.company }}.</p>
      <a class="contact-card__button" href="tel:{{ site.telephone }}">
        {{ site.telephone_display }}
      </a>
    </article>

    <article class="contact-card">
      <div class="contact-card__icon" aria-hidden="true">
        <i class="fas fa-envelope"></i>
      </div>
      <h2>Email</h2>
      <p>Best for detailed questions or when you want to attach supporting documents.</p>
      <a class="contact-card__button" href="mailto:{{ site.email }}?subject=Home loan enquiry from The Bond Studio website">
        {{ site.email }}
      </a>
    </article>
  </section>

  <section class="contact-page__details" aria-label="Contact details">
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

  <section class="contact-process" aria-label="What happens after you contact us">
    <div class="contact-process__header">
      <p class="contact-page__eyebrow">What happens next</p>
      <h2>From enquiry to bank offers</h2>
    </div>

    <ol class="contact-process__steps">
      <li>
        <span>1</span>
        <p>We contact you to understand your income, deposit and the property you have in mind.</p>
      </li>
      <li>
        <span>2</span>
        <p>We confirm the supporting documents each bank will need from you.</p>
      </li>
      <li>
        <span>3</span>
        <p>We submit your application to multiple banks, including your own bank.</p>
      </li>
      <li>
        <span>4</span>
        <p>We negotiate on the offers received and explain each one clearly.</p>
      </li>
      <li>
        <span>5</span>
        <p>You choose the home loan offer that suits you best.</p>
      </li>
    </ol>
  </section>

  <section class="contact-page__support" aria-label="Useful next steps">
    <article>
      <h2>Not ready to apply?</h2>
      <p>
        Estimate your repayment with our
        <a href="{{ '/bond-calculator/' | relative_url }}">bond repayment calculator</a>,
        or see what you may qualify for with our
        <a href="{{ '/affordability-calculator/' | relative_url }}">affordability calculator</a>.
      </p>
    </article>

    <p class="contact-page__legal">
      By starting an enquiry you agree that we may share your information with banks and
      lending partners in order to apply for a home loan on your behalf. See our
      <a href="{{ '/data-sharing-agreement/' | relative_url }}">data sharing agreement</a> and
      <a href="{{ '/privacy-statement/' | relative_url }}">privacy statement</a>.
      Approval, interest rates and final terms are decided by each bank.
    </p>
  </section>
</div>
