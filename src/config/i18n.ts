import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import commonEN from '../i18n/en/common.json'
import commonSV from '../i18n/sv/common.json'

export const defaultNS = 'common'
export const resources = {
  en: {
    common: commonEN,
  },
  sv: {
    common: commonSV,
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
    ns: ['common'],
    defaultNS,
    resources,
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
