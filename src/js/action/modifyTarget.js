const MODIFY_TARGET = 'MODIFY_TARGET'
const DELETE_TARGET = 'DELETE_TARGET'



/**
 * modify target
 * @param {object} param0 
 */
export const modifyTarget = ({id, key, value}) => {
  return {
    type: MODIFY_TARGET,
    id,
    key,
    value
  }
}

/**
 * 
 */
export const deleteTarget = ({ id }) => {
  return {
    type: DELETE_TARGET,
    id
  }
}