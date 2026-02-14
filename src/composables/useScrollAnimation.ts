import { ref } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }

  const observe = (element: Element) => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })

    observer.observe(element)

    return () => observer.disconnect()
  }

  return {
    isVisible,
    observe
  }
}
