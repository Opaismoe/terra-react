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
            animated
          >
            <Button.Content visible>Alle projecten</Button.Content>
            <Button.Content hidden>
              <Image src="https://www.terralemon.nl/img/general/terralemon_lemon.gif"></Image>
            </Button.Content>
          </Button>
          <Button
            toggle
            active={checkboxes === "Motion"}
            onClick={filterProjects}
            value="Motion"
          >
            Motion
          </Button>
          <Button
            toggle
            active={checkboxes === "Identiteit"}
            onClick={filterProjects}
            value="Identiteit"
          >
            Identiteit
          </Button>
          <Button
            toggle
            active={checkboxes === "Online"}
            onClick={filterProjects}
            value="Online"
          >
            Online
          </Button>
        </Button.Group>
      </Grid.Row>
    </Grid>
  );
};

export default ProjectFilters;
