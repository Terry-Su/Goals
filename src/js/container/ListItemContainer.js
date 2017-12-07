import React from 'react'
import { connect } from 'react-redux'

import ListItem  from '../component/ListItem'
import { 
  modifyInnerState_route, 
  modifyInnerState_tmpTarget, 
  modifyInnerState_shouldShowListItemModal, 
  modifyInnerState_targetInListItemModal, 
  modifyInnerState_editType,
  modifyInnerState_tmpTarget_isRemarkEditing 
} from '../action/modifyInnerState'

const mapStateToProps = state => {
  const { currentDate } = state.innerState
  return {
    currentDate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick(item) {
      // change edit mode to editting target
      dispatch(modifyInnerState_editType(2))
      // change temporary target
      dispatch(modifyInnerState_tmpTarget(item))
      // route to edit page
      dispatch(modifyInnerState_route(2))
    },
    onPress(item) {
      // set target
      dispatch(modifyInnerState_targetInListItemModal(item))
      // show modal
      dispatch(modifyInnerState_shouldShowListItemModal(true))
    }
  }
} 

const ListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem)


export default ListItemContainer