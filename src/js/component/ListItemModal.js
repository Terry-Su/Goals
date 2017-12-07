import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import Lang from '../util/lang/index'
import { confirmModal } from '../util/modal'

class ListItemModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldShowDeleteBtn: false
    }

    this._onComplete = this._onComplete.bind(this)
    this._onTop = this._onTop.bind(this)
    this._onMore = this._onMore.bind(this)
    this._onDelete = this._onDelete.bind(this)
    this._onCompleteDelete = this._onCompleteDelete.bind(this)
  }

  _onComplete() {
    const { target, onComplete } = this.props
    onComplete(target)
  }

  _onTop() {
    const { target, onTop } = this.props
    onTop(target)
  }

  _onDelete() {
    const { target, onDelete } = this.props
    onDelete(target)
  }

  _onCompleteDelete() {
    const { target, onCompleteDelete } = this.props

    // confirm deletion
    confirmModal.show({
      text: Lang.CONFIRM_DELETE_COMPLETELY, 
      modalConfirmed() {
        onCompleteDelete(target)
      }
    })
  }

  _onMore() {
    this.setState({
      shouldShowDeleteBtn: !this.state.shouldShowDeleteBtn
    })
  }
  render() {
    const { shouldShowDeleteBtn } = this.state
    const { target, onCancel } = this.props

    const { isTopping, isCompleted, isDeleted } = target
    const shouldShowCompletedBtn = !isDeleted
    const shouldShowToppingBtn = !isDeleted
    const shouldShowMoreBtn = !isDeleted
    return (
      <div>
        <Modal className="ListItemModal" open={true} >
          <Modal.Content>
            {
              shouldShowCompletedBtn &&
              <Button id="completeBtn" fluid color='green' onClick={this._onComplete}>
                {isCompleted ? Lang.UNCOMPLETE : Lang.COMPLETE}
              </Button>
            }

            <p></p>

            {
              shouldShowToppingBtn &&
              <Button id="topBtn" fluid color='orange' onClick={this._onTop}>
                {isTopping ? Lang.CANCELTOP : Lang.TOP}
              </Button>
            }

            <p></p>

            {shouldShowMoreBtn && <Button id="moreBtn" fluid color='grey' onClick={this._onMore}>{Lang.MORE}</Button>}

            <p></p>

            {(shouldShowDeleteBtn || isDeleted) && <Button id="deleteBtn" fluid color={isDeleted ? 'green' : 'red'} onClick={this._onDelete}>
              {isDeleted ? Lang.RECOVER : Lang.DELETE}
            </Button>}

            <p></p>

            {(shouldShowDeleteBtn || isDeleted) && <Button id="completeDeleteBtn" fluid color='red' onClick={this._onCompleteDelete}>
              {Lang.COMPLETEDELETE}
            </Button>}

            {
              (shouldShowDeleteBtn || isDeleted) && <p></p>
            }

            <Button id="cancelBtn" fluid onClick={onCancel}>{Lang.CANCEL}</Button>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

ListItemModal.propTypes = {
  target: React.PropTypes.object,
  onComplete: React.PropTypes.func,
  onTop: React.PropTypes.func,
  onDelete: React.PropTypes.func,
  onCancel: React.PropTypes.func,
};


export default ListItemModal