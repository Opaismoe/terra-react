import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";

import {
  ProjectHeader,
  AnimatedButton,
  PlaceholderHeader,
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
        <Grid.Row style={style.row}>
          <ProjectHeader oneProject={kaseProjects} />
        </Grid.Row>
      </Grid>

      <Container fluid>
        <Grid.Row style={style.row}>
          {/* <ProjectHeroImage oneProject={oneProject} /> */}
        </Grid.Row>
      </Container>

      <Grid container centered>
        <Grid.Row style={style.row}>
          {/* <ProjectFluidContent oneProject={oneProject} /> */}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Case;

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
