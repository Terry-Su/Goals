import { settingModel } from '../store/initialState/index'


const setting = (state = { ...settingModel }, action) => {
  switch (action.type) {
    case 'MODIFY_SETTING':
      const { key, value } = action
      return {
        ...state,
        [action.key]: action.value
      }
  }
  return state
}

export default setting