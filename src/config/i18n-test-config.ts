import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import commonEN from '../i18n/en/common.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    useSuspense: true,
  },

  resources: {
    en: {
      common: commonEN,
    },
  },
})

export default i18n
