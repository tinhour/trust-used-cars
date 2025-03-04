import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import jaTranslation from './locales/ja/translation.json';
import thTranslation from './locales/th/translation.json';
import viTranslation from './locales/vi/translation.json';
import idTranslation from './locales/id/translation.json';
import msTranslation from './locales/ms/translation.json';
import zhTranslation from './locales/zh/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ja: {
        translation: jaTranslation
      },
      th: {
        translation: thTranslation
      },
      vi: {
        translation: viTranslation
      },
      id: {
        translation: idTranslation
      },
      ms: {
        translation: msTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;