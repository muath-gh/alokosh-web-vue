<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <Transition name="scale">
          <div
            v-if="isOpen"
            class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-cream rounded-2xl md:rounded-3xl shadow-gold-lg"
          >
            <button
              @click="closeModal"
              class="absolute top-3 left-3 md:top-4 md:left-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full glass-effect text-brown-900 hover:bg-gold-500 hover:text-white transition-all duration-300 hover:rotate-90"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
              <div class="relative">
                <div class="sticky top-0">
                  <div class="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-gold">
                    <img
                      :src="product.image"
                      :alt="product.nameAr"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div class="mt-4 md:mt-6 flex justify-center">
                    <WhatsAppButton
                      :message="whatsappMessage"
                      :text="t('modal.orderNow')"
                      :disabled="!canOrder"
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-4 md:space-y-6">
                <div>
                  <h2 class="text-2xl md:text-4xl font-bold text-gradient mb-2">
                    {{ product.nameAr }}
                  </h2>
                  <div class="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold">
                    {{ getCategoryName(product.category) }}
                  </div>
                </div>

                <div class="space-y-3 md:space-y-4">
                  <h3 class="text-lg md:text-xl font-bold text-brown-900">{{ t('modal.description') }}</h3>
                  <p class="text-brown-700 text-base md:text-lg leading-relaxed">
                    {{ product.descriptionAr }}
                  </p>
                </div>

                <div v-if="product.multi && product.options" class="space-y-3 md:space-y-4">
                  <ProductOptions
                    v-model="selectedOption"
                    :options="product.options"
                  />
                </div>

                <div class="space-y-3 md:space-y-4">
                  <h3 class="text-lg md:text-xl font-bold text-brown-900">{{ t('modal.features') }}</h3>
                  <ul class="space-y-3">
                    <li
                      v-for="(feature, index) in product.featuresAr"
                      :key="index"
                      class="flex items-center gap-3 text-brown-700"
                    >
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span class="text-base md:text-lg">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <div class="pt-4 md:pt-6 border-t-2 border-gold-200">
                  <h3 class="text-lg md:text-xl font-bold text-brown-900 mb-2 md:mb-3">{{ t('modal.howToOrder') }}</h3>
                  <p class="text-brown-700 text-base md:text-lg mb-4 md:mb-6">
                    {{ t('modal.orderInstructions') }}
                  </p>
                  <WhatsAppButton
                    :message="whatsappMessage"
                    :text="t('modal.orderNow')"
                    variant="glass"
                    :disabled="!canOrder"
                  />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Product, ProductOption } from '../types/product'
import WhatsAppButton from './WhatsAppButton.vue'
import ProductOptions from './ProductOptions.vue'

interface Props {
  isOpen: boolean
  product: Product
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const selectedOption = ref<ProductOption | null>(null)

const closeModal = () => {
  emit('close')
  selectedOption.value = null
}

const whatsappMessage = computed(() => {
  if (props.product.multi && selectedOption.value) {
    return `مرحباً، أريد طلب ${props.product.nameAr} - ${selectedOption.value.nameAr}`
  }
  return `مرحباً، أريد طلب ${props.product.nameAr}`
})

const canOrder = computed(() => {
  if (props.product.multi) {
    return selectedOption.value !== null
  }
  return true
})

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    selectedOption.value = null
  } else {
    document.body.style.overflow = ''
  }
})

const getCategoryName = (category: string) => {
  const categories: Record<string, string> = {
    tahini: 'طحينة',
    sesame: 'سمسم',
    specialty: 'منتجات مميزة'
  }
  return categories[category] || category
}
</script>
