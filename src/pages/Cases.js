import React from "react";
import { Grid } from "semantic-ui-react";

import { PlaceholderProjectCard, CaseCard } from "../components/index";

const Cases = ({ projects, isLoading }) => {
  let kasusen = projects.map((project) => project.case);
  let scrambledProjects = projects.sort(function (a, b) {return Math.random() - 0.5;});

  return (
    <>
      <Grid container centered>
        <Grid.Row className="row justify__center">
          {isLoading && (
            <PlaceholderProjectCard count={4} sm={12} md={8} lg={8} />
          )}
          {isLoading && (
            <PlaceholderProjectCard count={1} sm={12} md={8} lg={16} />
          )}
          {isLoading && (
            <PlaceholderProjectCard count={16} sm={12} md={8} lg={4} />
          )}
          {scrambledProjects.map((project, index) => (
            <CaseCard
              key={index}
              project={project}
              sm={12}
              md={8}
              lg={8}
            />
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Cases;

const style = {
  row: {
    marginTop: `2.5em`,
    justifyContent: `center`,
  },
};
