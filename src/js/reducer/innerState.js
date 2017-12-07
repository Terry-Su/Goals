import { innerStateModel } from '../store/initialState/index'


// get current temporary target
const getTmpTarget = () => ReduxStore.getState().innerState.tmpTarget


const innerState = (state = { ...innerStateModel }, action) => {
  /**
   * get new temporary target by updating one of it's keys
   * @param {string} key the key of temporary target 
   */
  const getNewTmpTarget = key => ({
    ...getTmpTarget(),
    [key]: action.value
  })

  switch (action.type) {
    case 'MODIFY_INNERSTATE_ROUTE':
      const prevRoute = ReduxStore.getState().innerState.route
      return {
        ...state,
        prevRoute,
        "route": action.value
      }
    case 'MODIFY_INNERSTATE_HOMEROUTE':
      return {
        ...state,
        "homeRoute": action.value
      }
    case 'MODIFY_INNERSTATE_TIMETYPE':
      return {
        ...state,
        "timeType": action.value
      }
    case 'MODIFY_INNERSTATE_EDITTYPE':
      return {
        ...state,
        "editType": action.value
      }
    case 'MODIFY_INNERSTATE_SHOULDSHOWCAVEAT':
      return {
        ...state,
        "shouldShowCaveat": action.value
      }
    case 'MODIFY_INNERSTATE_LISTTYPE':
      return {
        ...state,
        "listType": action.value
      }
    case 'MODIFY_INNERSTATE_TIMELINETYPE':
      return {
        ...state,
        "timelineType": action.value
      }
    case 'MODIFY_INNERSTATE_SHOULDSHOWLISTITEMMODAL':
      return {
        ...state,
        "shouldShowListItemModal": action.value
      }
    case 'MODIFY_INNERSTATE_TARGETINLISTITEMMODAL':
      return {
        ...state,
        "targetInListItemModal": action.value
      }
    case 'MODIFY_INNERSTATE_CURRENTDATE':
      return {
        ...state,
        "currentDate": action.value
      }
    case 'MODIFY_INNERSTATE_PREVLEVEL':
      return {
        ...state,
        "prevLevel": action.value
      }
    case 'MODIFY_INNERSTATE_MODE':
      return {
        ...state,
        "mode": action.value
      }
    case 'MODIFY_INNERSTATE_EMAIL':
      return {
        ...state,
        "email": action.value
      }
    case 'MODIFY_INNERSTATE_TMPTARGET':
      return {
        ...state,
        "tmpTarget": action.value
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_NAME':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('name')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_LEVEL':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('level')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_TYPE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('type')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_REMARK':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('remark')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ISTIMING':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('isTiming')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ISCOMPLETED':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('isCompleted')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ISREPEATING':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('isRepeating')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_CREATEDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('createDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_COMPLETEDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('completeDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_STARTDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('startDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ENDDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('endDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_MINDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('minDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_MAXDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('maxDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_CREATEFUTUREDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('createFutureDate')
      }
  }

  return state
}

export default innerState