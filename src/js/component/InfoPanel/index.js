import React from 'react'
import moment from 'moment'
import { Button, Grid, Input, Checkbox, Segment } from 'semantic-ui-react'
const { Row, Column } = Grid

import LevelBtnGroup from './LevelBtnGroup'
import TypeSelector from '../TypeSelector'
import Remarks from '../Remarks'

import Lang from '../../util/lang/index'



class InfoPanel extends React.Component {
  constructor(props) {
    super(props)

    this._onTimerClick = this._onTimerClick.bind(this)
    this._onRepeaterClick = this._onRepeaterClick.bind(this)
    this._onConfirmClick = this._onConfirmClick.bind(this)
    this._onContinueAddClick = this._onContinueAddClick.bind(this)
  }

  componentDidMount() {
    // activate name input automatically
    const { activateNameInput } = this.props
    activateNameInput && activateNameInput()
  }

  /**
   * timer checkbox's click event
   * @param {*} e 
   * @param {*} info 
   */
  _onTimerClick(e, info) {
    const { onTimerClick } = this.props
    const { checked } = info

    onTimerClick(checked)
  }

  /**
   * repeater checkbox's click event
   * @param {*} e 
   * @param {*} info 
   */
  _onRepeaterClick(e, info) {
    const { onRepeaterClick } = this.props
    const { checked } = info

    onRepeaterClick(checked)
  }

  /**
   * confirm button's click event
   */
  _onConfirmClick() {
    const { validate, onConfirmClick } = this.props

    // validate temporary target
    const isValidateSuccess = validate()

    // if validation is successful, invoke function onConfirmClick
    isValidateSuccess && onConfirmClick()
  }

  /**
   * continue to add button's click event
   */
  _onContinueAddClick() {
    const { validate, onContinueAddClick } = this.props

    // validate temporary target
    const isValidateSuccess = validate()

    // if validation is successful, invoke function onContinueAddClick
    isValidateSuccess && onContinueAddClick()
  }

  render() {
    const {
      name,
      level,
      type,
      remark,
      isTiming,
      isRepeating,
      onNameInputChange,
      startDate,
      endDate,
      remarkContent,
      onLevelBtnClick,
      onTypeSelectorChange,
      onConfirmClick,
      onContinueAddClick,
      onCancelClick,
      startDatePanelClick,
      endDatePanelClick,
      onRemarkEditClick,
      onRemarkChange
    } = this.props

    // if onContinueAddClick exsits, show continute to add button
    const exsitContinuteAddBtn = !!onContinueAddClick

    // hide repeating checkbox when type is 'today', 'week', 'month' , 'year', 'tomorrow', 'nextWeek', 'nexMonth', 'nextYear'
    const shouldShowRepeater = type === 1 || type === 2 || type === 3 || type === 5 || type === 7 || type === 8 || type === 9 || type === 10

    return (
      <Grid>
        <p></p>
        {/*  Name{ */}
        <Row centered>
          <Column width={14}>
            <Input id="InfoPanel_name_input" placeholder={Lang.INFOPANEL_NAME_INPUT_PLACEHOLDER} fluid value={name} onChange={onNameInputChange} />
          </Column>
        </Row>
        {/*  Name} */}

        {/* Level{ */}
        <Row centered>
          <Column width={15} textAlign='center'>
            <LevelBtnGroup activatedLevel={level} onBtnClick={onLevelBtnClick} />
          </Column>
        </Row>
        {/* Level} */}

        {/*TypeSelector{ */}
        <Row centered>
          <Column width={14}>
            <TypeSelector type={type} onChange={onTypeSelectorChange} />
          </Column>
        </Row>
        {/* TypeSelector} */}

        {/* Timer and Repeat{ */}
        <Row centered>
          {/* Timer{ */}
          <Column width={8} textAlign='center'>
            <Checkbox label={Lang.INFOPANEL_TIMER} checked={isTiming} onClick={this._onTimerClick} />
          </Column>
          {/* Timer}*/}

          {/* Repeater{ */}
          {
            shouldShowRepeater &&
            <Column width={8} textAlign='center'>
              <Checkbox label={Lang.INFOPANEL_REPEATER} checked={isRepeating} onClick={this._onRepeaterClick} />
            </Column>
          }
          {/* Repeater}*/}
        </Row>
        {/* Timer and Repeat} */}

        {/*timing nfo{ */}
        {
          isTiming &&
          <Row centered>
            <Column width={6}>
              <Segment textAlign='center' onClick={startDatePanelClick}>
                <h3>{startDate.format('HH:mm')}</h3>
                <h5>{startDate.format('YYYY/M/D')}</h5>
              </Segment>
            </Column>
            <Column width={2} textAlign='center' verticalAlign='middle'></Column>
            <Column width={6}>
              <Segment textAlign='center' onClick={endDatePanelClick}>
                <h3>{endDate.format('HH:mm')}</h3>
                <h5>{endDate.format('YYYY/M/D')}</h5>
              </Segment>
            </Column>
          </Row>
        }
        {/* timingInfo} */}

        {/* Remarks{ */}
        <Row centered>
          <Column width={14} textAlign='right'>
            <Remarks isRemarkEditing={false} content={remark} onChange={onRemarkChange}/>
          </Column>
        </Row>
        {/* Remarks} */}

        {/* Confirm Btn{ */}
        <Row centered>
          <Column width={12} >
            <Button content={Lang.CONFIRM} fluid color='blue' onClick={this._onConfirmClick} />
          </Column>
        </Row>
        {/* Confirm Btn} */}

        {/* ContinueToAdd Btn{ */}
        {
          exsitContinuteAddBtn &&
          <Row centered>
            <Column width={12} >
              <Button content={Lang.INFOPANEL_CONTINUTETOADD} fluid color='teal' onClick={this._onContinueAddClick} />
            </Column>
          </Row>
        }
        {/* ContinueToAdd Btn} */}

        {/* Cancel Btn{ */}
        <Row centered>
          <Column width={12} >
            <Button content={Lang.CANCEL} fluid color='grey' onClick={onCancelClick} />
          </Column>
        </Row>
        {/* Cancel Btn} */}

      </Grid>
    )
  }
}

InfoPanel.propTypes = {
  name: React.PropTypes.string,
  level: React.PropTypes.number,
  type: React.PropTypes.number,
  isTiming: React.PropTypes.bool,
  isRepeating: React.PropTypes.bool,
  startDate: React.PropTypes.instanceOf(moment),
  endDate: React.PropTypes.instanceOf(moment),
  onNameInputChange: React.PropTypes.func,
  onLevelBtnClick: React.PropTypes.func,
  onTypeSelectorChange: React.PropTypes.func,
  onTimerClick: React.PropTypes.func,
  onRepeaterClick: React.PropTypes.func,
  onCancelClick: React.PropTypes.func,
  validate: React.PropTypes.func,
  startDatePanelClick: React.PropTypes.func,
  endDatePanelClick: React.PropTypes.func
}


export default InfoPanel