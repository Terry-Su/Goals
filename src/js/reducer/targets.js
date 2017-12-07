import { targetModel } from '../store/initialState/index'


const target = (state = { ...targetModel }, action) => {
  switch (action.type) {
    case 'ADD_TARGET':
      return {
        ...state,
        ...action.target
      }
    case 'MODIFY_TARGET':
      const { key, value } = action
      if (state) {
        return {
          ...state,
          [action.key]: action.value
        }
      }
    case 'DELETE_TARGET':
      if (state) {
        return {}
      }
  }
}

const targets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TARGET':
      return [
        ...state,
        target(undefined, action)
      ]
    case 'MODIFY_TARGET':
      return state.map(oneTarget => {
        if (oneTarget.id === action.id) {
          return target(oneTarget, action)
        }
        return oneTarget
      })
    case 'DELETE_TARGET':
      return state.map(oneTarget => {
        if (oneTarget.id === action.id) {
          return target(oneTarget, action)
        }
        return oneTarget
      })

  }
  return state
}


export default targets