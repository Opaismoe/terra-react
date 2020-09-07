import React from "react";
import { Image, Container, Grid } from "semantic-ui-react";

const ProjectHeroImage = ({ project }) => {
  return (
    <>
      {project.map((content) =>
        content.image ? (
          <Container fluid>
            <Grid.Row className="row">
              <Image key={content.id} src={content.image} fluid />
            </Grid.Row>
          </Container>
        ) : null
      )}
    </>
  );
};

export default ProjectHeroImage;
