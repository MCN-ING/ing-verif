import {PredicateType, ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'

export type ATTRIBUTE = 'Attribute'
export type PREDICATE = 'Predicate'

interface Attribute {
  [key: string]: ProofAttributeInfo
}

export interface Predicate {
  [key: string]: ProofPredicateInfo
}

export interface Request {
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
}

export type AttributeDetails = {
  [key: string]: {
    title: string
    type: string
    operator?: PredicateType
    defaultValue?: number
  }
}

export type specificPredicatesDetails = {
  type: PREDICATE
  value: number
  operator: PredicateType
}

export type specificAttributesDetails = {
  type: ATTRIBUTE
}

export type lightAttributeDetails = {
  id: string
  title: string
  raw_name: string

  specific?: specificPredicatesDetails | specificAttributesDetails
}
