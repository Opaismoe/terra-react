import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import VideoHeader from '../components/VideoHeader'
import video from '../videos/vid_bg.mp4'
import CardReveal from '../components/CardReveal'

const About = () => {
  return (
    <>
      <Container fluid>
        <VideoHeader video={video} />
      </Container>

      <Grid container style={{ marginTop: `5em`, }}>
        <Grid.Row centered>
          <CardReveal/>
          <CardReveal/>
          <CardReveal/>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default About
