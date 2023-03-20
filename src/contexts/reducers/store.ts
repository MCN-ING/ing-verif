import AsyncStorage from '@react-native-async-storage/async-storage'

import {LocalStorageKeys} from '../../constants'
import {Onboarding as OnboardingState, State, Request} from '../types'

enum OnboardingDispatchAction {
  DID_AGREE_TO_TERMS = 'onboarding/didAgreeToTerms',
}

enum ProofRequestDispatchAction {
  PROOF_REQUEST_CHANGED = 'proofRequest/update',
}

enum RequestDispatchAction {
  DELETE_REQUEST = 'request/delete',
  SET_REQUESTS = 'requests/set',
  ADD_REQUEST = 'request/add',
  UPDATE_REQUEST = 'request/edit',
}

enum UpdateSettingState {
  UPDATE_LANGUAGE = 'langue',
  UPDATE_HISTORY = 'history',
}

export type DispatchAction = OnboardingDispatchAction | ProofRequestDispatchAction | RequestDispatchAction | UpdateSettingState

export const DispatchAction = {
  ...OnboardingDispatchAction,
  ...ProofRequestDispatchAction,
  ...RequestDispatchAction,
  ...UpdateSettingState,
}

export interface ReducerAction<R> {
  type: R
  payload?: Request | Request[] | string
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
      const proofRequest = action.payload

      const newState = {
        ...state,
        proofRequest: proofRequest,
      }
      if (proofRequest) {
        AsyncStorage.setItem(LocalStorageKeys.ProofRequest, JSON.stringify(newState.proofRequest))
      } else {
        AsyncStorage.removeItem(LocalStorageKeys.ProofRequest)
      }
      return newState
    }
    case RequestDispatchAction.SET_REQUESTS: {
      const requests = action.payload
      const newState = {
        ...state,
        requests,
      }
      return newState
    }
    case RequestDispatchAction.ADD_REQUEST: {
      const request = action.payload
      const requests = [request, ...state.requests]
      const newState = {
        ...state,
        requests: requests,
        proofRequest: request,
      }
      AsyncStorage.setItem(LocalStorageKeys.Requests, JSON.stringify(newState.requests))
      AsyncStorage.setItem(LocalStorageKeys.ProofRequest, JSON.stringify(newState.proofRequest))
      return newState
    }
    case RequestDispatchAction.DELETE_REQUEST: {
      const requestId = action.payload
      const requestsFiltered: Request[] = state.requests.filter((req) => req.id !== requestId)
      const newState = {
        ...state,
        requests: requestsFiltered,
        proofRequest: state.proofRequest?.id === requestId ? undefined : state.proofRequest,
      }
      if (newState.proofRequest === undefined) {
        AsyncStorage.removeItem(LocalStorageKeys.ProofRequest)
      }
      AsyncStorage.setItem(LocalStorageKeys.Requests, JSON.stringify(newState.requests))
      return newState
    }
    case UpdateSettingState.UPDATE_LANGUAGE: {
      const language = action.payload
      const newState = {
        ...state,
        langueApp: language,
      }
      return newState
    }
    case UpdateSettingState.UPDATE_HISTORY: {
      const history = action.payload
      const newState = {
        ...state,
        history: history,
      }
      return newState
    }
    case RequestDispatchAction.UPDATE_REQUEST: {
      const request = action.payload as Request
      const requestIndex = state.requests.findIndex((req) => req.id === request.id)
      const newRequests = [...state.requests]
      newRequests[requestIndex] = request
      AsyncStorage.setItem(LocalStorageKeys.Requests, JSON.stringify(newRequests))
      return {
        ...state,
        requests: newRequests,
      }
    }
    default:
      return state
  }
}

export default reducer
