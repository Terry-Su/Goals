import React from 'react'

import {
  Icon,
  Form,
  Message,
  TextArea
} from 'semantic-ui-react'
import Lang from '../util/lang/index'



function onBlur(Remarks) {
  Remarks.setState({
    isRemarkEditing: false
  })
}


class Remarks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isRemarkEditing: this.props.isRemarkEditing || false
    }

    this.onEditClick = this.onEditClick.bind(this)
  }

  onEditClick() {
    this.setState({
      isRemarkEditing: true
    })
  }

  render() {
    const {
      content,
      onChange
    } = this.props

    const {
      isRemarkEditing
    } = this.state

    const isEmpty = content.trim() === ''
    const shouldShowColor = !isEmpty && !isRemarkEditing
    const colorClassName = shouldShowColor ? 'ui yellow message' : ''
    return (
      <div>
        {
          isEmpty && !isRemarkEditing &&
          <span>
            <Icon name='commenting outline' color='blue' size='large' onClick={this.onEditClick} />
            &nbsp;&nbsp;
          </span>
        }

        <p></p>

        <div style={{
          textAlign: 'left'
        }}>
          {/*{
            !isEmpty && !isRemarkEditing &&
            <Message color='yellow' onClick={this.onEditClick}>
              {content}
            </Message>
          }
          {
            isRemarkEditing &&
            <Form>
              <TextArea autoHeight placeholder={Lang.REMARK} value={content} onChange={onChange} />
            </Form>
          }*/}
          {
            (isRemarkEditing || !isEmpty) &&
            <Form>
              <TextArea className={colorClassName} ref={
                Textarea => {
                  const self = this
                  if (Textarea) {
                    const { ref: textarea } = Textarea
                    $(textarea).unbind()
                    $(textarea).bind('blur', () => onBlur(self))
                  }
                }
              } autoHeight placeholder={Lang.REMARK} value={content} onChange={onChange} />
            </Form>
          }

        </div>



      </div>
    )
  }
}


export default Remarks