<template>
  <div class="layout">
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex justify-content-between align-items-center">

<div class="logo">
  <h1><a href="/">Makit4Me</a></h1>
</div>

<nav id="navbar" class="navbar">
  <ul>
    <li><a class="active " href="/">Home</a></li>
    <li><a href="#">Features</a></li>
     <li><a href="#" disabled>Contact Us</a></li>
    <li style="padding: 10px 20px;"><button type="button" class="btn btn-warning btn-signup">Sign Up/Login</button></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
</nav><!-- .navbar -->

</div>
    </header>
    <section class="hero-section" id="hero">

      <div class="wave">

        <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
              <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z" id="Path"></path>
            </g>
          </g>
        </svg>

      </div>

      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 hero-text-image">
            <div class="row">
              <div class="col-lg-8 text-center text-lg-start">
                <h1 data-aos="fade-right">Self Service App</h1>
                <p class="mb-5" data-aos="fade-right" data-aos-delay="100">An App for all ages.</p>
                <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500"><a href="features.html" class="btn btn-outline-white">Learn More</a></p>
              </div>
              <div class="col-lg-4 iphone-wrap">
                <img src="../assets/img/phone_1.png" alt="Image" class="phone-1" data-aos="fade-right">
                <img src="../assets/img/phone_2.png" alt="Image" class="phone-2" data-aos="fade-right" data-aos-delay="200">
              </div>
            </div>
          </div>
        </div>
      </div>

    </section><!-- End Hero -->
    <slot/>
    <FeatureOne />
    <DownloadApp />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
<script>
import Footer from '~/components/Footer.vue'
import DownloadApp from '../components/DownloadApp.vue';
import FeatureOne from '../components/FeatureOne.vue';

export default {
  components: {
    Footer,
    DownloadApp,
    FeatureOne
  }
}
</script>
