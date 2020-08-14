import React from 'react'

import './VideoHeader.css'
import { Grid, Card } from 'semantic-ui-react'

const VideoHeader = ({video}) => {
  return (
    <>
      <div className="video__hero__container__overlay">
        <video className="video__hero__container" autoPlay loop muted>
          <source className="video__source" src={video} type="video/mp4" />
        </video>
        <Grid>
          <Grid.Row>
            <Card as={Grid.Column}>
              <Card.Content>
                <h1>Hello</h1>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid>
      </div>
    </>
  )
}

export default VideoHeader
