import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "semantic-ui-react";

import { PlaceholderProjectCard, CaseCard } from "../components/index";

const Cases = ({ projects, isLoading }) => {
  return (
    <>
      <Helmet>
        <title>Terralemon | Cases</title>
      </Helmet>
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
          {projects.map((project, index) => (
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