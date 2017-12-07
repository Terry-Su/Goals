import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Topbar from '../component/Topbar'
import { modifyInnerState_listType, modifyInnerState_route, modifyInnerState_homeRoute, modifyInnerState_email } from '../action/modifyInnerState'
import { setLocalStore, getLocalStore, setLanguage } from '../store/localStore'
import storeName from '../store/initialState/storeName'
import { showCaveat } from '../util/index'
import { confirmModal, promptModal } from '../util/modal'
import Lang from '../util/lang/index'
import download from '../util/download'
import isHybrid from '../util/isHybrid'
import hybridDownload from '../util/hybridDownload'

const mapStateToProps = state => {
  return {
    listType: state.innerState.listType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDayClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(1))
    },
    onWeekClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(2))
    },
    onMonthClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(3))
    },
    onProjectClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(4))
    },
    onYearClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(5))
    },
    onLongClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(6))
    },
    onBufferrClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(11))
    },
    onIdeaClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(12))
    },
    onNextDayClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(7))
    },
    onNextWeekClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(8))
    },
    onNextMonthClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(9))
    },
    onNextYearClick() {
      dispatch(modifyInnerState_route(0))
      dispatch(modifyInnerState_homeRoute(0))
      dispatch(modifyInnerState_listType(10))
    },
    onTimelineClick() {
      dispatch(modifyInnerState_route(4))
      dispatch(modifyInnerState_homeRoute(4))      
    },
    onRecycleClick() {
      dispatch(modifyInnerState_route(5))
      dispatch(modifyInnerState_homeRoute(5))
    },
    onImportClick() {
      // show confirm: "It's adviced to backup current data before importing any data!"
      confirmModal.show({
        text: Lang.IMPORT_DATA_ALERT,
        modalConfirmed() {
          
          // show prompt: "Please paste data string to import"
          promptModal.show({
            text: Lang.IMPORT_DATA_PASTE_NOTION,
            modalConfirmed(inputValue) {
              // data to generate
              let data = null

              // check pasted data
              const check = dataStr => {
                let result = false
                try {
                  data = JSON.parse(dataStr)
                  result = typeof data === 'object' && data.targets != null
                }
                catch (e) {

                }
                return result
              }
              const checkResult = check(inputValue)

              // data is okay
              if (checkResult) {
                // set localstorage
                setLocalStore(data)
                // refresh
                location.href = location.href
              }
              // data is wrong
              if (!checkResult) {
                showCaveat(Lang.CAVEAT_IMPORT_DATA_FORMAT_WRONG)
              }
            }
          })
        }
      })
    },
    onExportClick() {
      const { email } = ReduxStore.getState().innerState
      confirmModal.show({
        // text: email ? Lang.EXPORT_DATA_EMAIL_NOTION_CONFRIM : Lang.EXPORT_DATA_EMAIL_NOTION_SET,
        text: Lang.EXPORT_DATA_NOTION_CONFRIM,
        // defaultValue: email,
        modalConfirmed(confirmedEmail) {
          /* download  */
          const data = getLocalStore()
          const dataStr = JSON.stringify(data)
          const fileName = `${moment().format("YYYY_MMMM_Do_dddd_h_mm_ss_a")}_By_${storeName}.json`
          
          !isHybrid() && download( dataStr, fileName )
          isHybrid() && hybridDownload( dataStr, fileName )
        }
      })
    },
    onCNClick() {
      setLanguage('zh')
      window.location.href = window.location.href
    },
    onUSClick() {
      setLanguage('en')
      window.location.href = window.location.href
    }
  }
}

const TopbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar)


export default TopbarContainer