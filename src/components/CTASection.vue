<template>
  <section class="relative py-20 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-gold"></div>
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0tMTggMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')]"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight animate-fade-in-up">
          {{ t('cta.title') }}
        </h2>

        <p class="text-xl md:text-2xl text-cream-100 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.1s;">
          {{ t('cta.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up" style="animation-delay: 0.2s;">
          <WhatsAppButton
            variant="glass"
            :text="t('cta.button')"
            message="مرحباً، أريد طلب منتجاتكم"
            class="transform hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div class="text-4xl font-black text-white mb-2">+1000</div>
            <div class="text-cream-200 text-sm">عميل سعيد</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div class="text-4xl font-black text-white mb-2">100%</div>
            <div class="text-cream-200 text-sm">رضا العملاء</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div class="text-4xl font-black text-white mb-2">+100</div>
            <div class="text-cream-200 text-sm">عام خبرة</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div class="text-4xl font-black text-white mb-2">⭐⭐⭐⭐⭐</div>
            <div class="text-cream-200 text-sm">تقييم ممتاز</div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brown-900 to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import WhatsAppButton from './WhatsAppButton.vue'

const { t } = useI18n()
</script>
