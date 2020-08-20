import React from "react";
import { Grid } from "semantic-ui-react";

import { PlaceholderProjectCard, ProjectCard } from "../components/index";

const Projecten = ({ projects, isLoading }) => {
  return (
    <>
      <Grid container centered>
        <Grid.Row style={style.row}>
          {isLoading && <PlaceholderProjectCard count={4} sm={12} md={8} lg={8} />}
          {isLoading && <PlaceholderProjectCard count={1} sm={12} md={8} lg={16} />}
          {isLoading && <PlaceholderProjectCard count={16} sm={12} md={8} lg={4} />}
          {projects.map((project, index) => {
            if (index <= 3) {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  sm={12}
                  md={8}
                  lg={8}
                />
              );
            } else if (index === 4) {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  sm={12}
                  md={8}
                  lg={16}
                />
              );
            } else {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  sm={12}
                  md={8}
                  lg={4}
                />
              );
            }
          })}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Projecten;

const style = {
  row: {
    marginTop: `2.5em`,
    justifyContent: `center`,
  },
};
