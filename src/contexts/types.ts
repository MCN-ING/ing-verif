import {ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'

interface Attribute {
  [key: string]: ProofAttributeInfo
}

interface Predicate {
  [key: string]: ProofPredicateInfo
}

export interface Request {
  title: string
  description: string
  attributes: Attribute
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
