import React, {createContext, Dispatch, useContext, useReducer} from 'react'

import _defaultReducer, {ReducerAction} from './reducers/store'
import {State} from './types'

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

  return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
}

export const useStore = <S extends State>(): [S, Dispatch<ReducerAction<any>>] => {
  const context = useContext(StoreContext)

  return context as unknown as [S, Dispatch<ReducerAction<any>>]
}
