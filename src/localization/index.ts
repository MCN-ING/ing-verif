import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

import {defaultLanguage} from '../constants'

import en from './en'
import fr from './fr'

export type Translation = typeof en

type TranslationResources = {
  [key: string]: any
}

export const translationResources: TranslationResources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
}

export enum Locales {
  en = 'en',
  fr = 'fr',
}

const currentLanguage = i18n.language

const initLanguages = (resources: TranslationResources) => {
  const availableLanguages = Object.keys(resources)
  const bestLanguageMatch = RNLocalize.findBestAvailableLanguage(availableLanguages)
  let translationToUse = defaultLanguage

  if (bestLanguageMatch && availableLanguages.includes(bestLanguageMatch.languageTag)) {
    translationToUse = bestLanguageMatch.languageTag
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: translationToUse,
    fallbackLng: defaultLanguage,
    resources,
  })
}

//** Fetch user preference language from the AsyncStorage and set if require  */
const initStoredLanguage = async () => {
  const langId = await AsyncStorage.getItem('language')
  if (langId && langId !== currentLanguage) {
    await i18n.changeLanguage(langId)
  }
}

//** Store language into the AsyncStorage  */
const storeLanguage = async (id: string) => {
  await AsyncStorage.setItem('language', id)
}

const getCurrentLanguage = (): string => {
  return i18n.language
}

export {i18n, initStoredLanguage, initLanguages, storeLanguage, currentLanguage, getCurrentLanguage}
