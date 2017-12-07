import React from 'react'
import moment from 'moment'

import { Message, Modal, Button, Icon, Input } from 'semantic-ui-react'

import TopbarContainer from '../container/TopbarContainer'
import MainContentContainer from '../container/MainContentContainer'
import AddBtnContainer from '../container/AddBtnContainer'
import AddPageInfoPanelContainer from '../container/InfoPanelContainer/AddPageInfoPanelContainer'
import EditPageInfoPanelContainer from '../container/InfoPanelContainer/EditPageInfoPanelContainer'
import TimeSelectorContainer from '../container/TimeSelectorContainer'
import ListItemModalContainer from '../container/ListItemModalContainer'
import TimelineContainer from '../container/TimelineContainer'
import RecycleContainer from '../container/RecycleContainer'

import Lang from '../util/lang/index'
import stateList from '../store/stateList'
import { innerStateModel } from '../store/initialState/index'
import initializeMomentLocale from '../util/lang/initializeMomentLocale'


const MessageBox = () => (
	<div id='caveat'>
		<Message negative>
			<Message.Header>{GV.caveat}</Message.Header>
		</Message>
	</div>
)



/**
 * get prompt confirm method
 * @param {function} promptConfrim 
 */
const getPromptConfrimFn = promptConfrim => {

	return () => {
		const inputValue = $('#targetsManagement-prompt').val()
		promptConfrim(inputValue)
	}
}


/**
 * composition
 * - Topbar
 * - MainContent
 * - AddBtn
 */
class TargetsManagement extends React.Component {
	constructor(props) {
		super(props)

		// add TargetsManagement to stateList
		stateList.TargetsManagement = this

		this.state = {
			confirmModalSetting: {},
			promptModalSetting: {}
		}

	}
	componentWillMount() {
		// inital moment.locale
		initializeMomentLocale()
	}
	render() {
		const { shouldShowCaveat, shouldShowListItemModal, route } = this.props
		const { confirmModalSetting, promptModalSetting } = this.state

		const { showConfirmModal, confirmText, confirmCancel, confirmConfrim } = confirmModalSetting
		const { showPromptModal, promptText, promptCancel, promptConfrim, promptDefaultValue } = promptModalSetting

		return (
			<div id="TargetsManagement">
				{
					// caveat message
					shouldShowCaveat && <MessageBox />
				}


				{
					// route to home page
					route === 0 && (
						<div>
							<TopbarContainer />
							<MainContentContainer />
							<AddBtnContainer />
						</div>
					)
				}

				{
					// route to adding page
					route === 1 && <AddPageInfoPanelContainer />
				}

				{
					// route to editing page
					route === 2 && <EditPageInfoPanelContainer />
				}

				{
					// route to time setting page
					route === 3 && <TimeSelectorContainer />
				}

				{
					// route to timeline page
					route === 4 && <TimelineContainer />
				}


				{
					// route to recycle page
					route === 5 && <RecycleContainer />
				}

				{/* { list item modal */}
				{shouldShowListItemModal && <ListItemModalContainer />}
				{/* } list item modal */}

				{/* { confirm modal */}
				<Modal open={showConfirmModal}>
					{/*<Modal.Header>{confirmText}</Modal.Header>*/}
					<Modal.Content>
						<h4 className='center'>
							{confirmText}
						</h4>
					</Modal.Content>
					<Modal.Actions className='center'>
						<Button color='red' onClick={confirmCancel}>
							{Lang.CANCEL}
						</Button>
						<Button color='green' onClick={confirmConfrim}>
							{Lang.CONFIRM}
						</Button>
					</Modal.Actions>
				</Modal>
				{/* } confirm modal */}

				{/* { prompt modal */}
				<Modal open={showPromptModal}>
					{/*<Modal.Header>{confirmText}</Modal.Header>*/}
					<Modal.Content>
						<h5>
							{promptText}
						</h5>
						<Input id="targetsManagement-prompt" fluid focus defaultValue={promptDefaultValue} />
					</Modal.Content>
					<Modal.Actions>
						<Button color='red' onClick={promptCancel}>
							{Lang.CANCEL}
						</Button>
						<Button color='green' onClick={getPromptConfrimFn(promptConfrim)}>
							{Lang.CONFIRM}
						</Button>
					</Modal.Actions>
				</Modal>
				{/* } prompt modal */}
			</div>
		)
	}
}


TargetsManagement.propTypes = {
	shouldShowCaveat: React.PropTypes.bool,
	shouldShowListItemModal: React.PropTypes.bool,
	route: React.PropTypes.number
};


export default TargetsManagement