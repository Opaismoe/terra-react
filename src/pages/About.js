import React from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import VideoHeader from '../components/VideoHeader'
import video from '../videos/vid_bg.mp4'
import CardReveal from '../components/CardReveal'
import './About.css'

const About = () => {
  return (
    <>
      <Container fluid>
        <VideoHeader video={video} />
      </Container>

      <Container>
      <Card.Group itemsPerRow={4}>
          <CardReveal title="Strategie" listItems={["Briefing", "Doelgroep onderzoek", "Strategie", "Concept"]}/>
          <CardReveal title="Design" listItems={["Moodboard", "Gebruiker scenario's", "Interactie ontwerp", "Storyboard", "Grafisch ontwerp"]}/>
          <CardReveal title="Realisatie" listItems={["Front end development", "Content managment systeem", "Motion compositie en montage", "Animatie en modeling", "Copy writing"]}/>
          <CardReveal title="Groei" listItems={["Stijlgids", "Website analytics", "Campagnes"]}/>
        </Card.Group>
      </Container>

      <Container>
        <Card.Group itemsPerRow={3}>
          <Card raised className="card">
          <Image
            src="//terralemon.nl/img/people/_square/manon_new2.jpg"
            fluid
            className="card__image"
          />
          <Card.Content className="profile__content">
            <Card.Header>Manon van der Wal</Card.Header>
            <Card.Meta>Design en strategie</Card.Meta>
          </Card.Content>
          </Card>
          <Card raised className="card">
          <Image
            src="//terralemon.nl/img/people/_square/dewi-de-bue-2.jpg"
            fluid
            className="card__image"
          />
          <Card.Content className="profile__content">
            <Card.Header>Dewi de Bue</Card.Header>
            <Card.Meta>Motion designer</Card.Meta>
          </Card.Content>
          </Card>
          <Card raised className="card">
          <Image
            src="//terralemon.nl/img/people/_square/lidy1.jpg"
            fluid
            className="card__image"
          />
          <Card.Content className="profile__content">
            <Card.Header>Lidy van Blitterswijk</Card.Header>
            <Card.Meta>Designer</Card.Meta>
          </Card.Content>
          </Card>
        </Card.Group>

        <Card.Group itemsPerRow={2}>
          <Card raised className="card">
          <Image
            src="//terralemon.nl/img/people/_square/benjamin-kuijper-1.jpg"
            fluid
            className="card__image"
          />
          <Card.Content className="profile__content">
            <Card.Header>Benjamin Kuijper</Card.Header>
            <Card.Meta>Design en strategie</Card.Meta>
          </Card.Content>
          </Card>
          <Card raised className="card">
          <Image
            src="//terralemon.nl/img/people/_square/harold_kuiper2.jpg"
            fluid
            className="card__image"
          />
          <Card.Content className="profile__content">
            <Card.Header>Harold Kuiper</Card.Header>
            <Card.Meta>Design en strategie</Card.Meta>
          </Card.Content>
          </Card>
        </Card.Group>
        
      </Container>  
    </>
  )
}

export default About


// <div class="container">
// <div class="row no-gutter">
// <div class="grid" style="position: relative; height: 1520px;">
// <div class="col-md-4 col-sm-6 grid-sizer grid-item " style="position: absolute; left: 0%; top: 0px;">
//         <article><div title="Manon van der Wal" class="thumbnail people delay_1">
// <div class="frame">
// 	<img src="/img/people/_square/manon_new2.jpg" alt="Manon van der Wal" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
// 			<blockquote>Een goede identiteit versterkt het charisma van een merk.</blockquote>
// 			<h3>Manon van der Wal</h3>
// 			<small>Design en strategie</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>
// 	</div><div class="col-md-4 col-sm-6 grid-item hidden-xs" style="position: absolute; left: 33.3333%; top: 0px;">
//         <article><div title="Dewi de Bue" class="thumbnail people delay_2">
// <div class="frame">
// 	<img src="/img/people/_square/dewi-de-bue-2.jpg" alt="Dewi de Bue" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
			
// 			<h3>Dewi de Bue</h3>
// 			<small>Motion designer</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>
// 	</div><div class="col-md-4 col-sm-6 grid-item hidden-xs" style="position: absolute; left: 66.6667%; top: 0px;">
//         <article><div title="Lidy van Blitterswijk" class="thumbnail people delay_3">
// <div class="frame">
// 	<img src="/img/people/_square/lidy1.jpg" alt="Lidy van Blitterswijk" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
// 			<blockquote>Gradients. Overal gradients.</blockquote>
// 			<h3>Lidy van Blitterswijk</h3>
// 			<small>Designer</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>
// 	</div><div class="col-md-4 col-sm-6 grid-item hidden-xs" style="position: absolute; left: 0%; top: 380px;">
//         <article><div title="Harold Kuiper" class="thumbnail people delay_4">
// <div class="frame">
// 	<img src="/img/people/_square/harold_kuiper2.jpg" alt="Harold Kuiper" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
			
// 			<h3>Harold Kuiper</h3>
// 			<small>Creative director</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>
// 	</div><div class="col-md-8 col-sm-6 grid-item hidden-xs" style="position: absolute; left: 33.3333%; top: 380px;">
        
// <article><div title="Benjamin Kuijper" class="thumbnail people large delay_5">
// <div class="frame">
// 	<img src="/img/people/_square/benjamin-kuijper-1.jpg" alt="Benjamin Kuijper" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
// 			<blockquote>Motion is at the heart of the matter</blockquote>
// 			<h3>Benjamin Kuijper</h3>
// 			<small>Junior motion designer</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>

// 	</div><div class="col-md-4 col-sm-6 grid-item hidden-xs" style="position: absolute; left: 0%; top: 760px;">
//         <article><div title="Remco van Kesteren" class="thumbnail people delay_6">
// <div class="frame">
// 	<img src="/img/people/_square/remco_new2.jpg" alt="Remco van Kesteren" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
			
// 			<h3>Remco van Kesteren</h3>
// 			<small>Creative director</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>
// 	</div><div class="col-md-4 col-sm-6 grid-item hidden-xs" style="position: absolute; left: 0%; top: 1140px;">
//         <article><div title="Ayrton Spierts" class="thumbnail people delay_7">
// <div class="frame">
// 	<img src="/img/people/_square/ayrton_nw2.jpg" alt="Ayrton Spierts" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
// 			<blockquote>Elk frame moet er goed uit zien. Elk beeld krijgt aandacht, het maakt een mooier geheel.</blockquote>
// 			<h3>Ayrton Spierts</h3>
// 			<small>Motion artdirector</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>
// 	</div><div class="col-md-4 col-sm-6 grid-item hidden-xs" style="position: absolute; left: 33.3333%; top: 1140px;">
//         <article><div title="Wiebe Buursink" class="thumbnail people delay_8">
// <div class="frame">
// 	<img src="/img/people/_square/wiebe_buursink3.jpg" alt="Wiebe Buursink" class="image">
// </div>
// <div class="caption">
// 	<div class="row">
// 		<div class="col-lg-8 col-lg-offset-4 col-sm-11 col-sm-offset-1 col-xs-8 col-xs-offset-4">
			
// 			<h3>Wiebe Buursink</h3>
// 			<small>Front-end development</small>
// 		</div>
// 	</div> <!-- row -->
// </div>
// </div></article>
// 	</div>
// </div>
// </div> <!-- row -->
// </div>