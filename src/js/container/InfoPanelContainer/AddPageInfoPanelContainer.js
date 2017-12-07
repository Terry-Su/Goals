import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import InfoPanel from '../../component/InfoPanel/index'

import {
  addTarget
} from '../../action'
import {
  modifyInnerState_route,
  modifyInnerState_tmpTarget,
  modifyInnerState_tmpTarget_createDate,
  modifyInnerState_tmpTarget_createFutureDate,
  modifyInnerState_prevLevel
} from '../../action/modifyInnerState'

import { targetModel } from '../../store/initialState/index'
import decorate from './decorator'

const getState = () => ReduxStore.getState()
const getInnerState = () => getState().innerState
const getTmpTarget = () => getState().innerState.tmpTarget

/**
 * confirm button's click event
 */
const onConfirmClick = () => {
  // change the create date of temporary target
  ReduxStore.dispatch(modifyInnerState_tmpTarget_createDate(moment()))
  // change the create future date of temporary target
  const isFutureType = [7, 8, 9, 10].some(n => getTmpTarget().type === n)
  if (isFutureType) {
    ReduxStore.dispatch(modifyInnerState_tmpTarget_createFutureDate(moment()))
  }
  // add target
  ReduxStore.dispatch(addTarget(getTmpTarget()))
  
  // route to home page
  const { homeRoute } = getInnerState()
  ReduxStore.dispatch(modifyInnerState_route(homeRoute))

  // set previous level 
  const { level } = getTmpTarget()
  ReduxStore.dispatch(modifyInnerState_prevLevel(level))  
}

/**
 * continute to add button's click event
 */
const onContinueAddClick = activateNameInput => {
  // change the create date of temporary target
  ReduxStore.dispatch(modifyInnerState_tmpTarget_createDate(moment()))
  // change the create future date of temporary target
  const isFutureType = [7, 8, 9, 10].some(n => getTmpTarget().type === n)
  if (isFutureType) {
    ReduxStore.dispatch(modifyInnerState_tmpTarget_createFutureDate(moment()))
  }
  // add target
  ReduxStore.dispatch(addTarget(getTmpTarget()))
  // set previous level 
  ReduxStore.dispatch(modifyInnerState_prevLevel(getTmpTarget().level))
  // reset temporary target
  ReduxStore.dispatch(modifyInnerState_tmpTarget({
    ...targetModel,
    level: ReduxStore.getState().innerState.prevLevel,
    type: ReduxStore.getState().innerState.listType
  }))

  // activate name input
  activateNameInput && activateNameInput()
}

/**
 * activate name input
 */
const activateNameInput = () => {
  $('#InfoPanel_name_input')[0].focus()
}

const AddPageInfoPanelContainer = decorate({
  connect,
  InfoPanel,
  onConfirmClick,
  prop_onContinueAddClick: onContinueAddClick,
  activateNameInput
})


export default AddPageInfoPanelContainer