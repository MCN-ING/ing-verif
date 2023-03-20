import { PredicateType, ProofAttributeInfo, ProofPredicateInfo } from '@aries-framework/core'

export type ATTRIBUTE = 'Attribute'
export type PREDICATE = 'Predicate'

export interface Attribute {
  [key: string]: ProofAttributeInfo
}

export interface Predicate {
  [key: string]: ProofPredicateInfo
}

export interface Request {
  id: string
  title: string
  description: string
  attributes?: Attribute
  predicates?: Predicate
}

export interface Onboarding {
  didAgreeToTerms: boolean
}

export interface State {
  onboarding: Onboarding
  proofRequest?: Request
  requests: Request[]
  langueApp?: String
  history?: String
}

export type AttributeDetails = {
  [key: string]: {
    title: string
    type: string
    operator?: PredicateType
    defaultValue?: number
  }
}

export type SpecificPredicatesDetails = {
  type: PREDICATE
  value: number
  operator: PredicateType
}

export type SpecificAttributesDetails = {
  type: ATTRIBUTE
}

export type lightAttributeDetails = {
  id: string
  title: string
  raw_name: string

  specific?: SpecificPredicatesDetails | SpecificAttributesDetails
}

export interface Setting {
  id: string
  title: string
  route: string
}
export interface AppSetting {
  id: string
  title: string
  route?: string
  name?: string
  defaultValue?: string
}

export interface Languages {
  code: string
  label: string
}
export interface Historic {
  id: string
  label: string
}

