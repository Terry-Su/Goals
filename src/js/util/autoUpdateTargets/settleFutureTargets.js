import settleFutureTarget from './settleFutureTarget'


/**
 * update futrue targets,like 'tomorrow', 'nextMonth', 'nextYear'
 * @param {array} targets
 */
const settleFutureTargets = targets => {
  // fileter target not completed, not deleted, and its type is 'tomorrow', 'nextWeek', 'nextMonth' or 'nextYear'
  targets
    .filter(target => !target.isCompleted && !target.isDeleted && (target.type === 7 || target.type === 8 || target.type === 9 || target.type === 10))
    .map(target => {
      settleFutureTarget(target)
    })
}


export default settleFutureTargets