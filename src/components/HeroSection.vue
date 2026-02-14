<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cream">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 right-20 w-96 h-96 bg-gold-300/30 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream-200/40 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-right space-y-8 animate-fade-in-up">
          <div class="inline-block">
            <img
              src="/logo.png"
              alt="العكش"
              class="h-40 md:h-56 lg:h-64 w-auto mx-auto lg:mx-0 drop-shadow-2xl animate-scale-in"
            />
          </div>





          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-gradient leading-tight">
            {{ t('hero.title') }}
          </h1>

          <p class="text-2xl md:text-3xl font-bold text-brown-800">
            {{ t('hero.subtitle') }}
          </p>

          <div class="space-y-4">
            <p class="text-lg md:text-xl text-brown-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {{ t('hero.description') }}
            </p>
            <div class="flex items-center justify-center lg:justify-start gap-3">
              <div class="h-px flex-grow max-w-[100px] bg-gradient-to-l from-gold-400 to-transparent"></div>
              <div class="flex gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-gold-300"></span>
              </div>
              <div class="h-px flex-grow max-w-[100px] bg-gradient-to-r from-gold-400 to-transparent"></div>
            </div>
          </div>

          <div class="relative">
  <span class="text-gold-300/30 text-6xl font-bold leading-none align-top">
    "
  </span>

  <p class="inline text-2xl md:text-3xl font-bold text-brown-900 leading-relaxed italic">
    {{ t('hero.heritage') }}
  </p>

  <span class="text-gold-300/30 text-6xl font-bold leading-none rotate-180 inline-block align-bottom">
    "
  </span>
</div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              @click="scrollToProducts"
              class="group relative px-8 py-4 rounded-full bg-gradient-gold text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span class="relative z-10 flex items-center gap-2 justify-center">
                <span>{{ t('hero.cta') }}</span>
                <svg class="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-orange-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            <WhatsAppButton
              variant="glass"
              :text="t('cta.button')"
            />
          </div>

          <div class="flex items-center justify-center lg:justify-start gap-8 pt-8">
            <div class="text-center">
              <div class="text-4xl font-black text-gradient">100%</div>
              <div class="text-sm text-brown-700">طبيعي</div>
            </div>
            <div class="w-px h-12 bg-gold-300"></div>
            <div class="text-center">
              <div class="text-4xl font-black text-gradient">+100</div>
              <div class="text-sm text-brown-700">عام خبرة</div>
            </div>
            <div class="w-px h-12 bg-gold-300"></div>
            <div class="text-center">
              <div class="text-4xl font-black text-gradient">✓</div>
              <div class="text-sm text-brown-700">جودة مضمونة</div>
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div class="relative w-full aspect-square animate-scale-in" style="animation-delay: 0.2s;">
            <div class="absolute inset-0 bg-gradient-gold rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>

            <div class="relative w-full h-full">
              <div class="absolute top-0 right-0 w-64 h-64 rounded-3xl overflow-hidden shadow-gold-lg transform rotate-6 hover:rotate-12 transition-transform duration-500 animate-float">
                <img
                  src="/public/alokosh1.png"
                  alt="طحينة"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="absolute bottom-20 left-0 w-64 h-64 rounded-3xl overflow-hidden shadow-gold-lg transform -rotate-6 hover:-rotate-12 transition-transform duration-500 animate-float" style="animation-delay: 0.5s;">
                <img
                  src="/public/alokosh2.png"
                  alt="سمسم"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-3xl overflow-hidden shadow-gold-lg hover:scale-105 transition-transform duration-500 animate-float" style="animation-delay: 1s;">
                <img
                  src="/public/alokosh3.png"
                  alt="منتجات طبيعية"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import WhatsAppButton from './WhatsAppButton.vue'

const { t } = useI18n()

const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
