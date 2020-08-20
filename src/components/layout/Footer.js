import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { Button, Icon, Divider } from "semantic-ui-react";

const Footer = () => {
  return (
    <Container fluid textAlign="center" style={{ height: `150px`, fontFamily: `gotham-light`, }}>
      <Grid.Row >
        <Button icon color="youtube">
          <Icon name="youtube" />
        </Button>
        <Button icon style={{ background: `#19B7EA`, color: `white`}}>
          <Icon name="vimeo" />
        </Button>
        <Button icon color="linkedin">
          <Icon name="linkedin" />
        </Button>
      </Grid.Row>
      <Divider/>
      <Grid.Row
        as="footer"
        className="navbar navbar-default navbar-static-bottom text-center shrink"
      >
        © 2020 <span>Terralemon</span>,{" "}
        <span>Keizersgracht 75, 1015 CE Amsterdam</span>
      </Grid.Row>
    </Container>
  );
};

export default Footer;
