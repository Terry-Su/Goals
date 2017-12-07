import moment from 'moment'

import { getLanguage } from '../../store/localStore'



/**
 * get timing info
 * @param {moment} startDate
 * @param {moment} endDate
 */
const getTimingInfo = (startDate, endDate) => {
  const currentLanguage = getLanguage()

  const isBefore = moment().isSameOrBefore(startDate);
  const isDoing = moment().isAfter(startDate) && moment().isSameOrBefore(endDate);
  const isAfter = moment().isAfter(endDate);
  const currentRoute = ReduxStore.getState().innerState.route
  const isTimeline = currentRoute === 4
  const isRecycle = currentRoute === 5


  if (isTimeline || isRecycle) {
    switch(currentLanguage) {
      case 'zh':
        return '定时'
      case 'en':
        return 'Timing'
    }
  }


  if (isBefore) {
    const s = moment().to(startDate, true)
    switch(currentLanguage) {
      case 'zh':
        return s.replace(/ /g, "") + '后开始'
      case 'en':
        return 'Start after ' + s
    }
  }

  if (isDoing) {
    const s = moment().to(endDate, true)
    switch(currentLanguage) {
      case 'zh':
        return s.replace(/ /g, "") + '后结束'
      case 'en':
        return 'End after ' + s
    }
  }

  if (isAfter) {
    const s = moment().to(endDate, true)
    switch(currentLanguage) {
      case 'zh':
        return '超时' + s.replace(/ /g, "")
      case 'en':
        return 'Timeout: ' + s
    }
  }
}


export default getTimingInfo