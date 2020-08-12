import React from "react";
import { Grid, Header } from "semantic-ui-react";

import VideoVimeo from "../components/VideoVimeo";
import MainCarousel from "../components/MainCarousel";

const Index = () => {
  return (
    <>
      <VideoVimeo/>

      <Grid textAlign="center">
        <Grid.Row style={style.row}>
          <Grid.Column width="7">
            <Header>
              <h2 className="bigtitle">Wij zijn een digital design agency.</h2>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <MainCarousel/>

      <Grid textAlign="center">
        <Grid.Row style={style.row}>
          <Grid.Column width="7">
            <Header>
              <h2 className="bigtitle">Wij geloven dat krachtige ideeën en intelligent design merken en organisaties versterken.</h2>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </>
  );
};

export default Index;

const style = {
  row: {
    margin: `5em auto`,
    justifyContent: `center`,
  },
};
