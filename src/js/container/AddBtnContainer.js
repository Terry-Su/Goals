import React from 'react'
import { connect } from 'react-redux'

import AddBtn from '../component/AddBtn'
import {
  modifyInnerState_route,
  modifyInnerState_tmpTarget,
  modifyInnerState_editType
} from '../action/modifyInnerState'
import { targetModel } from '../store/initialState/index'

const mapStateToProps = (state) => {
  return {
    // prop: state.prop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * invoked when AddBtn is clicked
     */
    click: () => {
      // change edit type to adding target
      dispatch(modifyInnerState_editType(1))
      // route to home page
      dispatch(modifyInnerState_route(1))
      // reset and initial temporary target
      dispatch(modifyInnerState_tmpTarget({
        ...targetModel,
        level: ReduxStore.getState().innerState.prevLevel,
        type: ReduxStore.getState().innerState.listType
      }))
    }
  }
}

const AddBtnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBtn)


export default AddBtnContainer