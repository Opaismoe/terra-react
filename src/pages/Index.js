import React from "react";
import { Grid, Header } from "semantic-ui-react";

import VideoVimeo from "../components/VideoVimeo";

const Index = () => {
  return (
    <>
      <VideoVimeo/>

      <Grid padded textAlign="center">
        <Grid.Row style={style.row}>
          <Header>
            <h2 className="bigtitle">Wij zijn een digital design agency.</h2>
          </Header>
        </Grid.Row>
      </Grid>
      <Grid padded textAlign="center">
        <Grid.Row style={style.row}>
          <Header>
            <h2 className="header__2">Projecten</h2>
          </Header>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Index;

const style = {
  row: {
    marginTop: `2.5em`,
    justifyContent: `center`,
  },
};
