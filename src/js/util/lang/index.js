import { getLanguage } from '../../store/localStore'

/**
 * language module
 */

const Lang = {}



const getTextByLanguage = data => {
  const language = getLanguage()
  return data[language]
}

const addString = (str, data) => {
  Lang[str] = getTextByLanguage(data)
}

const registerLang = info => {
  Object.keys(info).map(key => {
    const value = info[key]
    addString(key, value)
  })
}

// define language info
const langInfo = {
  // { common 
  ALL: {
    zh: '所有',
    en: 'All'
  },
  REMARK: {
    zh: '备注',
    en: 'Remark'
  },
  CANCEL: {
    zh: '返回',
    en: 'Cancel'
  },
  CONFIRM: {
    zh: '确认',
    en: 'Confirm'
  },
  COMPLETE: {
    zh: '完成',
    en: 'Complete'
  },
  UNCOMPLETE: {
    zh: '取消完成',
    en: 'Uncomplete'
  },
  TOP: {
    zh: '置顶',
    en: 'Top'
  },
  CANCELTOP: {
    zh: '取消置顶',
    en: 'Cancel Top'
  },
  MORE: {
    zh: '更多',
    en: 'More'
  },
  DELETE: {
    zh: '删除',
    en: 'Delete'
  },
  COMPLETEDELETE: {
    zh: '彻底删除',
    en: 'Delete Completely'
  },
  RECOVER: {
    zh: '恢复',
    en: 'Recover'
  },
  TODAY: {
    zh: '今天',
    en: 'today'
  },
  THISWEEK: {
    zh: '本周',
    en: 'week'
  },
  THISMONTH: {
    zh: '本月',
    en: 'month'
  },
  THISYEAR: {
    zh: '今年',
    en: 'year'
  },
  DAY: {
    zh: '天',
    en: 'day'
  },
  WEEK: {
    zh: '周',
    en: 'week'
  },
  MONTH: {
    zh: '月',
    en: 'month'
  },
  PROJECT: {
    zh: '项目',
    en: 'project'
  },
  YEAR: {
    zh: '年',
    en: 'year'
  },
  LONG: {
    zh: '长期',
    en: 'long'
  },
  TOMORROW: {
    zh: '明天',
    en: 'tomorrow'
  },
  NEXTWEEK: {
    zh: '下周',
    en: 'next week'
  },
  NEXTMONTH: {
    zh: '下月',
    en: 'next month'
  },
  NEXTYEAR: {
    zh: '明年',
    en: 'next year'
  },
  START_TIME: {
    zh: '开始时间',
    en: 'Start Time'
  },
  END_TIME: {
    zh: '结束时间',
    en: 'End Time'
  },
  MONTH_1: {
    zh: '一月',
    en: 'January'
  },
  MONTH_2: {
    zh: '二月',
    en: 'February'
  },
  MONTH_3: {
    zh: '三月',
    en: 'March'
  },
  MONTH_4: {
    zh: '四月',
    en: 'April'
  },
  MONTH_5: {
    zh: '五月',
    en: 'May'
  },
  MONTH_6: {
    zh: '六月',
    en: 'June'
  },
  MONTH_7: {
    zh: '七月',
    en: 'July'
  },
  MONTH_8: {
    zh: '八月',
    en: 'August'
  },
  MONTH_9: {
    zh: '九月',
    en: 'September'
  },
  MONTH_10: {
    zh: '十月',
    en: 'October'
  },
  MONTH_11: {
    zh: '十一月',
    en: 'November'
  },
  MONTH_12: {
    zh: '十二月',
    en: 'December'
  },
  BUFFER: {
    zh: '缓冲',
    en: 'buffer'
  },
  IDEA: {
    zh: '灵感',
    en: 'idea'
  },
  // } common 

  // { list > menu > button
  HOME_MENU_BUTTON_D: {
    zh: '天',
    en: 'D'
  },
  HOME_MENU_BUTTON_W: {
    zh: '周',
    en: 'W'
  },
  HOME_MENU_BUTTON_M: {
    zh: '月',
    en: 'M'
  },
  HOME_MENU_BUTTON_P: {
    zh: '项',
    en: 'P'
  },
  HOME_MENU_BUTTON_MORE: {
    zh: '更多',
    en: 'More'
  },
  HOME_MENU_BUTTON_YEAR: {
    zh: '年',
    en: 'Year'
  },
  HOME_MENU_BUTTON_LONG: {
    zh: '长期',
    en: 'Long'
  },
  HOME_MENU_BUTTON_BUFFER: {
    zh: '缓冲',
    en: 'Buffer'
  },
  HOME_MENU_BUTTON_IDEA: {
    zh: '灵感',
    en: 'Idea'
  },
  HOME_MENU_BUTTON_TOMORROW: {
    zh: '明天',
    en: 'Tomorrow'
  },
  HOME_MENU_BUTTON_NEXTWEEK: {
    zh: '下周',
    en: 'Next Week'
  },
  HOME_MENU_BUTTON_NEXTMONTH: {
    zh: '下月',
    en: 'Next Month'
  },
  HOME_MENU_BUTTON_NEXTYEAR: {
    zh: '明年',
    en: 'Next Year'
  },
  HOME_MENU_BUTTON_TIMELINE: {
    zh: '时间轴',
    en: 'Timeline'
  },
  HOME_MENU_BUTTON_RECYCLE: {
    zh: '回收站',
    en: 'Recycle'
  },
  HOME_MENU_BUTTON_IMPORT_DATA: {
    zh: '导入数据',
    en: 'Import Data'
  },
  HOME_MENU_BUTTON_EXPORT_DATA: {
    zh: '导出数据',
    en: 'Export Data'
  },
  // } list > menu > button

  // { info panel  
  INFOPANEL_NAME_INPUT_PLACEHOLDER: {
    zh: '目标',
    en: `Goal's Content`
  },
  INFOPANEL_IMPORTANT_URGENT: {
    zh: '重急',
    en: 'Imp&Urg'
  },
  INFOPANEL_IMPORTANT: {
    zh: '重要',
    en: 'Imp'
  },
  INFOPANEL_URGENT: {
    zh: '紧急',
    en: 'Urg'
  },
  INFOPANEL_NORMAL: {
    zh: '一般',
    en: 'Norm'
  },
  INFOPANEL_TIMER: {
    zh: '定时',
    en: 'Time'
  },
  INFOPANEL_REPEATER: {
    zh: '重复',
    en: 'Repeat'
  },
  INFOPANEL_CONTINUTETOADD: {
    zh: '继续添加',
    en: 'Continue to Add'
  },
  // } info panel  

  // { import data
  IMPORT_DATA_ALERT: {
    zh: '提示：建议将当前数据备份后再导入新的数据！',
    en: `It's adviced to backup current data before importing any data!`
  },
  IMPORT_DATA_PASTE_NOTION: {
    zh: '请将要导入的数据粘贴到文本框中',
    en: 'Please paste data to import'
  },
  // } import data

  // { import data
  EXPORT_DATA_EMAIL_NOTION_SET: {
    zh: '请输入电子邮箱（用来导出数据）',
    en: `Please set email to export data`
  },
  // EXPORT_DATA_EMAIL_NOTION_CONFRIM: {
  //   zh: '请确认电子邮箱（用来导出数据）',
  //   en: `Please confirm email to export data`
  // },
  EXPORT_DATA_NOTION_CONFRIM: {
    zh: '是否下载数据？',
    en: `Download data?`
  },
  EXPORT_DATA_COPY_SUCCESS: {
    zh: '数据已复制到剪切板。是否发送到邮箱？',
    en: `The data was copied! Send to email?`
  },
  EXPORT_DATA_COPY_FAILED: {
    zh: '请手动复制数据，点击确认跳转到邮件发送页面',
    en: `Please copy data manually, click confirm to email page`
  },
  // } import data

  // { caveat
  CAVEAT_INFOPANEL_NAME_EMPRTY: {
    zh: '目标不能为空',
    en: `Target's name is empty!`
  },
  CAVEAT_TIMEPICER_START_TIME_IS_AFTER_END_TIME: {
    zh: '结束时间不能早于开始时间！',
    en: `Start time cannot be later than end time!`
  },
  CAVEAT_IMPORT_DATA_FORMAT_WRONG: {
    zh: '数据格式错误！',
    en: `Data's format was wrong!`
  },
  // } caveat
  
  // { confirm/prompt
  CONFIRM_DELETE_COMPLETELY: {
    zh: '本操作将彻底该目标，是否确认？',
    en: 'The manuipution will delete this target completely, confirm?'
  }
  // } confirm/prompt
}

// register language
registerLang(langInfo)

export default Lang