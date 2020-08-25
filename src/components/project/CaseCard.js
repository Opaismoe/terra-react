import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom"
import he from "he"

// import "./ProjectCard.css"

const CaseCard = ({ project, sm, md, lg }) => {
  return (
    <Grid.Column mobile={sm} tablet={md} computer={lg} >
      <Link to={`/case/${project.case.url_title}`}>
        <Card fluid raised className="kasus__card">
        <Image
            src={project.image}
            fluid
            className="project__card__image"
          />
          <Card.Content className="kasus__card__content">
            <Card.Header as="h5" className="kasus__card__title">
              {project.case.subtitle ? project.case.subtitle : project.case.title}
            </Card.Header>
            <Card.Meta>{project.case.formated_entry_date}</Card.Meta>
          </Card.Content>
        </Card>
      </Link>
    </Grid.Column>
  );
};

export default CaseCard;
