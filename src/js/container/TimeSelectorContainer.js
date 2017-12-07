import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import TimeSelector from '../component/TimeSelector/index'
import { 
  modifyInnerState_route,
  modifyInnerState_timeType,
  modifyInnerState_tmpTarget_startDate,
  modifyInnerState_tmpTarget_endDate,
  modifyInnerState_tmpTarget_minDate,
  modifyInnerState_tmpTarget_maxDate,
  modifyInnerState_tmpTarget_isTiming
} from '../action/modifyInnerState'


const mapStateToProps = state => {
  return {
    timeType: state.innerState.timeType,
    type: state.innerState.tmpTarget.type,
    minDate: state.innerState.tmpTarget.minDate ? moment(state.innerState.tmpTarget.minDate) : null,
    maxDate: state.innerState.tmpTarget.maxDate ? moment(state.innerState.tmpTarget.maxDate) : null,
    startDate: state.innerState.tmpTarget.startDate ? moment(state.innerState.tmpTarget.startDate) : null,
    endDate: state.innerState.tmpTarget.endDate ? moment(state.innerState.tmpTarget.endDate) : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * start time button's click event
     */
    onStartTimeClick() {
      // change time type to 'startTime'
      dispatch(modifyInnerState_timeType(1))
    },
    /**
     * start time button's click event
     */
    onEndTimeClick() {
      // change time type to 'startTime'
      dispatch(modifyInnerState_timeType(2))
    },
    /**
     * confirm button's click event
     */
    onConfirmClick({
      startDate,
      endDate,
      minDate,
      maxDate
    }) {
      // change start date of temporary target 
      dispatch(modifyInnerState_tmpTarget_startDate(startDate))
      // change end date of temporary target 
      dispatch(modifyInnerState_tmpTarget_endDate(endDate))
      // change minimum date of temporary target 
      dispatch(modifyInnerState_tmpTarget_minDate(minDate))
      // change maximum date of temporary target 
      dispatch(modifyInnerState_tmpTarget_maxDate(maxDate))
      // route to adding Page info panel
      const prevRoute = ReduxStore.getState().innerState.prevRoute
      dispatch(modifyInnerState_route(prevRoute))
      // if the time is selected, temporary muse be timing
      dispatch(modifyInnerState_tmpTarget_isTiming(true))
    },
    /**
     * cancel button's click event
     */
    onCancelClick() {
      // route to  adding page or editing page info panel
      const { editType } = ReduxStore.getState().innerState
      const route = editType === 1 ? 1 : 2
      dispatch(modifyInnerState_route(route))
    },
    // validate dates
    validate(startDate, endDate) {
      return startDate.isSameOrBefore(endDate)
    }
  }
}

const TimeSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(TimeSelector)


export default TimeSelectorContainer