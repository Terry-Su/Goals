import React from 'react'

import { Button } from 'semantic-ui-react'

import allTargetLevels from '../../store/initialState/allTargetLevels'


/**
 * decide the button should or shouldn't show outline
 * @param {number} currentLevel current level of button
 * @param {number} activatedLevel the level activated
 */
const showOutline = (currentLevel, activatedLevel) => currentLevel != activatedLevel

/**
 * LevelBtnGroup
 * @prop 
 */
class LevelBtnGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { activatedLevel, onBtnClick } = this.props

    const buttons = [...allTargetLevels.keys()].map(level => {
      const info = allTargetLevels.get(level)
      const { color, text } = info
      return <Button key={level} className='levelBtn' basic={ showOutline(level, activatedLevel) } content={text} color={color} onClick={
        () => onBtnClick(level)
      } />
    })

    return (
      <div>
        {buttons}
      </div>
    )
  }
}

LevelBtnGroup.propTypes = {
  activatedLevel: React.PropTypes.number,
  onBtnClick: React.PropTypes.func
};


export default LevelBtnGroup