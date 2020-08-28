import React from "react";
import { Grid, Button, Image } from "semantic-ui-react";

const ProjectFilters = ({ checkboxes, filterProjects}) => {
  return (
    <Grid container centered>
      <Grid.Row className="row">
        <Button.Group widths="4">
          <Button
            toggle
            active={checkboxes === "Alle"}
            onClick={filterProjects}
            value="Alle"
            animated="vertical"
          >
            <Button.Content visible>Alle projecten</Button.Content>
            <Button.Content hidden>Alle projecten</Button.Content>
          </Button>
          <Button
            toggle
            active={checkboxes === "Motion"}
            onClick={filterProjects}
            value="Motion"
            animated="vertical"
          >
            <Button.Content visible>Motion</Button.Content>
            <Button.Content hidden>Motion</Button.Content>
          </Button>
          <Button
            toggle
            active={checkboxes === "Identiteit"}
            onClick={filterProjects}
            value="Identiteit"
            animated="vertical"
          >
            <Button.Content visible>Identiteit</Button.Content>
            <Button.Content hidden>Identiteit</Button.Content>
            
          </Button>
          <Button
            toggle
            active={checkboxes === "Online"}
            onClick={filterProjects}
            value="Online"
            animated="vertical"
          >
            <Button.Content visible>Online</Button.Content>
            <Button.Content hidden>Online</Button.Content>
          </Button>
        </Button.Group>
      </Grid.Row>
    </Grid>
  );
};

export default ProjectFilters;
