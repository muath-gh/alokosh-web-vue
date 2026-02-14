<template>
  <section class="relative py-20 overflow-hidden bg-gradient-cream">
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-20 right-20 w-64 h-64 bg-gold-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <p class="text-gold-600 font-bold mb-3">{{ t('contact.subtitle') }}</p>
        <h2 class="text-4xl md:text-5xl font-black text-brown-900">
          {{ t('contact.title') }}
        </h2>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-100 hover:border-gold-300 hover:-translate-y-1">
            <div class="flex flex-col items-center text-center">
              <div class="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg font-black text-brown-900 mb-3">{{ t('contact.address') }}</h3>
              <p class="text-brown-700 font-semibold leading-relaxed">
                {{ t('contact.addressValue') }}
              </p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-100 hover:border-gold-300 hover:-translate-y-1">
            <div class="flex flex-col items-center text-center">
              <div class="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 class="text-lg font-black text-brown-900 mb-3">{{ t('contact.inquiry') }}</h3>
              <div class="space-y-2">
                <a
                  :href="`tel:${t('contact.phoneValue1').replace(/\//g, '')}`"
                  class="block text-brown-700 hover:text-gold-600 font-bold transition-colors"
                  dir="ltr"
                >
                  {{ t('contact.phoneValue1') }}
                </a>
                <a
                  :href="`tel:${t('contact.phoneValue2')}`"
                  class="block text-brown-700 hover:text-gold-600 font-bold transition-colors"
                  dir="ltr"
                >
                  {{ t('contact.phoneValue2') }}
                </a>
              </div>
            </div>
          </div>

          <div class="group bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="flex flex-col items-center text-center">
              <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 class="text-lg font-black text-white mb-3">واتساب</h3>
              <p class="text-green-50 text-sm mb-4">تواصل معنا مباشرة</p>
              <WhatsAppButton
                variant="primary"
                :text="t('cta.button')"
                message="مرحباً، أود الاستفسار عن منتجاتكم"
                class="bg-white hover:bg-cream-50 text-green-600 hover:text-green-700 font-bold text-sm px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div class="mt-10 text-center">
          <div class="inline-flex items-center gap-2 text-brown-700">
            <svg class="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold">نستقبل استفساراتكم على مدار الساعة</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import WhatsAppButton from './WhatsAppButton.vue'

const { t } = useI18n()
</script>
