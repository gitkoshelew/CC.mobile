import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './public/locales/en.json';
import ru from './public/locales/ru.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en,
    ru,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
