import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom"
import "./ProjectCard.css";

const ProjectCard = ({ project, sm, md, lg }) => {
  return (
    <Grid.Column mobile={sm} tablet={md} computer={lg} >
      <Card fluid raised className="project__card">
        <Image
          src={project.image}
          wrapped
          ui={false}
          className="project__card__image"
        />
        <Card.Content className="project__card__content">
          <Card.Header className="project__card__title">
            <h3>{project.title}</h3>
          </Card.Header>
          <Card.Meta>{project.date}</Card.Meta>
          <Card.Description>
            <Link to={`/project/${project.url_title}`}>Lees meer hier: { project.url_title }</Link>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default ProjectCard;
