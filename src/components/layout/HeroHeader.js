import React from 'react'
import { Container, Header } from "semantic-ui-react";
// import './BigTitle.css'

const HeroHeader = ({title, date}) => {
  return (
    <Container fluid>
      <Header as="h2" content={title} subheader={date}/>
    </Container>
  )
}

export default HeroHeader
