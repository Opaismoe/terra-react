import React from 'react'
import { Placeholder } from 'semantic-ui-react'

const PlaceholderHeader = () => {
  return (
      <Placeholder fluid>
        <Placeholder.Header>
          <Placeholder.Line length="long"/>
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
  )
}

export default PlaceholderHeader
