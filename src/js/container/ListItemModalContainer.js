import React from 'react'
import { connect } from 'react-redux'

import moment from 'moment'

import {
  modifyTarget,
  deleteTarget
} from '../action/modifyTarget'
import { modifyInnerState_shouldShowListItemModal } from '../action/modifyInnerState'

import ListItemModal from '../component/ListItemModal'



const mapStateToProps = state => {
  return {
    target: state.innerState.targetInListItemModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onComplete(target) {
      // modify complete date of target
      const completeDate = target.isCompleted ? null : moment()
      dispatch(modifyTarget({
        id: target.id,
        key: 'completeDate',
        value: completeDate
      }))
      // modify completed state of target
      dispatch(modifyTarget({
        id: target.id,
        key: 'isCompleted',
        value: !target.isCompleted
      }))
      // hide Modal
      dispatch(modifyInnerState_shouldShowListItemModal(false))
    },
    onTop(target) {
      // modify topping date of target
      const toppingDate = target.isTopping ? null : moment()
      dispatch(modifyTarget({
        id: target.id,
        key: 'toppingDate',
        value: toppingDate
      }))
      // modify topping state of target
      dispatch(modifyTarget({
        id: target.id,
        key: 'isTopping',
        value: !target.isTopping
      }))
      // hide Modal
      dispatch(modifyInnerState_shouldShowListItemModal(false))
    },
    onDelete(target) {
      // modify deleted date of target
      const deletedDate = target.isDeleted ? null : moment()
      dispatch(modifyTarget({
        id: target.id,
        key: 'deletedDate',
        value: deletedDate
      }))
      // modify deleted state of target
      dispatch(modifyTarget({
        id: target.id,
        key: 'isDeleted',
        value: !target.isDeleted
      }))
      // hide Modal
      dispatch(modifyInnerState_shouldShowListItemModal(false))
    },
    onCompleteDelete(target) {
      // delete target
      dispatch(deleteTarget({
        id: target.id
      }))
      // hide Modal
      dispatch(modifyInnerState_shouldShowListItemModal(false))
    },
    onCancel() {
      // hide Modal
      dispatch(modifyInnerState_shouldShowListItemModal(false))
    }
  }
}

const ListItemModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItemModal)


export default ListItemModalContainer