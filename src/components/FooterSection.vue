<template>
  <footer class="relative bg-brown-900 text-cream-100 overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0tMTggMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')]"></div>
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div class="space-y-4">
          <img
            src="/logo.png"
            alt="العكش"
            class="h-24 w-auto"
          />
          <p class="text-cream-200 leading-relaxed">
            {{ t('footer.description') }}
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gold-400">{{ t('footer.contact') }}</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 text-cream-200">
              <span class="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </span>
              <div>
                <div class="text-gold-300 font-semibold mb-1">{{ t('footer.address') }}</div>
                <span class="text-lg">{{ t('footer.addressValue') }}</span>
              </div>
            </div>
            <a
              :href="`tel:${t('contact.phoneValue1').replace(/\//g, '')}`"
              class="flex items-center gap-3 text-cream-200 hover:text-gold-400 transition-colors group"
            >
              <span class="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </span>
              <span>{{ t('contact.phoneValue1') }}</span>
            </a>
            <a
              :href="`tel:${t('contact.phoneValue2')}`"
              class="flex items-center gap-3 text-cream-200 hover:text-gold-400 transition-colors group"
            >
              <span class="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </span>
              <span>{{ t('contact.phoneValue2') }}</span>
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gold-400">{{ t('footer.followUs') }}</h3>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              class="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="#"
              class="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gold-400">تواصل معنا</h3>
          <WhatsAppButton
            variant="glass"
            :text="t('cta.button')"
            message="مرحباً، أريد الاستفسار عن منتجاتكم"
          />
        </div>
      </div>

      <div class="border-t border-cream-800 pt-8">
        <p class="text-center text-cream-300">
          © 2024 العكش. {{ t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import WhatsAppButton from './WhatsAppButton.vue'

const { t } = useI18n()
</script>
