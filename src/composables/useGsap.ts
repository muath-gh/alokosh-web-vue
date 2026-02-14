import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap() {
  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  const fadeIn = (element: Ref<HTMLElement | null>, delay = 0) => {
    onMounted(() => {
      if (element.value) {
        gsap.from(element.value, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay,
          ease: 'power3.out'
        })
      }
    })
  }

  const scaleIn = (element: Ref<HTMLElement | null>, delay = 0) => {
    onMounted(() => {
      if (element.value) {
        gsap.from(element.value, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          delay,
          ease: 'back.out(1.7)'
        })
      }
    })
  }

  const scrollTriggerFade = (element: Ref<HTMLElement | null>) => {
    onMounted(() => {
      if (element.value) {
        gsap.from(element.value, {
          scrollTrigger: {
            trigger: element.value,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out'
        })
      }
    })
  }

  return {
    fadeIn,
    scaleIn,
    scrollTriggerFade,
    gsap,
    ScrollTrigger
  }
}
