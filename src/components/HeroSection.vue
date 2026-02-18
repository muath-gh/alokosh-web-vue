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

        <div class="relative hidden lg:block h-[700px]">
          <div class="relative w-full h-full perspective-1000">
            <div class="absolute inset-0 bg-gradient-gold rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>

            <div ref="imagesContainer" class="relative w-full h-full">
              <div
                ref="image1"
                class="absolute top-0 right-0 w-[380px] h-[380px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                style="transform-style: preserve-3d;"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-orange-400/20 z-10"></div>
                <img
                  src="/alokosh1.png"
                  alt="طحينة"
                  class="w-full h-full object-contain p-4 bg-gradient-to-br from-amber-50 to-orange-50"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-20"></div>
              </div>

              <div
                ref="image2"
                class="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                style="transform-style: preserve-3d;"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-orange-400/20 z-10"></div>
                <img
                  src="/alokosh2.png"
                  alt="سمسم"
                  class="w-full h-full object-contain p-4 bg-gradient-to-br from-amber-50 to-orange-50"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-20"></div>
              </div>

              <div
                ref="image3"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm z-10"
                style="transform-style: preserve-3d;"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-orange-400/30 z-10"></div>
                <img
                  src="/alokosh3.png"
                  alt="منتجات طبيعية"
                  class="w-full h-full object-contain p-4 bg-gradient-to-br from-amber-50 to-orange-50"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-20"></div>
                <div class="absolute -inset-1 bg-gradient-gold rounded-[36px] opacity-50 blur-xl -z-10"></div>
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
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import WhatsAppButton from './WhatsAppButton.vue'

const { t } = useI18n()

const image1 = ref<HTMLElement>()
const image2 = ref<HTMLElement>()
const image3 = ref<HTMLElement>()
const imagesContainer = ref<HTMLElement>()

const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (!image1.value || !image2.value || !image3.value) return

  const tl = gsap.timeline()

  tl.from(image1.value!, {
    duration: 1.2,
    opacity: 0,
    scale: 0.5,
    rotateY: -90,
    rotateZ: 12,
    x: 100,
    y: -100,
    ease: 'back.out(1.7)',
  })
  .from(image2.value!, {
    duration: 1.2,
    opacity: 0,
    rotateY: 90,
    rotateZ: -12,
    x: -100,
    y: 100,
    ease: 'back.out(1.7)',
  }, '-=0.8')
  .from(image3.value!, {
    duration: 1.4,
    opacity: 0,
    scale: 0.3,
    rotateZ: 180,
    ease: 'elastic.out(1, 0.5)',
  }, '-=0.6')

  gsap.to(image1.value!, {
    y: '-=20',
    rotateZ: 3,
    duration: 3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  })

  gsap.to(image2.value!, {
    y: '+=25',
    rotateZ: -3,
    duration: 3.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.5,
  })

gsap.to(image3.value!, {
  y: '-=15',
  duration: 4,
  ease: 'sine.inOut',
  repeat: -1,
  yoyo: true,
  delay: 1,
})

  if (imagesContainer.value) {
    const img1 = image1.value!
    const img2 = image2.value!
    const img3 = image3.value!

    imagesContainer.value.addEventListener('mousemove', (e) => {
      const rect = imagesContainer.value!.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height

      gsap.to(img1, {
        rotateY: x * 15,
        rotateX: -y * 15,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(img2, {
        rotateY: x * 12,
        rotateX: -y * 12,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(img3, {
        rotateY: x * 10,
        rotateX: -y * 10,
        duration: 0.5,
        ease: 'power2.out',
      })
    })

    imagesContainer.value.addEventListener('mouseleave', () => {
      gsap.to([img1, img2, img3], {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    })
  }
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
