import React, { useState } from 'react'
import { Container, Grid, Card } from 'semantic-ui-react'
import VideoHeader from '../components/VideoHeader'
import bgVideo from '../videos/vid_bg.mp4'
import CardReveal from '../components/CardReveal'

const About = () => {
  return (
    <>
      <Container fluid>
        <VideoHeader video={bgVideo} />
      </Container>
      <Grid container>
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
