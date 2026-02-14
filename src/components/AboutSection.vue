<template>
  <section class="relative py-20 md:py-32 bg-gradient-to-br from-cream-100 via-white to-gold-50 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="relative order-2 lg:order-1">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-gold rounded-3xl transform rotate-6 opacity-20"></div>
            <div class="relative rounded-3xl overflow-hidden shadow-gold-lg">
              <img
                src="https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="قصتنا"
                class="w-full h-auto"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-8">
            <div class="bg-white rounded-2xl p-6 shadow-gold text-center hover:scale-105 transition-transform duration-300">
              <div class="text-3xl mb-2">🌱</div>
              <div class="text-sm font-bold text-brown-900">{{ t('about.natural') }}</div>
              <div class="text-xs text-brown-700 mt-1">{{ t('about.naturalDesc') }}</div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-gold text-center hover:scale-105 transition-transform duration-300">
              <div class="text-3xl mb-2">⭐</div>
              <div class="text-sm font-bold text-brown-900">{{ t('about.quality') }}</div>
              <div class="text-xs text-brown-700 mt-1">{{ t('about.qualityDesc') }}</div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-gold text-center hover:scale-105 transition-transform duration-300">
              <div class="text-3xl mb-2">🏺</div>
              <div class="text-sm font-bold text-brown-900">{{ t('about.traditional') }}</div>
              <div class="text-xs text-brown-700 mt-1">{{ t('about.traditionalDesc') }}</div>
            </div>
          </div>
        </div>

        <div class="space-y-8 order-1 lg:order-2 text-center lg:text-right">
          <div class="space-y-4">
            <div class="inline-block px-6 py-2 rounded-full bg-gold-100 text-gold-700 font-bold text-sm">
              {{ t('about.subtitle') }}
            </div>
            <h2 class="text-4xl md:text-6xl font-black text-gradient">
              {{ t('about.title') }}
            </h2>
          </div>

          <p class="text-lg md:text-xl text-brown-700 leading-relaxed">
            {{ t('about.story') }}
          </p>

          <div class="space-y-4">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-gold"
              :class="isRTL ? 'flex-row-reverse text-right' : 'text-left'"
            >
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-white text-2xl">
                {{ feature.icon }}
              </div>
              <div>
                <h3 class="text-xl font-bold text-brown-900 mb-1">{{ feature.title }}</h3>
                <p class="text-brown-700">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <WhatsAppButton
              :text="t('cta.button')"
              message="مرحباً، أريد معرفة المزيد عن منتجاتكم"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import WhatsAppButton from './WhatsAppButton.vue'

const { t } = useI18n()

const isRTL = computed(() => true)

const features = computed(() => [
  {
    icon: '✓',
    title: 'جودة مضمونة',
    description: 'نختار أفضل أنواع السمسم بعناية فائقة'
  },
  {
    icon: '🌿',
    title: 'مكونات طبيعية',
    description: 'بدون أي مواد حافظة أو إضافات صناعية'
  },
  {
    icon: '🔥',
    title: 'تحميص تقليدي',
    description: 'نستخدم طرق التحميص التقليدية للحفاظ على النكهة'
  },
  {
    icon: '💚',
    title: 'صحي ومغذي',
    description: 'غني بالبروتين والفيتامينات والمعادن'
  }
])
</script>
