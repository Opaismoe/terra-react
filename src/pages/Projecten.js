import React from "react";
import { Grid, Transition } from "semantic-ui-react";

import ProjectCard from "../components/ProjectCard";

const Projecten = ({ projects, isLoading }) => {
  return (
    <>
      <Transition visible={!isLoading} animation='fade' duration={450}>
        <Grid container centered>
          <Grid.Row style={style.row}>
            {projects.map((project, index) => {
              if (index <= 3) {
                return (
                  <ProjectCard key={project.id} project={project} size={8} />
                );
              } else {
                return (
                  <ProjectCard key={project.id} project={project} size={4} />
                );
              }
            })}
          </Grid.Row>
        </Grid>
      </Transition>
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
