export const defaultLanguage = 'en'

export const defaultHistory = '3'

export enum LocalStorageKeys {
  Onboarding = 'onboarding',
  ProofRequest = 'proofRequest',
  Requests = 'requests',
  Languages = 'langue',
  Histories = 'history',
}


const lengthOfhiddenAttributes = 10
const unicodeForBulletCharacter = '\u2022'
export const hiddenField = Array(lengthOfhiddenAttributes).fill(unicodeForBulletCharacter).join('')

export const attributeType = {
  ATTRIBUTE: 'Attribute',
  PREDICATE: 'Predicate',
}
