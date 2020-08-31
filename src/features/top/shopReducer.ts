import { createContext } from 'preact'

const INPUT_NAME = 'INPUT_NAME'

const actionTypes = {
  INPUT_NAME,
} as const

const inputName = (payload: string) => ({
  type: actionTypes.INPUT_NAME,
  payload,
})

export const actions = {
  inputName,
}

export type ActionType = ReturnType<typeof inputName>

export type StoreType = {
  name: string
}

export const initialState: StoreType = {
  name: '',
}

export default (state: StoreType, action: ActionType): StoreType => {
  switch (action.type) {
    case actionTypes.INPUT_NAME:
      return {
        ...state,
        name: action.payload,
      }
    default:
      throw new Error('unexpected action type')
  }
}

export const ShopStateContext = createContext<{ state: StoreType }>({
  state: initialState,
})

export const ShopDispatchContext = createContext<{
  dispatch: (action: ActionType) => void
}>({
  dispatch: () => {},
})
