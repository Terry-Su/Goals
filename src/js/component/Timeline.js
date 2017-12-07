import React from 'react'
import moment from 'moment'
import ListItemContainer from '../container/ListItemContainer'
import TimelineTypeSelector from './TimelineTypeSelector'
import { Segment, Button, Accordion, Icon, Grid } from 'semantic-ui-react'
const { Row, Column } = Grid

import monthsMap from '../store/initialState/monthsMap'
import Lang from '../util/lang/index'


function getYears(timelineInfo) {
  return Object.keys(timelineInfo).reverse()
}

function getMonthInfos(timelineInfo, year) {
  return Object.keys(timelineInfo[year])
    .sort()
    .reverse()
    .map(month => {
      month = parseInt(month)
      return {
        number: month,
        name: monthsMap.get(month)
      }
    })
}
function getDates(timelineInfo, year, month) {
  return Object.keys(timelineInfo[year][month]).reverse()
}

function getTargets(timelineInfo, year, month, date) {
  return timelineInfo[year][month][date]
}

/**
 * get jsx to render
 * @param {object} timelineInfo 
 */
const getJsx = timelineInfo => {
  const t = timelineInfo
  return getYears(timelineInfo).map((year, i) => (
    <Accordion defaultActiveIndex={0} key={i} fluid>
      <Accordion.Title>
        <h4>
          <Icon name='dropdown' />
          {year}
        </h4>
      </Accordion.Title>
      <Accordion.Content>
        <div>
          {
            getMonthInfos(t, year).map((monthInfo, i) => (
              <Accordion defaultActiveIndex={0} key={i}>
                <Accordion.Title>
                  <h5>
                    &nbsp;&nbsp;
                    <Icon name='dropdown' />
                    {monthInfo.name}
                  </h5>
                </Accordion.Title>
                <Accordion.Content>
                  <div>
                    {
                      getDates(t, year, monthInfo.number).map((date, i) => (
                        <Accordion defaultActiveIndex={0} key={i}>
                          <Accordion.Title>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Icon name='dropdown' />
                            {date}
                          </Accordion.Title>
                          <Accordion.Content>
                            <div>
                              {
                                getTargets(t, year, monthInfo.number, date).map((target, i) => (
                                  <ListItemContainer item={target} key={i} />
                                ))
                              }
                            </div>
                          </Accordion.Content>
                        </Accordion>
                      ))
                    }
                  </div>
                </Accordion.Content>
              </Accordion>
            ))
          }
        </div>
      </Accordion.Content>
    </Accordion>
  ))
}


const Timeline = ({ type, onTimelineTypeSelectorChange, timelineInfo, onBackClick }) => {
  return <Grid>
    <p></p>

    <Row centered>
      <Column width={12} >
        <Button content={Lang.CANCEL} fluid color='teal' onClick={onBackClick} />
      </Column>
    </Row>

    <p></p>

    <Row centered>
      <Column width={14}>
        <TimelineTypeSelector type={type} onChange={onTimelineTypeSelectorChange} />
      </Column>
    </Row>

    <Row centered>
      <Column width={15} style={{
        textAlign: 'left'
      }}>
        {getJsx(timelineInfo)}
      </Column>
    </Row>


  </Grid>
}

Timeline.propTypes = {
  timelineInfo: React.PropTypes.object,
  onBackClick: React.PropTypes.func,
};
export default Timeline