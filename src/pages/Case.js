import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";

import {
  ProjectHeader,
  AnimatedButton,
  PlaceholderHeader,
  ProjectFluidContent,
  ProjectHeroImage
} from "../components/index";

const Case = ({ projects, isLoading }) => {
  const { url_title } = useParams();
  const history = useHistory();
  const [kaseProjects, setKaseProjects] = useState([]);

  useEffect(() => {
  const getProject = async () => {
    let kaseProjects = projects.filter((project) => project.case.url_title === url_title )
    .map((filteredProjects) => filteredProjects)
    setKaseProjects(kaseProjects)
  };
  getProject()
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
        <Grid.Row className="row">
          <ProjectHeader oneProject={kaseProjects} />
        </Grid.Row>
      </Grid>

      <Container fluid>
        <Grid.Row className="row">
          <ProjectHeroImage oneProject={kaseProjects} />
        </Grid.Row>
      </Container>

      <Grid container centered>
        <Grid.Row className="row">
          <ProjectFluidContent oneProject={kaseProjects} />
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Case;

const style = {
  btn: {
    marginLeft: 0,
    position: `absolute`,
    left: 0,
  },
};
