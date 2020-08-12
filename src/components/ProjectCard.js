import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import './ProjectCard.css';


const ProjectCard = ({ project, size }) => {
  const unescapedText = (data) => {
    // const summary = document.querySelector('.summary')
    let parser = new DOMParser();
    let doc = parser.parseFromString(data, "text/html");
    doc.childNodes[0].childNodes.forEach((elem) => {
      elem.childNodes.forEach((child) => {
        let p = child.data.slice(0, 3);
        if (p === "<p>") {
          console.log(child.data);
          return child.data;
        }
      });
    });
  };

  return (
    <Grid.Column largeScreen={size}>
      <Card fluid raised className="project__card">
        <Image src={project.image} wrapped ui={false} className="project__card__image"/>
        <Card.Content className="project__card__content">
          <Card.Header className="project__card__title">
            <h3>{project.title}</h3>
          </Card.Header>
          <Card.Meta>{project.date}</Card.Meta>
          {/* <Card.Description>{project.summary}</Card.Description> */}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default ProjectCard;
