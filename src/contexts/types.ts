import {ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'

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
}
