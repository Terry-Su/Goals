import React from 'react'
import { Label, Segment } from 'semantic-ui-react'
import Tappable from 'react-tappable'
import moment from 'moment'

import getTimingInfo from '../util/lang/getTimingInfo'
import allTargetLevels from '../store/initialState/allTargetLevels'



const ListItem = ({ item, currentDate, onClick, onPress }) => {
  // !!!!!! Attention !!!!!!
  // import parameter: `currentDate` to update list item in realtime

  const {
    name,
    level,
    isTiming,
    startDate: theStartDate,
    endDate: theEndDate
  } = item
  const startDate = theStartDate ? moment(theStartDate) : null
  const endDate = theEndDate ? moment(theEndDate) : null

  const { color } = allTargetLevels.get(level)

  const shouldShowTiming = isTiming

  const _onClick = e => {
    e.preventDefault()
    onClick(item)
  }

  const _onPress = () => {
    onPress(item)
  }
  let timingInfo = shouldShowTiming ? getTimingInfo(startDate, endDate) : null

  const shouldShowPoint = !shouldShowTiming

 
  return (
    <Tappable onPress={_onPress}>
      <Segment className="ListItem" basic textAlign='left' onClick={_onClick}>
        { shouldShowPoint && 
          <span>
            <Label circular color={color} empty key={color} size='mini' />
            &nbsp;&nbsp;&nbsp;
          </span>
        }

        {
          shouldShowTiming && 
          <span>
            <Label className="Label" color={color} style={{
              marginBottom: '6px'
            }}>{timingInfo}</Label>
            &nbsp;&nbsp;&nbsp;
          </span>
          
        }

        <span style={{
          lineHeight: '22px'
        }}>{name}</span>
      </Segment>
    </Tappable>
  )
}

ListItem.propTypes = {
  item: React.PropTypes.object,
  onClick: React.PropTypes.func,
  onPress: React.PropTypes.func
};

export default ListItem