import moment from 'moment'
import { getLocalStore, setLocalStore } from '../store/localStore'

import { modifyInnerState_shouldShowCaveat, modifyInnerState_currentDate } from '../action/modifyInnerState'


/**
 * @var {number}
 * timer for hiding caveat
 */
let caveatTimer = null

/**
 * @var {number}
 * timer for auto updating component
 */
let autoUpdateComponentTimer = null



/**
 * console the dispatching and state info
 */
export const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

/**
 * Sync the localStorage
 */
export const setStateToLocalStore = store => next => action => {
  
  let result = next(action)

  setLocalStore(store.getState())

  return result
}

/**
 * hide component
 * @param {boolean} bool 
 */
export const hide = bool => ({
  width: bool ? '0px' : '100%',
  height: bool ? '0px' : 'auto',
  overflow: 'hidden'
})

/**
 * get new reverse map
 */
export const getReverseMap = map => {
  const arr = [...map.entries()]
  const newContructor = arr.map(subArr => subArr.reverse())
  return new Map(newContructor)
}


/**
 * show caveat message
 */
export const showCaveat = msg => {
  GV.caveat = msg

  const showCaveat = () => ReduxStore.dispatch(modifyInnerState_shouldShowCaveat(true))
  const hideCaveat = () => ReduxStore.dispatch(modifyInnerState_shouldShowCaveat(false))

  // show caveat
  showCaveat()

  // hide caveat
  if (caveatTimer) {
    clearInterval(caveatTimer)
  }
  caveatTimer = setTimeout(() => {
    hideCaveat()
  }, 1200)

}

/**
 * get target by id
 * @param {string} id
 */
export const getTargetById = id => {
  return ReduxStore.getState().targets.filter(target => target.id === id)[0]
}

/**
 * auto update component(can only used on one component)
 */
export const autoUpdateComponent = (Component, interval) => {
  clearInterval(autoUpdateComponentTimer)
  autoUpdateComponentTimer = setInterval(() => {
    const isComponentMounted = !Component._calledComponentWillUnmount
    isComponentMounted && ReduxStore.dispatch(modifyInnerState_currentDate(moment()))
  }, interval)
}

