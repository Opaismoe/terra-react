import React from 'react'
import { Grid, Header } from "semantic-ui-react";

const BigTitle = ({ title }) => {
  return (
      <Grid textAlign="center">
        <Grid.Row style={style.row}>
          <Grid.Column largeScreen="7" mobile="16">
            <Header>
              <h2 className="bigtitle">{title}</h2>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
}

const style = {
  row: {
    margin: `5em auto`,
    justifyContent: `center`,
  },
};


export default BigTitle
