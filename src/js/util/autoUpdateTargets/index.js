import moment from 'moment'

import settleRepeatingTargets from './settleRepeatingTargets'
import settleFutureTargets from './settleFutureTargets'



/**
 * auto update targets
 * @param {number} timeInterval
 */
const autoUpdateTargets = timeInterval => {
  // settle repeating target every 'timeInterval' millisconds
  setInterval(() => {
    const getTargets = () => ReduxStore.getState().targets
    const targets = getTargets()

    // update future targets
    settleFutureTargets(targets)
    // update target by its repeating propery
    settleRepeatingTargets(targets)
      
  }, timeInterval)

}

export default autoUpdateTargets