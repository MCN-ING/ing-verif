export const defaultLanguage = 'en'

export enum LocalStorageKeys {
  Onboarding = 'onboarding',
  ProofRequest = 'proofRequest',
}

const lengthOfhiddenAttributes = 10
const unicodeForBulletCharacter = '\u2022'
export const hiddenField = Array(lengthOfhiddenAttributes).fill(unicodeForBulletCharacter).join('')

export const attributeType = {
  ATTRIBUTE: 'Attribute',
  PREDICATE: 'Predicate',
}
