import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const AnimatedButton = ({title, icon}) => (
  <div>
    <Button animated primary floated="left">
      <Button.Content visible>{title}</Button.Content>
      <Button.Content hidden>
        <Icon name={icon} />
      </Button.Content>
    </Button>
  </div>
)

export default AnimatedButton