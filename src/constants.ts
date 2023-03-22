export const defaultLanguage = 'en'

export enum LocalStorageKeys {
  Onboarding = 'onboarding',
  ProofRequest = 'proofRequest',
  Requests = 'requests',
  Language = 'language',
  History = 'history',
}

const lengthOfhiddenAttributes = 10
const unicodeForBulletCharacter = '\u2022'
export const hiddenField = Array(lengthOfhiddenAttributes).fill(unicodeForBulletCharacter).join('')

export const attributeType = {
  ATTRIBUTE: 'Attribute',
  PREDICATE: 'Predicate',
}

export const periodType = {
  NONE: 'NONE',
  WEEK: 'WEEK',
  HALF_MONTH: '15DAYS',
  MONTH: 'MONTH',
  QUARTER: '3MONTHS',
  YEAR: 'YEAR',
  ALL: 'ALL',
}

export const defaultHistory = periodType.MONTH
