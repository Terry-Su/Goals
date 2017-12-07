import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Timeline from '../component/Timeline'

import {
  modifyInnerState_route,
  modifyInnerState_homeRoute,
  modifyInnerState_timelineType
} from '../action/modifyInnerState'

const getState = () => ReduxStore.getState()
const getInnerState = () => getState().innerState


/**
   * get timeline info
   * @param {} targets 
   */
const getTimelineInfo = targets => {
  let timelineInfo = {}
  targets
    .map(target => {
    const { completeDate } = target
    const year = moment(completeDate).year()
    const month = moment(completeDate).month() + 1
    const date = moment(completeDate).date()

    timelineInfo[year] = timelineInfo[year] || {}
    let theYear = timelineInfo[year]
    theYear[month] = theYear[month] || {}
    let theMonth = theYear[month]
    theMonth[date] = theMonth[date] || []
    let theDate = theMonth[date]
    theDate.push(target)
  })
  return timelineInfo
}


const mapStateToProps = state => {
  const { timelineType } = getInnerState()
  let filteredTargets = []

  filteredTargets = state.targets.filter(target => target.isCompleted && !target.isDeleted)
  filteredTargets = filteredTargets.filter(target => {
    return timelineType !== 0 ? target.type === timelineType : true
  })
  
  const timelineInfo = getTimelineInfo(filteredTargets)

  return {
    timelineInfo,
    type: timelineType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTimelineTypeSelectorChange(type) {
      dispatch(modifyInnerState_timelineType(type))
    },
    onBackClick() {
      // back to homepage
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
    }
  }
}

const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)




export default TimelineContainer