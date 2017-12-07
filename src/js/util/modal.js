import React from 'react'
import stateList from '../store/stateList'


/**
 * confirm modal
 */
const confirmModal = {
  /**
   * text
   * @const {string}
   */
  text: 'Confirm?',
  /**
   * callback
   * @const {function}
   */
  callback: null,
  /**
   * show modal
   * @param {string} text
   * @param {function} callabck
   */
  show({ text, modalShowed, modalConfirmed }) {
    const self = this
    // show dom
    stateList.TargetsManagement.setState({
      confirmModalSetting: {
        showConfirmModal: true,
        confirmText: text || this.text,
        confirmCancel: this.hide,
        confirmConfrim: () => {
          modalConfirmed && modalConfirmed()
          self.hide()
        } 
      }
    }, modalShowed)
  },
  hide(callback) {
    // filter special parameters
    const callbackFn = typeof callback === 'function' ? callback : (() => {})
    stateList.TargetsManagement.setState({
      confirmModalSetting: {
        showConfirmModal: false
      }
    }, callbackFn)
  }
}

/**
 * prompt modal
 */
const promptModal = {
  /**
   * text
   * @const {string}
   */
  text: '',
  /**
   * callback
   * @const {function}
   */
  callback: null,
  /**
   * show modal
   * @param {string} text
   * @param {function} callabck
   */
  show({ text, defaultValue, modalShowed, modalConfirmed }) {
    const self = this
    // show dom
    stateList.TargetsManagement.setState({
      promptModalSetting: {
        showPromptModal: true,
        promptText: text || this.text,
        promptDefaultValue: defaultValue,
        promptCancel: this.hide,
        promptConfrim: inputValue => {
          self.hide( () => {
            modalConfirmed && modalConfirmed(inputValue)
          } )
        } 
      }
    }, modalShowed)
  },
  hide(callback) {
    // filter special parameters
    const callbackFn = typeof callback === 'function' ? callback : (() => {})
    stateList.TargetsManagement.setState({
      promptModalSetting: {
        showPromptModal: false
      }
    }, callbackFn)
  }
}

export { confirmModal, promptModal }