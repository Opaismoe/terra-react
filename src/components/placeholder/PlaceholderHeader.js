import React from 'react'
import { Placeholder } from 'semantic-ui-react'

const PlaceholderHeader = () => {
  return (
      <Placeholder fluid>
        <Placeholder.Header>
          <Placeholder.Line length="long"/>
          <Placeholder.Line />
        </Placeholder.Header>
      </Placeholder>
  )
}

export default PlaceholderHeader
