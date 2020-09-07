import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";

import {
  ProjectHeader,
  ProjectHeroImage,
  ProjectFluidContent,
  PlaceholderHeader,
  ProjectVideo,
  AnimatedButton,
  ScrollToTop,
  ScrollToTopButton
} from "../components/index";

import "react-awesome-slider/dist/styles.css";
import "../components/awesome-slider-custom.css";

const Project = ({ projects, isLoading }) => {
  const { url_title } = useParams();
  const history = useHistory();
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      let project = projects
        .filter((project) => project.url_title === url_title)
        .map((filteredProject) => {
          return filteredProject;
        });
      setProject(project);
    };
    getProject();
  }, [projects, url_title]);

  return (
    <>
      <ScrollToTop/>
      <AnimatedButton
        basic={true}
        title="Terug"
        icon="long arrow alternate left"
        clickHandler={() => history.goBack()}
        style={style.btn}
      />

      {isLoading && (
        <Container text>
          <PlaceholderHeader />
        </Container>
      )}

      <ProjectHeader project={project} />
      <ProjectHeroImage project={project} />
      <ProjectFluidContent project={project} />

  
      <Grid container centered>
        <Grid.Row className="row">
          {project.map((project, i) => (
              project.videos.map((url, index) => (
                <ProjectVideo key={index} url={url} />
              ))
          ))}
          </Grid.Row>
      </Grid>
      
      <ScrollToTopButton/>
    </>
  );
};

export default Project;

const style = {
  btn: {
    marginLeft: 0,
    position: `absolute`,
    left: 0,
  },
};
