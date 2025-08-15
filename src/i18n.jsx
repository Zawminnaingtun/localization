import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import mm from './localization/myanmar/TranslateMyanmar.json'
import en from './localization/english/TranslateEnglish.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        mm: {
            translation: mm
        }
    },
    // lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18n