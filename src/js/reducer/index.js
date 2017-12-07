import { getLocalStore } from '../store/localStore'
import targets from './targets.js'
import setting from './setting.js'
import innerState from './innerState.js'


const localStore = getLocalStore() || {}

const targetsManagement = (state = localStore, action) => {
  return {
    targets: targets(state.targets, action),
    setting: setting(state.setting, action),    
    innerState: innerState(state.innerState, action)
  }
}

export default targetsManagement