import React from 'react'
import { Button } from 'semantic-ui-react'


const AddBtn = ({
  click
}) => (
  <div id="AddBtn">
    <Button id='floatFunctionBtn' className='ovalButton MultiFunctionBtn' size='massive' icon='plus' circular color='twitter' onClick={click} />
  </div>
)

AddBtn.propTypes = {
  click: React.PropTypes.func,
};

export default AddBtn