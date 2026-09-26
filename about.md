---
layout: page
title: "About The Bond Studio"
seo_title: "About The Bond Studio | Bond Originators in Cape Town"
description: "Meet the team behind The Bond Studio. Led by Grant Acutt with over 20 years in South African home loans, we help buyers compare offers from all the major banks."
permalink: /about/
background: gray
---

<section class="bg-light page-section py-5" id="about">
  <div class="container-custom">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="section-heading">About The Bond Studio</h1>
        <h2 class="section-subheading">{{ site.data.sitetext.about.title | default: "About Us" }}</h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12">
        <div class="about-content text-center">
          <div class="large text-muted">{{ site.data.sitetext.about.text2 | markdownify }}</div>
          <div class="accent-text">
            {{ site.data.sitetext.about.text3 | markdownify }}
          </div>

          <h2>What we do</h2>
          <p>
            {{ site.company }} is a bond originator based in {{ site.address.suburb }},
            {{ site.address.city }}. We are not a lender. We prepare your home loan
            application, submit it to multiple banks including your own, and negotiate on
            the offers that come back so you can compare them side by side. Approval,
            interest rates and final terms are decided by each bank based on its own
            credit and affordability assessment.
          </p>

          <h2>Areas we serve</h2>
          <p>
            We assist home buyers across {{ site.address.city }} and the
            {{ site.address.region }}, and can help clients elsewhere in South Africa.
          </p>

          <h2>Next steps</h2>
          <p>
            <a href="{{ '/affordability-calculator/' | relative_url }}">Estimate what you may qualify for</a>,
            <a href="{{ '/bond-calculator/' | relative_url }}">work out your monthly repayment</a>, or
            <a href="{{ '/contact/' | relative_url }}">speak to a bond originator</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
