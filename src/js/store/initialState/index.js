import moment from 'moment'

import { getReverseMap } from '../../util/index'
import Lang from '../../util/lang/index'


/**
 * @const {object}
 * target model
 */
export const targetModel = {
    /**
     * @var {number}
     * id
     * default is null
     */
    id: null,
    /**
     * @var {string}
     * name
     * default is empty string
     */
    name: '',
    /**
     * @var {number}
     * type
     * default is 'today'
     */
    type: 1,
    /**
     * @var {number}
     * level
     */
    level: 2,
    /**
     * @var {string}
     * remark content
     */
    remark: '',
    /**
     * @var {moment}
     * createDate
     */
    createDate: null,
    /**
     * @var {moment}
     * completeDate
     */
    completeDate: null,
    /**
     * @var {moment}
     * startDate
     */
    startDate: null,
    /**
     * @var {moment}
     * endDate
     */
    endDate: null,
    /**
     * @var {moment}
     * minimum date used in time selector
     */
    minDate: null,
    /**
     * @var {moment}
     * maximum date  in time selector
     */
    maxDate: null,
    /**
     * @var {moment}
     * deleted date
     */
    deletedDate: null,
    /**
     * @var {boolean}
     * the date of creating future type
     */
    createFutureDate: null,
    /**
     * @var {boolean}
     * is or not Completed
     */
    isCompleted: null,
    /**
     * @var {boolean}
     * is or not timing
     */
    isTiming: false,
    /**
     * @var {boolean}
     * is or not repeating
     */
    isRepeating: false,
    /**
     * @var {boolean}
     * is or not topping
     */
    isTopping: false,
    /**
     * @var {boolean}
     * is or not deleted
     */
    isDeleted: false,
    /**
     * @var {moment}
     * the date when topping
     */
    toppingDate: null
}

/**
 * @const {object}
 * setting model
 */
export const settingModel = {

}

/**
 * @const {object}
 * innerState model
 */
export const innerStateModel = {
    /**
     * @var {number}
     * current mock page id
     * default is 0(home page)
     * 0 - home page
     * 1 - adding page
     * 2 - editing page
     * 3 - time setting page
     * 4 - timeline page
     * 5 - recycle page
     */
    route: 0,
    /**
     * @var {number}
     * prev mock page id
     * default is 0(home page)
     */
    prevRoute: 0,
    
    /**
     * @var {number} 
     * home route
     * 0 - normal home page
     * 1 - timeline page
     * 2 - recycle page
     */
    homeRoute: 0,
    
    /**
     * @var {object}
     * temporary target
     */
    tmpTarget: { ...targetModel },
    /**
     * the time type of time selector
     * 1 - 'startTime'
     * 2 - 'endTime'
     * default is 'startTime'
     * @var {object}
     */
    timeType: 1,
    /**
     * @var {boolean}
     * show caveat or not
     */
    shouldShowCaveat: false,
    /**
     * @var {number}
     * current type in list
     * default is 1(today)
     */
    listType: 1,
    /**
     * @var {number}
     * current type in timeline
     * default is 0(all)
     * ...other: ...target's all type
     */
    timelineType: 0,
    /**
     * the type of editting or adding target
     * 1 - add target 
     * 2 - edit target
     * @var {number}
     * default is 1(edit)
     */
    editType: 1,
    /**
     * @var {number}
     * current type in list
     * default is 1(today)
     */
    prevLevel: targetModel.level,
    /**
     * @var {boolean}
     * showing list item modal state
     */
    shouldShowListItemModal: false,
    /**
     * @var {object}
     * the target in list item modal
     */
    targetInListItemModal: null,
    /**
     * email used to export data
     */
    email: null,
    /**
     * current time, used to update time of targets in realtime
     */
    currentDate: moment()
}

/**
 * @const {map}
 * all the target types 
 */
export const allTargetTypes = new Map([
    [1, Lang.TODAY],
    [2, Lang.THISWEEK],
    [3, Lang.THISMONTH],
    [4, Lang.PROJECT],
    [5, Lang.THISYEAR],
    [6, Lang.LONG],
    [7, Lang.TOMORROW],
    [8, Lang.NEXTWEEK],
    [9, Lang.NEXTMONTH],
    [10, Lang.NEXTYEAR],
    [11, Lang.BUFFER],
    [12, Lang.IDEA]
])

// /**
//  * @const {map}
//  * all the target types (reverse)
//  */
export const allTargetTypes_reverse = getReverseMap(allTargetTypes)

/**
 * @const {map}
 * all the target type units based on all the target types 
 * today - day
 * week - week
 * month - month
 * year - year
 */
export const allTargetTypeUnits = new Map([
    [1, 'day'],
    [2, 'week'],
    [3, 'month'],
    [5, 'year'],
    [7, 'day'],
    [8, 'week'],
    [9, 'month'],
    [10, 'year']
])

/**
 * @const {map}
 * future type changes to current type
 * 7(tomorrow) -> 1(today)
 * 8(nextWeek) -> 2(week)
 * 9(nextMonth) -> 3(month)
 * 10(nextYear) -> 5(year)
 */
export const toCurrentFutureTypes = new Map([
    [7, 1],
    [8, 2],
    [9, 3],
    [10, 5]
])


/**
 * @const {map}
 * all time types in TimeSelector
 */
export const allTimeType = new Map([
    [1, 'startTime'],
    [2, 'endTime']
])


/**
 * @const {map}
 * all route pages
 */
export const allPages = new Map([
    ['home', 0],
    ['add', 1],
    ['modify', 2],
    ['setTime', 3]
])

/**
 * current device is mobile or not
 */
export const isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))

