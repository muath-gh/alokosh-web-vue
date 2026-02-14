<template>
  <section id="products" class="relative py-20 md:py-32 bg-cream-50 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16 space-y-4 animate-fade-in-up">
        <h2 class="text-4xl md:text-6xl font-black text-gradient">
          {{ t('products.title') }}
        </h2>
        <p class="text-xl md:text-2xl text-brown-700 max-w-3xl mx-auto">
          {{ t('products.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <ProductCard
       v-for="(product, index) in products"
          :key="product.id"
          :product="product"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openProductModal(product)"
        />
      </div>

      <div class="text-center mt-6">

  <!-- <button
    @click="toggleProducts"
    class="px-8 py-3 rounded-full font-bold text-lg
           bg-gradient-to-r from-gold-400 to-orange-400
           text-white shadow-lg
           cursor-pointer
           hover:scale-105 hover:shadow-xl
           transition-all duration-300
           disabled:opacity-60 disabled:cursor-not-allowed"
    :disabled="loadingMore"
  >

    <span v-if="loadingMore" class="flex items-center gap-2 justify-center">
      <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      {{ t('products.loading') }}
    </span>

    <span v-else>
      {{ showAll ? t('products.showLess') : t('products.showMore') }}
    </span>

  </button> -->

</div>


      <div class="text-center mt-6">
        <WhatsAppButton
          :text="t('products.order')"
          message="مرحباً، أريد الاستفسار عن جميع منتجاتكم"
        />
      </div>
    </div>

    <ProductModal
      :is-open="isModalOpen"
      :product="selectedProduct"
      @close="closeProductModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { products } from '../data/products'
import type { Product } from '../types/product'
import ProductCard from './ProductCard.vue'
import ProductModal from './ProductModal.vue'
import WhatsAppButton from './WhatsAppButton.vue'

const { t } = useI18n()

const isModalOpen = ref(false)
const selectedProduct = ref<Product>(products[0])

const openProductModal = (product: Product) => {
  selectedProduct.value = product
  isModalOpen.value = true
}

const closeProductModal = () => {
  isModalOpen.value = false
}
</script>
