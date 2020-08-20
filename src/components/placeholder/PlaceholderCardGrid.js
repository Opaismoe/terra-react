import React from "react";
import { Grid, Placeholder, Segment } from "semantic-ui-react";

const PlaceholderCardGrid = ({ cardCount }) => {
  return (
    <Grid columns={2} stackable>
      {[...Array(cardCount).keys()].map(() => (
      <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image fluid></Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
      </Grid.Column>
      ))}
    </Grid>
  );
};
export default PlaceholderCardGrid;
