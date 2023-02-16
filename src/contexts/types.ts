export interface Request {
  title: string
  description: string
  attributes: any
  predicates: any
}

export interface Onboarding {
  didAgreeToTerms: boolean
}

export interface State {
  onboarding: Onboarding
  proofRequest: undefined | Request
}
