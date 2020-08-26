import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";

import AnimatedButton from "../components/AnimatedButton";

import {
  ProjectHeader,
  ProjectHeroImage,
  ProjectFluidContent,
  PlaceholderHeader,
  ProjectVideo
} from "../components/index";

import "react-awesome-slider/dist/styles.css";
import "../components/awesome-slider-custom.css";

const Project = ({ projects, isLoading }) => {
  const { url_title } = useParams();
  const history = useHistory();
  const [oneProject, setOneProject] = useState([]);

  useEffect(() => {
    const getOneProject = async () => {
      let oneProject = projects
        .filter((project) => project.url_title === url_title)
        .map((filteredProject) => {
          return filteredProject;
        });
      setOneProject(oneProject);
    };
    getOneProject();
  }, [projects, url_title]);

  return (
    <>
      <AnimatedButton
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

      <Grid container centered>
        <Grid.Row style={style.row}>
          <ProjectHeader oneProject={oneProject} />
        </Grid.Row>
      </Grid>

      <Container fluid>
        <Grid.Row style={style.row}>
          <ProjectHeroImage oneProject={oneProject} />
        </Grid.Row>
      </Container>

      <Grid container centered>
        <Grid.Row style={style.row}>
          <ProjectFluidContent oneProject={oneProject} />
        </Grid.Row>
      </Grid>
  
      <Grid container centered>
        <Grid.Row style={style.row}>
          {oneProject.map((project, i) => (
              project.videos.map((url, index) => (
                <ProjectVideo key={index} url={url} />
              ))
          ))}
          </Grid.Row>
      </Grid>
    </>
  );
};

export default Project;

const style = {
  row: {
    marginTop: `2.5em`,
    // justifyContent: `center`,
  },
  btn: {
    marginLeft: 0,
    position: `absolute`,
    left: 0,
  },
};
