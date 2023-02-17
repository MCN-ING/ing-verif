import AsyncStorage from '@react-native-async-storage/async-storage'

import {LocalStorageKeys} from '../../constants'
import {Onboarding as OnboardingState, State, Request} from '../types'

enum OnboardingDispatchAction {
  DID_AGREE_TO_TERMS = 'onboarding/didAgreeToTerms',
}

enum ProofRequestDispatchAction {
  PROOF_REQUEST_CHANGED = 'proofRequest/update',
}

export type DispatchAction = OnboardingDispatchAction | ProofRequestDispatchAction

export const DispatchAction = {
  ...OnboardingDispatchAction,
  ...ProofRequestDispatchAction,
}

export interface ReducerAction<R> {
  type: R
  payload?: Request
}

export const reducer = <S extends State>(state: S, action: ReducerAction<DispatchAction>): S => {
  switch (action.type) {
    case OnboardingDispatchAction.DID_AGREE_TO_TERMS: {
      const onboarding: OnboardingState = {
        ...state.onboarding,
        didAgreeToTerms: true,
      }
      const newState = {
        ...state,
        onboarding,
      }
      AsyncStorage.setItem(LocalStorageKeys.Onboarding, JSON.stringify(newState.onboarding))
      return newState
    }
    case ProofRequestDispatchAction.PROOF_REQUEST_CHANGED: {
      const proofRequest = action?.payload

      const newState = {
        ...state,
        proofRequest,
      }
      AsyncStorage.setItem(LocalStorageKeys.ProofRequest, JSON.stringify(newState.proofRequest))
      return newState
    }
    default:
      return state
  }
}

export default reducer
