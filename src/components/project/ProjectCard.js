import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom"
import he from "he"

import "./ProjectCard.css"

const ProjectCard = ({ project, sm, md, lg }) => {
  return (
    <Grid.Column mobile={sm} tablet={md} computer={lg} >
      <Link to={`/project/${project.url_title}`}>
        <Card fluid raised className="project__card">
          <Image
            src={`https://terralemon.nl/img/projects/${project.image.split('/')[5]}`}
            centered
            fluid
            className="project__card__image"
          />
          <Card.Content className="project__card__content">
            <Card.Header className="project__card__title">
              <h3>{he.decode(project.title)}</h3>
            </Card.Header>
            <Card.Meta>{project.date}</Card.Meta>
          </Card.Content>
        </Card>
      </Link>
    </Grid.Column>
  );
};

export default ProjectCard;
