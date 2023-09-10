import i18n from 'i18next';
import i18nBackend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

const currentHost:string =
  import.meta.env.MODE === "development"
    ? 'http://localhost:5173'
    : 'https://www.deltay.at'

const currentLang = ():string => {
  const userLanguage = navigator.language
  return userLanguage.split('-')[0]
}

i18n.use(i18nBackend).use(initReactI18next).init({
  fallbackLng: 'en',
  lng: currentLang(),
  interpolation: {
    escapeValue: false,
  },

  backend: {
    loadPath: `${currentHost}/i18n/{{lng}}.json`,
  },
})

export default i18n