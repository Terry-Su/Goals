import { modifyInnerState_shouldShowCaveat } from '../action/modifyInnerState'

import { showCaveat } from './index'
import Lang from './lang/index'


const validator = {
  // validate the target
  target(target) {
    const t = target
    const isNameInValid = t.name === ''
    // if name is invalid, show caveat
    if (isNameInValid) {
      showCaveat(Lang.CAVEAT_INFOPANEL_NAME_EMPRTY)
      return false
    } else {
     return true 
    }
  },
  // validate dates of time selector
  timeSelector(startDate, endDate) {
    const isValid = startDate.isSameOrBefore(endDate)
    // if validation is failed, show caveat
    if (!isValid) {
      showCaveat(Lang.CAVEAT_TIMEPICER_START_TIME_IS_AFTER_END_TIME)
    }
    return isValid
  }
}


export default validator