import React from 'react'
import moment from 'moment'
import ListItemContainer from '../container/ListItemContainer'
import { Segment, Grid } from 'semantic-ui-react'

import { isMobile } from '../store/initialState'
import { autoUpdateComponent } from '../util'


const { Row, Column } = Grid


/**
 * sort list items
 * @param {object} a 
 * @param {object} b 
 */
const sort = (a, b) => {
  // sort by level first
  const isSameLevel = a.level === b.level
  if (!isSameLevel) {
    if (a.level > b.level) {
      return 1
    }
    if (a.level < b.level) {
      return -1
    }
  }
  if (isSameLevel) {
    // sort by isTopping 
    const isSameIsTopping = a.isTopping === b.isTopping
    const isBothTopping = a.isTopping && b.isTopping
    if (!isSameIsTopping) {
      if (a.isTopping && !b.isTopping) {
        return -1
      }
      if (!a.isTopping && b.isTopping) {
        return 1
      }
    }

    // if items are both topping, sort by topping date
    if (isBothTopping) {
      const aDate = moment(a.toppingDate)
      const bDate = moment(b.toppingDate)
      const isAfter = aDate.isAfter(bDate)
      const isBefore = aDate.isBefore(bDate)
      if (isAfter) {
        return -1
      }
      if (isBefore) {
        return 1
      }
    }

    if (isSameIsTopping) {
      // sort by isTiming 
      const isSameIsTiming = a.isTiming === b.isTiming
      if (!isSameIsTiming) {
        if (a.isTiming && !b.isTiming) {
          return -1
        }
        if (!a.isTiming && b.isTiming) {
          return 1
        }
      }
      if (isSameIsTiming) {
        // sort by start date 
        const aDate = moment(a.startDate)
        const bDate = moment(b.startDate)
        const isAfter = aDate.isAfter(bDate)
        const isBefore = aDate.isBefore(bDate)
        if (isAfter) {
          return 1
        }
        if (isBefore) {
          return -1
        }
      }
    }
  }
  return 0
}

class MainContent extends React.Component {
  constructor(props) {
    super(props)

    // auto update component
    autoUpdateComponent(this, 5000)
  }

  componentWillUnmount() {

  }

  render() {
    const { items } = this.props
    
    return (
      <Grid>
        <Row centered>
          <Column width={isMobile ? 15 : 13}>
            {/* list items { */}
            {[...items].sort(sort).map(item => <ListItemContainer item={item} key={item.id} />)}
            {/* list items } */}
          </Column>
        </Row>
      </Grid>
    )
  }
}

MainContent.propTypes = {
  items: React.PropTypes.array
};


export default MainContent