import zh from './dictionaries/zh.json'
import en from './dictionaries/en.json'

export type Locale = 'zh' | 'en'

const dictionaries = {
  zh,
  en,
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.zh
}

export type Dictionary = typeof zh
