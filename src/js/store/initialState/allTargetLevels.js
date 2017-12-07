import Lang from '../../util/lang/index'

/**
 * @const {map}
 * all the target levels
 */
const allTargetLevels = new Map([
  [1, {
    color: 'red',
    text: Lang.INFOPANEL_IMPORTANT_URGENT
  }],
  [2, {
    color: 'orange',
    text: Lang.INFOPANEL_IMPORTANT
  }],
  [3, {
    color: 'yellow',
    text: Lang.INFOPANEL_URGENT
  }],
  [4, {
    color: 'blue',
    text: Lang.INFOPANEL_NORMAL
  }],
])


export default allTargetLevels