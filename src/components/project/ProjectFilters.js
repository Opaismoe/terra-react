import React from "react";
import { Grid, Button } from "semantic-ui-react";

const ProjectFilters = ({ checkboxes, filterProjects}) => {
  const filters = [ "Motion", "Identiteit", "Online" ]
  
  return (
    <Grid container centered>
      <Grid.Row className="row">
        <Button.Group widths="4">
          <Button
            toggle
            active={!checkboxes}
            onClick={filterProjects}
            // value="Alle"
            animated="vertical"
            >
            <Button.Content visible>Alle projecten</Button.Content>
            <Button.Content hidden>Alle projecten</Button.Content>
          </Button>
          {filters.map((filter, i) => 
            <Button
              key={i}
              toggle
              active={checkboxes === filter}
              onClick={filterProjects}
              value={filter}
              animated="vertical"
            >
              <Button.Content visible>{filter}</Button.Content>
              <Button.Content hidden>{filter}</Button.Content>
            </Button>
            )}
        </Button.Group>
      </Grid.Row>
    </Grid>
  );
};

export default ProjectFilters;
