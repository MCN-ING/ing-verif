import AsyncStorage from '@react-native-async-storage/async-storage'
import {t} from 'i18next'
import React, {createContext, Dispatch, useContext, useEffect, useReducer} from 'react'

import {RequestsList} from '../assets/RequestsList'
import {defaultHistory, defaultLanguage, LocalStorageKeys} from '../constants'

import _defaultReducer, {DispatchAction, ReducerAction} from './reducers/store'
import {Request, State} from './types'

type Reducer = <S extends State>(state: S, action: ReducerAction<any>) => S

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: State
  reducer?: Reducer
}

export const defaultState: State = {
  onboarding: {
    didAgreeToTerms: false,
  },
  proofRequest: undefined,
  requests: RequestsList(t),
  language: defaultLanguage,
  history: defaultHistory,
}

export const StoreContext = createContext<[State, Dispatch<ReducerAction<any>>]>([
  defaultState,
  () => {
    return
  },
])

export const defaultReducer = _defaultReducer

export const StoreProvider: React.FC<StoreProviderProps> = ({children, initialState, reducer}) => {
  const _reducer = reducer ?? defaultReducer
  const _state = initialState ?? defaultState
  const [state, dispatch] = useReducer(_reducer, _state)

  useEffect(() => {
    const getAgreeTerms = async () => {
      const onboarding = await AsyncStorage.getItem(LocalStorageKeys.Onboarding)
      if (onboarding) {
        dispatch({
          type: DispatchAction.DID_AGREE_TO_TERMS,
        })
      }
    }
    getAgreeTerms()
  }, [])

  useEffect(() => {
    const getProofRequest = async () => {
      const proofRequestJSON = await AsyncStorage.getItem(LocalStorageKeys.ProofRequest)
      if (proofRequestJSON) {
        const request: Request = JSON.parse(proofRequestJSON)
        dispatch({
          type: DispatchAction.PROOF_REQUEST_CHANGED,
          payload: request,
        })
      }
    }
    getProofRequest()
  }, [])

  useEffect(() => {
    const getRequests = async () => {
      const requestsJSON = await AsyncStorage.getItem(LocalStorageKeys.Requests)
      if (requestsJSON) {
        const requests: Request[] = JSON.parse(requestsJSON)
        dispatch({
          type: DispatchAction.SET_REQUESTS,
          payload: requests,
        })
      }
    }
    getRequests()
  }, [])

  useEffect(() => {
    const getLanguage = async () => {
      const language = await AsyncStorage.getItem(LocalStorageKeys.Language)
      if (language) {
        dispatch({
          type: DispatchAction.UPDATE_LANGUAGE,
          payload: language,
        })
      }
    }
    getLanguage()
  }, [])

  useEffect(() => {
    const getHistory = async () => {
      const history = await AsyncStorage.getItem(LocalStorageKeys.History)
      if (history) {
        dispatch({
          type: DispatchAction.UPDATE_HISTORY,
          payload: history
        })
      }
    }
    getHistory()
    
  }, [])

  return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
}

export const useStore = <S extends State>(): [S, Dispatch<ReducerAction<any>>] => {
  const context = useContext(StoreContext)

  return context as unknown as [S, Dispatch<ReducerAction<any>>]
}
