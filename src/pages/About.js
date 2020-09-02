import React from "react";
import {
  Container,
  Card,
  Image,
  Grid,
  Divider,
  Item,
  Segment,
} from "semantic-ui-react";
import video from "../videos/vid_bg.mp4";
import { VideoHeader, BigTitle } from "../components/";
import "./About.css";

const About = () => {
  return (
    <>
      <Container fluid>
        <VideoHeader video={video} />
      </Container>
      
      <Container>
        <BigTitle title="Wij zijn Terralemon" />
        <Card.Group itemsPerRow={3}>
          <Card
            raised
            className="card"
          >
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
          <Card
            raised
            className="card"
          >
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
          <Card
            raised
            className="card"
          >
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
          <Card
            raised
            className="card"
          >
            <Image
              src="//terralemon.nl/img/people/_square/benjamin-kuijper-1.jpg"
              fluid
              className="card__image"
            />
            <Card.Content className="profile__content">
              <Card.Header>Benjamin Kuijper</Card.Header>
              <Card.Meta>Junior motion designer</Card.Meta>
            </Card.Content>
          </Card>
          <Card
            raised
            className="card"
          >
            <Image
              src="//terralemon.nl/img/people/_square/harold_kuiper2.jpg"
              fluid
              className="card__image"
            />
            <Card.Content className="profile__content">
              <Card.Header>Harold Kuiper</Card.Header>
              <Card.Meta>Creative director</Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>

        <Card.Group itemsPerRow={3}>
          <Card
            raised
            className="card"
          >
            <Image
              src="//terralemon.nl/img/people/_square/remco_new2.jpg"
              fluid
              className="card__image"
            />
            <Card.Content className="profile__content">
              <Card.Header>Remco van Kesteren</Card.Header>
              <Card.Meta>Creative director</Card.Meta>
            </Card.Content>
          </Card>

          <Card
            raised
            className="card"
          >
            <Image
              src="//terralemon.nl/img/people/_square/ayrton_nw2.jpg"
              fluid
              className="card__image"
            />
            <Card.Content className="profile__content">
              <Card.Header>Ayrton Spierts</Card.Header>
              <Card.Meta>Motion designer</Card.Meta>
            </Card.Content>
          </Card>

          <Card
            raised
            className="card"
          >
            <Image
              src="//terralemon.nl/img/people/_square/wiebe_buursink3.jpg"
              fluid
              className="card__image"
            />
            <Card.Content className="profile__content">
              <Card.Header>Wiebe Buursink</Card.Header>
              <Card.Meta>Frontend developer</Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>

      <Segment tertiary>
        <Grid container columns={2} relaxed="very">
          <Grid.Column>
            <iframe
              style={{ marginWidth: 0, marginHeight: 0, border: 0, width: `100%`, height: `350px` }}
              title="maps"
              src="https://maps.google.nl/maps?f=q&amp;source=s_q&amp;hl=nl&amp;geocode=&amp;q=Keizersgracht+75,+Jordaan,+Amsterdam&amp;sll=52.377934,4.88177&amp;sspn=0.01137,0.018625&amp;ie=UTF8&amp;hq=&amp;hnear=Keizersgracht+75,+1015+CE+Centrum,+Amsterdam,+Noord-Holland&amp;t=m&amp;ll=52.380839,4.883509&amp;spn=0.009169,0.020428&amp;z=15&amp;iwloc=A&amp;output=embed"
            ></iframe>
          </Grid.Column>
          <Grid.Column as={Item}>
            <Item.Content>
              <Item.Header as="h3">Terralemon</Item.Header>

              <Item.Meta>Keizersgracht 75</Item.Meta>
              <Item.Meta>1015 CE, Amsterdam</Item.Meta>
              <Item.Meta>020-6248300</Item.Meta>
              <Item.Meta>KvK-nummer: 30168626</Item.Meta>
              <Item.Meta>BTW-nummer: NL809311495B01</Item.Meta>
            </Item.Content>
          </Grid.Column>
        </Grid>
        <Divider vertical fitted>
          Or
        </Divider>
      </Segment>
    </>
  );
};

export default About;
