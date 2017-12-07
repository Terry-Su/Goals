import React, { Component } from 'react'

// datepicker
import 'rmc-picker/assets/index.css'
import 'rmc-date-picker/assets/index.css'
import DatePicker from 'rmc-date-picker/lib/DatePicker'
import moment from 'moment'
import zhCn from 'rmc-date-picker/lib/locale/zh_CN'
import enUS from 'rmc-date-picker/lib/locale/en_US'
import 'moment/locale/zh-cn.js'


import { getLanguage } from '../../store/localStore'

let minDate, maxDate, defaultDate

/**
 * class Timepicker
 * @param {moment} defaultDate current defaultDate
 * @param {moment} maxDate current maxDate
 * @param {moment} minDate current minDate
 * @param {function} callback callback(date)
 */
class Timepicker extends React.Component {
  constructor(props) {
    super(props)
    let that = this

    minDate = props.minDate || moment()
    maxDate = props.maxDate || moment().add(800, 'years')
    defaultDate = props.defaultDate || moment()

    this.state = {
      date: null
    }

    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange(date) {
    let { callback } = this.props

    this.setState(prevState => {
      const prevDate = prevState.date || (this.props.defaultDate || moment())
      if (prevDate) {
        const isHourChanged = prevDate.hour() != date.hour()
        const isDayChanged = prevDate.date() != date.date()
        const isMonthChanged = prevDate.month() != date.month()
        const isYearChanged = prevDate.year() != date.year()

        const resetTime = (type, date) => {
          const testDate = moment(date)
          const isValid = testDate.isAfter(minDate) && testDate.isBefore(maxDate)
          const isDate = type === 'date'
          const num = isDate ? 1 : 0
          isValid && date[type](num)
        }

        // change hour, reset minute
        if (isHourChanged) {
          resetTime('minute', date)
        }
        // change day, reset hour
        if (isDayChanged) {
          resetTime('hour', date)
          resetTime('minute', date)
        }
        // change month, reset day
        if (isMonthChanged) {
          resetTime('date', date)
          resetTime('hour', date)
          resetTime('minute', date)
        }
        // change year, reset month
        if (isYearChanged) {
          resetTime('month', date)
          resetTime('date', date)
          resetTime('hour', date)
          resetTime('minute', date)
        }

      }

      return {
        date
      }
    })

    callback(date)
  }

  render() {
    const { date } = this.state

    let locale

    const currentLanguage = getLanguage()
    if (currentLanguage === 'zh') {
      minDate.locale('zh-cn').utcOffset(8)
      maxDate.locale('zh-cn').utcOffset(8)
      defaultDate.locale('zh-cn').utcOffset(8)

      locale = zhCn
    }
    if (currentLanguage != 'zh') {
      minDate.locale('en').utcOffset(8)
      maxDate.locale('en').utcOffset(8)
      defaultDate.locale('en').utcOffset(8)

      locale = enUS
    }

    const format = function (date) {
      return date.format('YYYY-MM-DD HH:mm')
    }

    return (
      <div style={{ margin: '10px 30px' }}>
        <div>
          <DatePicker
            rootNativeProps={{ 'data-xx': 'yy' }}
            defaultDate={date || defaultDate}
            mode={'datetime'}
            locale={locale}
            maxDate={maxDate}
            minDate={minDate}
            onDateChange={this.onDateChange}
          />
        </div>
      </div>)
  }
}

Timepicker.propTypes = {
  defaultDate: React.PropTypes.instanceOf(moment),
  maxDate: React.PropTypes.instanceOf(moment),
  minDate: React.PropTypes.instanceOf(moment),
  callback: React.PropTypes.func
};


export default Timepicker