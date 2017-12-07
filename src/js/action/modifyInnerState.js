/**
 * modify innerState
 */

const MODIFY_INNERSTATE_ROUTE = 'MODIFY_INNERSTATE_ROUTE'
const MODIFY_INNERSTATE_HOMEROUTE = 'MODIFY_INNERSTATE_HOMEROUTE'
const MODIFY_INNERSTATE_TIMETYPE = 'MODIFY_INNERSTATE_TIMETYPE'
const MODIFY_INNERSTATE_SHOULDSHOWCAVEAT = 'MODIFY_INNERSTATE_SHOULDSHOWCAVEAT'
const MODIFY_INNERSTATE_LISTTYPE = 'MODIFY_INNERSTATE_LISTTYPE'
const MODIFY_INNERSTATE_TIMELINETYPE = 'MODIFY_INNERSTATE_TIMELINETYPE'
const MODIFY_INNERSTATE_EDITTYPE = 'MODIFY_INNERSTATE_EDITTYPE'
const MODIFY_INNERSTATE_SHOULDSHOWLISTITEMMODAL = 'MODIFY_INNERSTATE_SHOULDSHOWLISTITEMMODAL'
const MODIFY_INNERSTATE_TARGETINLISTITEMMODAL = 'MODIFY_INNERSTATE_TARGETINLISTITEMMODAL'
const MODIFY_INNERSTATE_CURRENTDATE = 'MODIFY_INNERSTATE_CURRENTDATE'
const MODIFY_INNERSTATE_PREVLEVEL = 'MODIFY_INNERSTATE_PREVLEVEL'
const MODIFY_INNERSTATE_EMAIL = 'MODIFY_INNERSTATE_EMAIL'
const MODIFY_INNERSTATE_TMPTARGET = 'MODIFY_INNERSTATE_TMPTARGET'
const MODIFY_INNERSTATE_TMPTARGET_NAME = 'MODIFY_INNERSTATE_TMPTARGET_NAME'
const MODIFY_INNERSTATE_TMPTARGET_LEVEL = 'MODIFY_INNERSTATE_TMPTARGET_LEVEL'
const MODIFY_INNERSTATE_TMPTARGET_TYPE = 'MODIFY_INNERSTATE_TMPTARGET_TYPE'
const MODIFY_INNERSTATE_TMPTARGET_ISTIMING = 'MODIFY_INNERSTATE_TMPTARGET_ISTIMING'
const MODIFY_INNERSTATE_TMPTARGET_ISCOMPLETED = 'MODIFY_INNERSTATE_TMPTARGET_ISCOMPLETED'
const MODIFY_INNERSTATE_TMPTARGET_ISREPEATING = 'MODIFY_INNERSTATE_TMPTARGET_ISREPEATING'
const MODIFY_INNERSTATE_TMPTARGET_REMARK = 'MODIFY_INNERSTATE_TMPTARGET_REMARK'
const MODIFY_INNERSTATE_TMPTARGET_CREATEDATE = 'MODIFY_INNERSTATE_TMPTARGET_CREATEDATE'
const MODIFY_INNERSTATE_TMPTARGET_COMPLETEDATE = 'MODIFY_INNERSTATE_TMPTARGET_COMPLETEDATE'
const MODIFY_INNERSTATE_TMPTARGET_STARTDATE = 'MODIFY_INNERSTATE_TMPTARGET_STARTDATE'
const MODIFY_INNERSTATE_TMPTARGET_ENDDATE = 'MODIFY_INNERSTATE_TMPTARGET_ENDDATE'
const MODIFY_INNERSTATE_TMPTARGET_MINDATE = 'MODIFY_INNERSTATE_TMPTARGET_MINDATE'
const MODIFY_INNERSTATE_TMPTARGET_MAXDATE = 'MODIFY_INNERSTATE_TMPTARGET_MAXDATE'
const MODIFY_INNERSTATE_TMPTARGET_CREATEFUTUREDATE = 'MODIFY_INNERSTATE_TMPTARGET_CREATEFUTUREDATE'


/**
 *  manufature actions
 * @param {string} type 
 * @return {function} action function
 *     @param {} value 
 */
const manufature = type => value => ({
  type,
  value
})



/**
 * modify route in innerState
 * @param  {number} value 
 */
export const modifyInnerState_route = manufature(MODIFY_INNERSTATE_ROUTE)


/**
 * modify route in innerState
 * @param  {number} value 
 */
export const modifyInnerState_homeRoute = manufature(MODIFY_INNERSTATE_HOMEROUTE)


/**
 * modify time type(time selector) in innerState
 * @param  {number} value 
 */
export const modifyInnerState_timeType = manufature(MODIFY_INNERSTATE_TIMETYPE)

/**
 * modify time type(edit or add target) in innerState
 * @param  {number} value 
 */
export const modifyInnerState_editType = manufature(MODIFY_INNERSTATE_EDITTYPE)

/**
 * modify showing caveat state in innerState
 * @param  {number} value 
 */
export const modifyInnerState_shouldShowCaveat = manufature(MODIFY_INNERSTATE_SHOULDSHOWCAVEAT)

/**
 * modify list type in innerState
 * @param  {number} value 
 */
export const modifyInnerState_listType = manufature(MODIFY_INNERSTATE_LISTTYPE)

/**
 * modify list type in innerState
 * @param  {number} value 
 */
export const modifyInnerState_timelineType = manufature(MODIFY_INNERSTATE_TIMELINETYPE)

/**
 * modify showing list item modal state in innerState
 * @param  {number} value 
 */
export const modifyInnerState_shouldShowListItemModal = manufature(MODIFY_INNERSTATE_SHOULDSHOWLISTITEMMODAL)

/**
 * modify target in list item modal in innerState
 * @param  {number} value 
 */
export const modifyInnerState_targetInListItemModal = manufature(MODIFY_INNERSTATE_TARGETINLISTITEMMODAL)

/**
 * modify current date state in innerState
 * @param  {number} value 
 */
export const modifyInnerState_currentDate = manufature(MODIFY_INNERSTATE_CURRENTDATE)

/**
 * modify page mode
 * @param  {number} value 
 */
export const modifyInnerState_prevLevel = manufature(MODIFY_INNERSTATE_PREVLEVEL)

/**
 * modify email
 * @param  {number} value 
 */
export const modifyInnerState_email = manufature(MODIFY_INNERSTATE_EMAIL)

/**
 * modify temporary target in innerState
 * @param {object} value 
 */
export const modifyInnerState_tmpTarget = manufature(MODIFY_INNERSTATE_TMPTARGET)

/**
 * modify temporary target's name in innerState
 * @param {string} value 
 */
export const modifyInnerState_tmpTarget_name = manufature(MODIFY_INNERSTATE_TMPTARGET_NAME)

/**
 * modify temporary target's level in innerState
 * @param {number} value 
 */
export const modifyInnerState_tmpTarget_level = manufature(MODIFY_INNERSTATE_TMPTARGET_LEVEL)

/**
 * modify temporary target's type in innerState
 * @param {number} value 
 */
export const modifyInnerState_tmpTarget_type = manufature(MODIFY_INNERSTATE_TMPTARGET_TYPE)

/**
 * modify temporary target's reamark in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_remark = manufature(MODIFY_INNERSTATE_TMPTARGET_REMARK)

/**
 * modify temporary target's timing state in innerState
 * @param {boolean} value 
 */
export const modifyInnerState_tmpTarget_isTiming = manufature(MODIFY_INNERSTATE_TMPTARGET_ISTIMING)

/**
 * modify temporary target's completed state in innerState
 * @param {boolean} value 
 */
export const modifyInnerState_tmpTarget_isCompleted = manufature(MODIFY_INNERSTATE_TMPTARGET_ISCOMPLETED)

/**
 * modify temporary target's repeating state in innerState
 * @param {boolean} value 
 */
export const modifyInnerState_tmpTarget_isRepeating = manufature(MODIFY_INNERSTATE_TMPTARGET_ISREPEATING)

/**
 * modify temporary target's create date in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_createDate = manufature(MODIFY_INNERSTATE_TMPTARGET_CREATEDATE)

/**
 * modify temporary target's complete date in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_completeDate = manufature(MODIFY_INNERSTATE_TMPTARGET_COMPLETEDATE)

/**
 * modify temporary target's start date in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_startDate = manufature(MODIFY_INNERSTATE_TMPTARGET_STARTDATE)

/**
 * modify temporary target's end date in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_endDate = manufature(MODIFY_INNERSTATE_TMPTARGET_ENDDATE)

/**
 * modify temporary target's minimum date in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_minDate = manufature(MODIFY_INNERSTATE_TMPTARGET_MINDATE)

/**
 * modify temporary target's maximum date in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_maxDate = manufature(MODIFY_INNERSTATE_TMPTARGET_MAXDATE)

/**
 * modify temporary target's future date in innerState
 * @param {moment} value 
 */
export const modifyInnerState_tmpTarget_createFutureDate = manufature(MODIFY_INNERSTATE_TMPTARGET_CREATEFUTUREDATE)

