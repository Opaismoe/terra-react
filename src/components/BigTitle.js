import React from 'react'
import { Grid, Header } from "semantic-ui-react";
import './BigTitle.css'

const BigTitle = ({ title }) => {
  return (
      <Grid textAlign="center">
        <Grid.Row style={style.row}>
          <Grid.Column largeScreen="7" mobile="16">
            <Header className="bigtitle" as="h2" content={title}/>
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
