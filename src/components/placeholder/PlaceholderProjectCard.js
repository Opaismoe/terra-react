import React from "react";
import { Placeholder, Grid, Card } from "semantic-ui-react";

const PlaceholderImage = ({ count, sm, md, lg }) => {
  return (
    <>
    {[...Array(count).keys()].map((index) => (
          <Grid.Column key={index} mobile={sm} tablet={md} computer={lg} >
            <Card fluid raised className="project__card">
              <Placeholder fluid style={{ maxHeight: `20em` }}>
                <Placeholder.Image rectangular/>
              </Placeholder>
            </Card>
          </Grid.Column>
      ))}
    </>
  );
};

export default PlaceholderImage;
