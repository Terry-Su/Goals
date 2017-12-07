import React from 'react'
import { connect } from 'react-redux'

import MainContent from '../component/MainContent'


const mapStateToProps = state => {
  const type = state.innerState.listType
  const isTypeMatching = target => target.type === type
  const isNotDeleted = target => !target.isDeleted
  const isNotCompleted = target => !target.isCompleted
  const items = state.targets.filter(target => isTypeMatching(target) && isNotDeleted(target) && isNotCompleted(target))
  return {
    items
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const MainContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent)


export default MainContentContainer