import {PredicateType, ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'

interface Attribute {
  name: ProofAttributeInfo
}

interface Predicate {
  age: ProofPredicateInfo
}

export interface Request {
  title: string
  description: string
  attributes: Attribute
  predicates: Predicate
}

export interface Onboarding {
  didAgreeToTerms: boolean
}

export interface State {
  onboarding: Onboarding
  proofRequest?: Request
  requests: Request[]
}
