import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './AnimatedButton.css'


const AnimatedButton = ({title, icon, clickHandler, basic}) => (
  <div>
    <Button animated basic={basic} onClick={clickHandler} className="btn-animated">
      <Button.Content visible>{title}</Button.Content>
      <Button.Content hidden>
        <Icon name={icon} />
      </Button.Content>
    </Button>
  </div>
)

export default AnimatedButton