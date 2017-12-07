import moment from 'moment'

import {
  modifyInnerState_route,
  modifyInnerState_tmpTarget_name,
  modifyInnerState_tmpTarget_level,
  modifyInnerState_tmpTarget_type,
  modifyInnerState_timeType,
  modifyInnerState_tmpTarget_remark,  
  modifyInnerState_tmpTarget_isTiming,
  modifyInnerState_tmpTarget_isRepeating,
  modifyInnerState_tmpTarget_startDate,
  modifyInnerState_tmpTarget_endDate,
  modifyInnerState_tmpTarget_maxDate,
  modifyInnerState_tmpTarget_minDate
} from '../../action/modifyInnerState'

import validator from '../../util/validator'


/**
 * get current state
 */
const getState = () => ReduxStore.getState()
/**
 * get innerState
 */
const getInnerState = () => getState().innerState
/**
 * get temporary target
 */
const getTmpTarget = () => getInnerState().tmpTarget


/**
 * decorate InfoPanel 
 * @param {object} o obect parameter
 *     @param {function} connect redux's connect method 
 *     @param {React.Component} InfoPanel 
 *     @param {function} onClickConfirm confirm button's click event
 *     @param {function} onClickContinueAdd continute adding button's click event
 *     @param {function} activateNameInput active name input
 */
const decorate = ({
  connect,
  InfoPanel,
  onConfirmClick,
  prop_onContinueAddClick,
  activateNameInput
}) => {
  const mapStateToProps = state => {
    return {
      name: getTmpTarget().name,
      level: getTmpTarget().level,
      type: getTmpTarget().type,
      remark: getTmpTarget().remark || '',      
      isTiming: getTmpTarget().isTiming,
      isRepeating: getTmpTarget().isRepeating,
      startDate: getTmpTarget().startDate ? moment(getTmpTarget().startDate) : null,
      endDate: getTmpTarget().startDate ? moment(getTmpTarget().endDate) : null,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      /**
       * name Input's change event 
       * @param {} e 
       * @param {object} info input info 
       */
      onNameInputChange(e, info) {
        const { value } = info

        // change the name of temporary target
        dispatch(modifyInnerState_tmpTarget_name(value))
      },
      /**
       * level button click event
       * @param {number} level 
       */
      onLevelBtnClick(level) {
        // change the level of temporary target
        dispatch(modifyInnerState_tmpTarget_level(level))
      },
      /**
       * type selector change event
       * @param {} e
       * @param {object} info type info
       */
      onTypeSelectorChange(type) {
        // change the type of temporary target
        dispatch(modifyInnerState_tmpTarget_type(type))
        // reset timer to untime
        dispatch(modifyInnerState_tmpTarget_isTiming(false))
        // // show time selector and reset dates and timetype when type is 'project' or 'long'
        // const shouldShowTimeSelector = type === 4 || type === 6
        // if (shouldShowTimeSelector) {
        //   // route to time selector
        //   dispatch(modifyInnerState_route(3))
        //   // reset date
        //   dispatch(modifyInnerState_tmpTarget_startDate(null))
        //   dispatch(modifyInnerState_tmpTarget_endDate(null))
        //   dispatch(modifyInnerState_tmpTarget_maxDate(null))
        //   dispatch(modifyInnerState_tmpTarget_minDate(null))
        //   // reset timetype
        //   // ## change time type to start time
        //   dispatch(modifyInnerState_timeType(1))
        // }
      },
      /**
       * timer's click event
       * @param {boolean} isTiming 
       */
      onTimerClick(isTiming) {
        // reset date
        dispatch(modifyInnerState_tmpTarget_startDate(null))
        dispatch(modifyInnerState_tmpTarget_endDate(null))
        dispatch(modifyInnerState_tmpTarget_maxDate(null))
        dispatch(modifyInnerState_tmpTarget_minDate(null))

        // should timing
        if (!isTiming) {
          // show time selector(show start time mode) when timer is activated
          dispatch(modifyInnerState_route(3))
          // change time type to start time
          dispatch(modifyInnerState_timeType(1))
        }

        // should cancel timing
        if (isTiming) {
          // set timer to untime(make timer unchecked when timer is checked)
          dispatch(modifyInnerState_tmpTarget_isTiming(false))
        }
      },
      /**
       * repeater's click event
       * @param {boolean} isTiming 
       */
      onRepeaterClick(isRepeating) {
        // change the repeating state of temporary target
        dispatch(modifyInnerState_tmpTarget_isRepeating(!isRepeating))
      },
      /**
       * confirm button's click event
       */
      onConfirmClick,
      /**
       * continute to add button's click event, used in adding page info panel
       */
      onContinueAddClick: prop_onContinueAddClick ? () => {
        prop_onContinueAddClick(activateNameInput)
      } : null ,
      /**
       * cancel button click event
       */
      onCancelClick() {
        // route to home page
        const { homeRoute } = getInnerState()
        dispatch(modifyInnerState_route(homeRoute))
      },
      /**
       * validate the temporary target
       */
      validate() {
        const { tmpTarget } = ReduxStore.getState().innerState
        const isValidSuccess = validator.target(tmpTarget)
        return isValidSuccess
      },
      /**
       * start date panel's click event
       */
      startDatePanelClick() {
        // change time type to start time mode
        dispatch(modifyInnerState_timeType(1))
        // route to time selector page
        dispatch(modifyInnerState_route(3))
      },
      /**
       * end date panel's click event
       */
      endDatePanelClick() {
        // change time type to end time mode
        dispatch(modifyInnerState_timeType(2))
        // route to time selector page
        dispatch(modifyInnerState_route(3))
      },
      /**
       * active name input fn
       */
      activateNameInput() {
        activateNameInput && activateNameInput()
      },

      /**
       * remark's input is changing 
       */
      onRemarkChange(e, target) {
        const { value } = target
        
        dispatch(modifyInnerState_tmpTarget_remark(value))
      }
    }
  }

  const InfoPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(InfoPanel)

  return InfoPanelContainer
}


export default decorate