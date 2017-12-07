import settleRepeatingTarget from './settleRepeatingTarget'


/**
 * update target by its repeating property
 * @param {array} targets
 */
const settleRepeatingTargets = targets => {
  // fileter target repeating, not deleted, and its type is 'today', 'week', 'month' or 'year'
  targets
    .filter(target => !target.isDeleted && target.isRepeating && (target.type === 1 || target.type === 2 || target.type === 3 || target.type === 5))
    .map(target => {
      settleRepeatingTarget(target)
    })
}


export default settleRepeatingTargets