import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { allTargetTypes, allTargetTypes_reverse } from '../store/initialState/index'


/**
 * @const {array} 
 * options for Dropdown
 */
const taskTypesOptions = [...allTargetTypes].map((arr, index) => ({
  text: arr[1],
  value: arr[0]
}))


class TypeSelector extends React.Component {
  constructor(props) {
    super(props)

    this.taskTypesOptions = taskTypesOptions

    this._onSelectorChange = this._onSelectorChange.bind(this)
  }

  /**
   * selector's change event
   * @param {} e 
   * @param {object} info 
   */
  _onSelectorChange(e, info) {
    const { onChange } = this.props

    const { value } = info
    const type = value

    onChange(type)
  }

  render() {
    const { type } = this.props
    const value = type

    return (
      <div>
        <Dropdown fluid selection defaultValue={value} options={this.taskTypesOptions} onChange={this._onSelectorChange} ></Dropdown>
      </div>
    )
  }
}

TypeSelector.propTypes = {
  type: React.PropTypes.number,
  onChange: React.PropTypes.func
};


export default TypeSelector