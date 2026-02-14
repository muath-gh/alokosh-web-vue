<template>
  <div
    ref="cardRef"
    class="product-card group relative bg-white rounded-3xl overflow-hidden shadow-gold hover:shadow-gold-lg transition-all duration-500 cursor-pointer"
    :class="{ 'animate-fade-in-up': isVisible }"
    @click="$emit('click')"
  >
    <div class="relative h-64 md:h-80 overflow-hidden">
      <img
        :src="product.image"
        :alt="product.nameAr"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

      <div class="absolute top-4 right-4 px-4 py-2 rounded-full glass-effect text-brown-900 text-sm font-bold">
        {{ getCategoryName(product.category) }}
      </div>

      <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">
          {{ product.nameAr }}
        </h3>
        <p class="text-cream-100 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {{ product.descriptionAr }}
        </p>
      </div>
    </div>

    <div class="p-6">
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(feature, index) in product.featuresAr"
          :key="index"
          class="px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs md:text-sm font-semibold"
        >
          {{ feature }}
        </span>
      </div>

      <button
        class="w-full py-3 px-6 rounded-full bg-gradient-gold text-white font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
      >
        <span>{{ t('products.learnMore') }}</span>
        <svg class="w-5 h-5 transform -rotate-180 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>

    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="absolute top-0 right-0 w-32 h-32 bg-gold-400/20 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Product } from '../types/product'

interface Props {
  product: Product
}

defineProps<Props>()
defineEmits<{
  click: []
}>()

const { t } = useI18n()
const cardRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  if (cardRef.value) {
    observer.observe(cardRef.value)
  }
})

const getCategoryName = (category: string) => {
  const categories: Record<string, string> = {
    tahini: 'طحينة',
    sesame: 'سمسم',
    specialty: 'مميز'
  }
  return categories[category] || category
}
</script>

<style scoped>
.product-card {
  transform-style: preserve-3d;
}

.product-card:hover {
  transform: translateY(-8px);
}
</style>
