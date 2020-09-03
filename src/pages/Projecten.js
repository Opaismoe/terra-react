import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";

import {
  PlaceholderProjectCard,
  ProjectCard,
  ProjectFilters,
} from "../components/index";

import "./Projecten.css";

const Projecten = ({ projects, isLoading }) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // TODO: improve this please..
  const filterProjects = (event, { value }) => {
    if (value) {
      let filteredProjects = projects
        .filter((project) => project.categories.includes(value))
        .map((filtered) => {
          return filtered;
        });
        setFiltered(filteredProjects);
      } else {
        setFiltered(projects);
      }
    setCheckboxes(value);
  };

  useEffect(() => {
    setFiltered(projects);
    setCheckboxes();
  }, [projects]);

  return (
    <>
      <ProjectFilters checkboxes={checkboxes} filterProjects={filterProjects} />

      <Grid container centered>
        <Grid.Row className="row">
          {isLoading && (
            <PlaceholderProjectCard count={4} sm={12} md={8} lg={8} />
          )}
          {isLoading && (
            <PlaceholderProjectCard count={1} sm={12} md={8} lg={16} />
          )}
          {isLoading && (
            <PlaceholderProjectCard count={16} sm={12} md={8} lg={4} />
          )}
          {filtered &&
            filtered.map((project, index) => {
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