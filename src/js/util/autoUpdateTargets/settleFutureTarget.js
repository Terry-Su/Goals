import moment from 'moment'

import { allTargetTypeUnits, toCurrentFutureTypes } from '../../store/initialState/index'
import { modifyTarget } from '../../action/modifyTarget'


/**
 * get earliest date
 * @param {number} type
 * @param {moment} createDate
 */
const getEarliestDate = (type, createDate) => {
    const unit = allTargetTypeUnits.get(type)
    return moment(moment(createDate).startOf(unit).add(1, `${unit}s`))
}

/**
 * update type of target
 * @param {string} id
 * @param {number} type
 */
const updateTargetType = (id, type) => {
  const newType = toCurrentFutureTypes.get(type)
  ReduxStore.dispatch(modifyTarget({
    id,
    key: 'type',
    value: newType
  }))
}


/**
 * update future target
 * @param {object} target
 */
const settleFutureTarget = target => {
  const {
    id,
    type,
    isTiming
  } = target
  const createFutureDate = target.createFutureDate ? moment(target.createFutureDate) : null
  const startDate = target.startDate ? moment(target.startDate) : null
  const endDate = target.endDate ? moment(target.endDate) : null
  const minDate = target.minDate ? moment(target.minDate) : null
  const maxDate = target.maxDate ? moment(target.maxDate) : null

  // get earliest date
  const earliestDate = getEarliestDate(type, createFutureDate)

  const shouldUpdate = moment().isAfter(earliestDate)

  // should update target
  if (shouldUpdate) {
    // update target's type
    updateTargetType(id, type)
  }
  
}


export default settleFutureTarget