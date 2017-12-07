import moment from 'moment'

import {
  addTarget
} from '../../action/index'
import { allTargetTypeUnits } from '../../store/initialState/index'
import { modifyTarget } from '../../action/modifyTarget'
import { getTargetById } from '../../util/index'

const getState = () => ReduxStore.getState()

/**
   * create a new target
   * @param {target} target 
   */
const createNewTarget = target => {
  if (target) {
    const tmpTarget = {
      ...target,
      createDate: moment(),
      isCompleted: false,
      completeDate: null
    }
    // add target
    ReduxStore.dispatch(addTarget(tmpTarget))
  }
}

// set target's repeating state to false
function setTargetRepeatingStateFalse(id) {
  ReduxStore.dispatch(modifyTarget({
    id,
    key: 'isRepeating',
    value: false
  }))
}


/**
 * update the start date, end date, minimum date and maximum date of target by target's type
 * @param {object} o 
 *     @param {string} id
 *     @param {number} type
 *     @param {moment} startDate
 *     @param {moment} endDate
 *     @param {moment} minDate
 *     @param {moment} maxDate
 */
const updateTargetDate = ({ id, type, startDate, endDate, minDate, maxDate }) => {
  const unit = allTargetTypeUnits.get(type)
  const beginOfNow = moment().startOf(type)

  const updateDate = (date, dateStr) => {
    const isMaxDate = dateStr === 'maxDate'
    const beginOfDate = moment(date).startOf(unit)

    // consider the speicail date: max date(have 1 unit excessively,for example, not 1st 23:59, it's 2st 00:00) 
    const num = isMaxDate ? 1 : 0

    const interval = Math.abs(beginOfNow.diff(beginOfDate, unit)) + num
    const resultDate = moment(date).add(interval, unit)
    ReduxStore.dispatch(modifyTarget({
      id,
      key: dateStr,
      value: resultDate
    }))
  }

  // update startDate
  updateDate(startDate, 'startDate')
  // update startDate
  updateDate(endDate, 'endDate')
  // update startDate
  updateDate(minDate, 'minDate')
  // update startDate
  updateDate(maxDate, 'maxDate')
}

/**
 * get minimum obsoleted date 
 * @param {moment} completeDate 
 * @param {number} type 
 */
const getObsoletedDate = (completeDate, type) => {
  const unit = allTargetTypeUnits.get(type)
  return moment(completeDate).endOf(unit)
}

/**
  * settle repeating target
  * @param {object} target 
  */
const settleRepeatingTarget = target => {
  const {
      id,
    type,
    isTiming,
    isCompleted
  } = target
  const completeDate = target.completeDate ? moment(target.completeDate) : null
  const startDate = target.startDate ? moment(target.startDate) : null
  const endDate = target.endDate ? moment(target.endDate) : null
  const minDate = target.minDate ? moment(target.minDate) : null
  const maxDate = target.maxDate ? moment(target.maxDate) : null

  const notTimingObsoletedDate = isCompleted ? getObsoletedDate(completeDate, type) : null
  const isTimingObsoletedDate = startDate ? getObsoletedDate(startDate, type) : null
  const obsoletedDate = isTiming ? isTimingObsoletedDate : notTimingObsoletedDate
  // { target isn't timing
  if (!isTiming) {
    // { target isn't completed
    // do nothing
    // } target isn't completed
    // { target is completed
    if (isCompleted) {
      // completed date is obsoleted
      const isCompletedDateObsoleted = moment().isAfter(obsoletedDate)
      if (isCompletedDateObsoleted) {
        // set target's repeating state to false
        setTargetRepeatingStateFalse(id)
        // create a new target
        createNewTarget(target)
      }
    }
    // } target is completed
  }
  // } target isn't timing

  // { target is timing
  if (isTiming) {
    // { target isn't completed
    if (!isCompleted) {
      //   completed date is obsoleted, update start date, end date, minimum date and maximum date
      const isCompletedDateObsoleted = moment().isAfter(obsoletedDate)
      if (isCompletedDateObsoleted) {
        //   update start date, end date, minimum date and maximum date
        updateTargetDate({
          id,
          type,
          startDate,
          endDate,
          minDate,
          maxDate
        })
      }
    }
    // } target isn't completed
    // { target is completed
    if (isCompleted) {
      // completed date is obsoleted
      const isCompletedDateObsoleted = moment().isAfter(obsoletedDate)
      if (isCompletedDateObsoleted) {
        // set target completed to uncompleted
        setTargetUnCompleted(id)
        //   update start date, end date, minimum date and maximum date
        updateTargetDate({
          id,
          type,
          startDate,
          endDate,
          minDate,
          maxDate
        })
      }
    }
    // } target is completed
  }
  // } target is timing
}


export default settleRepeatingTarget