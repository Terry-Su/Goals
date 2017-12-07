import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
const { Row, Column } = Grid
import moment from 'moment'
import { hide } from '../../util'
import validator from '../../util/validator'
import Lang from '../../util/lang/index'

import Timepicker from './TimePicker'




let startDate, endDate, minDate, maxDate

/**
 * get min date by target type
 * @param {number} type 
 */
const getMinDate = type => {
  switch (type) {
    // today
    case 1:
      return moment().startOf('day')
    // week
    case 2:
      return moment().startOf('week')
    // month
    case 3:
      return moment().startOf('month')
    // project      
    case 4:
      return moment()
    // year
    case 5:
      return moment().startOf('year')
    // long
    case 6:
    // buffer
    case 11:
    // idea
    case 12:
      return moment()
    // tomorrow
    case 7:
      return moment().startOf('day').add(1, 'days')
    // nextWeek
    case 8:
      return moment().startOf('week').add(1, 'weeks')
    // nextMonth
    case 9:
      return moment().startOf('month').add(1, 'months')
    // nextYear
    case 10:
      return moment().startOf('year').add(1, 'years')
  }
}

/**
 * get max date by target type
 * @param {number} type 
 */
const getMaxDate = (minDate, type) => {
  const targetDate = moment(minDate)
  switch (type) {
    // today
    case 1:
      return targetDate.add(1, 'days')
    // week
    case 2:
      return targetDate.add(1, 'weeks')
    // month
    case 3:
      return targetDate.add(1, 'months')
    // project
    case 4:
      return targetDate.add(800, 'years')
    // year
    case 5:
      return targetDate.add(1, 'years')
    // long
    case 6:
      return targetDate.add(800, 'years')
    // tomorrow
    case 7:
      return targetDate.add(1, 'days')
    // nextWeek
    case 8:
      return targetDate.add(1, 'weeks')
    // nextMonth
    case 9:
      return targetDate.add(1, 'months')
    // nextYear
    case 10:
      return targetDate.add(1, 'years')
  }
}

/**
 * TimeSelector
 * @param {number} type target's type
 * @param {number} timeType time type
 * @param {moment} startDate
 * @param {moment} endDate
 * @param {moment} minDate
 * @param {moment} maxDate
 * @param {function} onStartTimeClick 
 * @param {function} onEndTimeClick 
 * @param {function} onConfirmClick 
 * @param {function} onCancelClick 
 */
class TimeSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldShowStartTime: true
    }

    const { type } = this.props

    minDate = this.props.minDate || getMinDate(type)
    maxDate = this.props.maxDate || getMaxDate(minDate, type)
    startDate = this.props.startDate || minDate
    endDate = this.props.endDate || minDate

    this._onConfirmClick = this._onConfirmClick.bind(this)
  }

  _onConfirmClick() {
    const { onConfirmClick, validate } = this.props

    const isValid = validator.timeSelector(startDate, endDate)

    isValid && onConfirmClick({
      startDate: startDate, 
      endDate: endDate, 
      minDate: minDate, 
      maxDate: maxDate
    })
  }

  _startTime_timepickerCallback(date) {
    startDate = date
  }

  _endTime_timepickerCallback(date) {
    endDate = date
  }

  render() {
    const { timeType, onStartTimeClick, onEndTimeClick, onCancelClick } = this.props

    const shouldHideStartTime = timeType === 2
    const shouldShowOutline = shouldHideStartTime

    return (
      <div>
        <Grid style={{ marginTop: "20px" }}>
          <Row>
            {/* startTime{ */}
            <Column width={8} style={{ textAlign: 'right' }}>
              <Button content={Lang.START_TIME} basic={shouldShowOutline} primary onClick={onStartTimeClick} />
            </Column>
            {/* startTime} */}

            {/* endTime{ */}
            <Column width={8} style={{ textAlign: 'left' }}>
              <Button content={Lang.END_TIME} basic={!shouldShowOutline} primary onClick={onEndTimeClick} />
            </Column>
            {/* endTime} */}
          </Row>

          <Row>
            <Column>
              {/* start time Timepicker{ */}
              <div style={ hide(shouldHideStartTime) }>
                <Timepicker defaultDate={startDate} minDate={minDate} maxDate={maxDate} callback={this._startTime_timepickerCallback} />
              </div>
              {/* start time Timepicker{ */}

              {/* end time Timepicker{ */}
              <div style={hide(!shouldHideStartTime) }>
                <Timepicker defaultDate={endDate} minDate={minDate} maxDate={maxDate} callback={this._endTime_timepickerCallback} />
              </div>
              {/* end time Timepicker{ */}
            </Column>
          </Row>

          <Row>
            <Column width={8} style={{ textAlign: 'right' }}>
              <Button content={Lang.CANCEL} color='grey' onClick={onCancelClick} />
            </Column>
            <Column width={8} style={{ textAlign: 'left' }}>
              <Button content={Lang.CONFIRM} color='green' onClick={this._onConfirmClick} />
            </Column>
          </Row>
        </Grid>
      </div>
    )
  }
}

TimeSelector.propTypes = {
  type: React.PropTypes.number,
  timeType: React.PropTypes.number,
  minDate: React.PropTypes.instanceOf(moment),
  maxDate: React.PropTypes.instanceOf(moment),
  startDate: React.PropTypes.instanceOf(moment),
  endDate: React.PropTypes.instanceOf(moment),
  onStartTimeClick: React.PropTypes.func,
  onEndTimeClick: React.PropTypes.func,
  onConfirmClick: React.PropTypes.func,
  onCancelClick: React.PropTypes.func
}


export default TimeSelector