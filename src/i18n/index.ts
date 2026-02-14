import { createI18n } from 'vue-i18n'
import ar from './locales/ar.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ar',
  fallbackLocale: 'ar',
  messages: {
    ar,
  },
})

export default i18n
