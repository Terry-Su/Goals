const ADD_TARGET= 'ADD_TARGET'
const MODIFY_SETTING = 'MODIFY_SETTING'

/**
 * generate unique ID
 */
const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8
    return v.toString(16)
  }) + (new Date().getTime())
}

/**
 * add target
 * @param {object} target 
 */
export const addTarget = target => {
  return {
    type: ADD_TARGET,
    target: {
      ...target,
      id: generateId()
    }
  }
}



export const modifySetting = (key, value) => {
  return {
    type: MODIFY_SETTING,
    key,
    value
  }
}

