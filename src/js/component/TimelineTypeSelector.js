import React from 'react'

import TypeSelector from './TypeSelector'
import Lang from '../util/lang/index'


class TimelineTypeSelector extends TypeSelector {
  constructor(props) {
    super(props)

    // add the type
    const isAdded = this.taskTypesOptions.some(option => option.text == Lang.ALL)
    !isAdded && this.taskTypesOptions.splice(0, 0, {
      text: Lang.ALL,
      value: 0
    })

    // update basic text
    this.taskTypesOptions = this.taskTypesOptions.map(option => {
      const { value } = option
      switch (value) {
        case 1: return {
          ...option,
          text: Lang.DAY
        }
        case 2: return {
          ...option,
          text: Lang.WEEK
        }
        case 3: return {
          ...option,
          text: Lang.MONTH
        }
        case 5: return {
          ...option,
          text: Lang.YEAR
        }
        default: return option
      }
    })
  }



}

export default TimelineTypeSelector