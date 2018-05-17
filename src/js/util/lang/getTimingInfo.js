import moment from 'moment'
import { isNumber, isString, isNaN } from 'lodash'

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
    switch (currentLanguage) {
      case 'zh':
        return '定时'
      case 'en':
        return 'Timing'
    }
  }


  if (isBefore) {
    const s = moment().to(startDate, true)
    switch (currentLanguage) {
      case 'zh':
        return s.replace(/ /g, "") + '后开始'
      case 'en':
        return 'Start after ' + convertCnTimeStringToEn(s)
    }
  }

  if (isDoing) {
    const s = moment().to(endDate, true)
    switch (currentLanguage) {
      case 'zh':
        return s.replace(/ /g, "") + '后结束'
      case 'en':
        return 'End after ' + convertCnTimeStringToEn(s)
    }
  }

  if (isAfter) {
    const s = moment().to(endDate, true)
    switch (currentLanguage) {
      case 'zh':
        return '超时' + s.replace(/ /g, "")
      case 'en':
        return 'Timeout: ' + convertCnTimeStringToEn(s)
    }
  }
}


export default getTimingInfo


function convertCnTimeStringToEn(s) {
  const potentialNumberString = s.replace('秒', '').replace('分钟', '').replace('小时', '').replace('天', '').replace('月', '').replace('年', '')
  const potentialNumber = parseInt(potentialNumberString)
  const isNaNNumber = isNaN(potentialNumber)
  if (isNaNNumber) {
    return s
  }
  if (!isNaNNumber) {
    if (potentialNumber === 1) {
      return potentialNumber + s.replace(potentialNumberString, '   ').replace('秒', 'second').replace('分钟', 'minute').replace('小时', 'hour').replace('天', 'day').replace('月', 'month').replace('年', 'year')
    } else {
      return potentialNumber + s.replace(potentialNumberString, '  ').replace('秒', 'seconds').replace('分钟', 'minutes').replace('小时', 'hours').replace('天', 'days').replace('月', 'months').replace('年', 'years')
    }
  }
}