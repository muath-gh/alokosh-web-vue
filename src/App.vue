<template>
  <div class="app">
    <HeroSection />
    <ProductsSection />
    <AboutSection />
    <CTASection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import AboutSection from './components/AboutSection.vue'
import CTASection from './components/CTASection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
