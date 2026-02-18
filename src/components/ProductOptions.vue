<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg md:text-xl font-bold text-brown-900">اختر الحجم</h3>
      <div v-if="selectedOption" class="px-3 py-1 rounded-full bg-gradient-gold text-white text-sm font-semibold">
        {{ selectedOption.priceAr }}
      </div>
    </div>

    <div class="grid gap-3">
      <button
        v-for="option in options"
        :key="option.id"
        @click="selectOption(option)"
        class="relative group w-full"
        type="button"
      >
        <div
          class="flex items-center justify-between p-3 md:p-4 rounded-2xl border-2 transition-all duration-300"
          :class="[
            selectedOption?.id === option.id
              ? 'border-gold-500 bg-gold-50 shadow-lg scale-[1.02]'
              : 'border-brown-200 bg-white hover:border-gold-300 hover:bg-gold-25 hover:scale-[1.01]'
          ]"
        >
          <div class="flex items-center gap-3 md:gap-4">
            <div
              class="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0 rounded-full border-2 transition-all duration-300"
              :class="[
                selectedOption?.id === option.id
                  ? 'border-gold-500 bg-gold-500'
                  : 'border-brown-300 bg-white group-hover:border-gold-400'
              ]"
            >
              <div
                v-if="selectedOption?.id === option.id"
                class="absolute inset-0 flex items-center justify-center"
              >
                <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div class="text-right">
              <div class="text-base md:text-lg font-bold text-brown-900">
                {{ option.nameAr }}
              </div>
              <div class="text-xs md:text-sm text-brown-600">
                {{ option.name }}
              </div>
            </div>
          </div>

          <div class="flex flex-col items-end gap-0.5 md:gap-1">
            <div
              class="text-lg md:text-xl font-bold transition-colors"
              :class="[
                selectedOption?.id === option.id
                  ? 'text-gold-700'
                  : 'text-brown-700 group-hover:text-gold-600'
              ]"
            >
              {{ option.priceAr }}
            </div>
            <div class="text-xs text-brown-500">
              {{ option.price }}
            </div>
          </div>
        </div>

        <div
          v-if="selectedOption?.id === option.id"
          class="absolute -inset-1 bg-gradient-gold rounded-2xl blur-lg opacity-30 -z-10 animate-pulse"
        ></div>
      </button>
    </div>

    <div
      v-if="!selectedOption"
      class="mt-4 p-3 rounded-xl bg-orange-50 border border-orange-200"
    >
      <div class="flex items-start gap-2 text-orange-700">
        <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-sm">الرجاء اختيار الحجم المناسب قبل الطلب</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ProductOption } from '../types/product'

interface Props {
  options: ProductOption[]
  modelValue?: ProductOption | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: ProductOption | null]
}>()

const selectedOption = ref<ProductOption | null>(props.modelValue || null)

watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue || null
})

const selectOption = (option: ProductOption) => {
  selectedOption.value = option
  emit('update:modelValue', option)
}
</script>
