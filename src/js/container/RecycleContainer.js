import React from 'react'
import { connect } from 'react-redux'

import { 
  modifyInnerState_route,
  modifyInnerState_homeRoute
} from '../action/modifyInnerState'
import Recycle from '../component/Recycle'


const mapStateToProps = state => {
  const isDeleted = target => target.isDeleted
  const items = state.targets.filter(target => isDeleted(target))
  return {
    items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBackClick() {
      // back to homepage
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
    }
  }
}

const RecycleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recycle)


export default RecycleContainer