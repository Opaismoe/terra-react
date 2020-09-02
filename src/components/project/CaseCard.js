import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom"

const CaseCard = ({ project, sm, md, lg }) => {
  return (
    <Grid.Column mobile={sm} tablet={md} computer={lg} >
      <Link to={`/case/${project.case.url_title}`}>
        <Card fluid raised className="kasus__card" style={{ marginBottom: `2.5em` }}>
        <Image
            src={`https://terralemon.nl/img/projects/${project.image.split('/')[5]}`}
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
