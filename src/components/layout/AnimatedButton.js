import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const AnimatedButton = ({title, icon, clickHandler}) => (
  <div>
    <Button animated primary onClick={clickHandler}>
      <Button.Content visible>{title}</Button.Content>
      <Button.Content hidden>
        <Icon name={icon} />
      </Button.Content>
    </Button>
  </div>
)

export default AnimatedButton