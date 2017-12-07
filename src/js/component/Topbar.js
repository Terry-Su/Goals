import React from 'react'

import {
  Button,
  Dropdown,
  Flag
} from 'semantic-ui-react'

import Lang from '../util/lang/index'


// activate button by current list type
const _activateBtn = (type, listType) => {
  return type === listType
}

const Topbar = ({ listType, onDayClick, onWeekClick, onMonthClick, onProjectClick, onYearClick, onLongClick, onNextDayClick, onNextWeekClick, onNextMonthClick, onNextYearClick, onBufferrClick, onIdeaClick, onTimelineClick, onRecycleClick, onImportClick, onExportClick, onCNClick, onUSClick }) => {


  return (
    <div style={{
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '10px'
    }}>
      <Button.Group id="TopbarColumn">
        <Button basic active={_activateBtn(1, listType)} onClick={onDayClick}>{Lang.HOME_MENU_BUTTON_D}</Button>
        <Button basic active={_activateBtn(2, listType)} onClick={onWeekClick}>{Lang.HOME_MENU_BUTTON_W}</Button>
        <Button basic active={_activateBtn(3, listType)} onClick={onMonthClick}>{Lang.HOME_MENU_BUTTON_M}</Button>
        <Button basic active={_activateBtn(4, listType)} onClick={onProjectClick}>{Lang.HOME_MENU_BUTTON_P}</Button>
        <Dropdown id="TopbarDropdown" text={Lang.HOME_MENU_BUTTON_MORE} button basic icon='triangle down'>
          <Dropdown.Menu>
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_YEAR} active={_activateBtn(5, listType)} onClick={onYearClick} />
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_LONG} active={_activateBtn(6, listType)} onClick={onLongClick} />
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_BUFFER} active={_activateBtn(11, listType)} onClick={onBufferrClick} />            
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_IDEA} active={_activateBtn(12, listType)} onClick={onIdeaClick} />            
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_TOMORROW} active={_activateBtn(7, listType)} onClick={onNextDayClick} />
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_NEXTWEEK} active={_activateBtn(8, listType)} onClick={onNextWeekClick} />
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_NEXTMONTH} active={_activateBtn(9, listType)} onClick={onNextMonthClick} />
            <Dropdown.Item text={Lang.HOME_MENU_BUTTON_NEXTYEAR} active={_activateBtn(10, listType)} onClick={onNextYearClick} />
            <Dropdown.Item active text={Lang.HOME_MENU_BUTTON_TIMELINE} onClick={onTimelineClick} />
            <Dropdown.Item active text={Lang.HOME_MENU_BUTTON_RECYCLE} onClick={onRecycleClick} />
            <Dropdown.Item active text={Lang.HOME_MENU_BUTTON_IMPORT_DATA} onClick={onImportClick} />
            <Dropdown.Item active text={Lang.HOME_MENU_BUTTON_EXPORT_DATA} onClick={onExportClick} />
            <Dropdown.Item className='center'>
              <Flag name='cn' onClick={onCNClick} />
              <Flag name='us' onClick={onUSClick} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Button.Group>
    </div>
  )
}


Topbar.propTypes = {
  onDayClick: React.PropTypes.func,
  onWeekClick: React.PropTypes.func,
  onMonthClick: React.PropTypes.func,
  onProjectClick: React.PropTypes.func,
  onYearClick: React.PropTypes.func,
  onLongClick: React.PropTypes.func,
  onNextDayClick: React.PropTypes.func,
  onNextWeekClick: React.PropTypes.func,
  onNextMonthClick: React.PropTypes.func,
  onNextYearClick: React.PropTypes.func,
  onTimelineClick: React.PropTypes.func,
  onRecycleClick: React.PropTypes.func,
  onImportClick: React.PropTypes.func,
  onExportClick: React.PropTypes.func,
  onCNClick: React.PropTypes.func,
  onUSClick: React.PropTypes.func
};


export default Topbar