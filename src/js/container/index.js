import React from 'react'
import { connect } from 'react-redux'

import TargetsManagement from '../component/TargetsManagement'
import { allPages } from '../store/initialState/index'


const mapStateToProps = (state) => {
	const home = allPages.get("home")
	return {
		shouldShowCaveat: state.innerState.shouldShowCaveat,
		route: state.innerState.route || home,
		shouldShowListItemModal: state.innerState.shouldShowListItemModal
	}
}

const TargetsManagementContainer = connect(
	mapStateToProps
)(TargetsManagement)


export default TargetsManagementContainer