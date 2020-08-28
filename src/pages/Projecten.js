import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";

import {
  PlaceholderProjectCard,
  ProjectCard,
  ProjectFilters,
} from "../components/index";

import "./Projecten.css";

const Projecten = ({ projects, isLoading }) => {
  const [checkboxes, setCheckboxes] = useState(["Alle"]);
  const [filtered, setFiltered] = useState([]);

  const filterProjects = (event, { value }) => {
    if (checkboxes === "Alle" || value === "Alle") {
      setFiltered(projects);
    } else {
      let filteredProjects = projects
        .filter((project) => project.categories.includes(value))
        .map((filtered) => {
          return filtered;
        });
      setFiltered(filteredProjects);
    }
    setCheckboxes(value);
  };

  useEffect(() => {
    setFiltered(projects);
    setCheckboxes("Alle");
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

const style = {
  row: {
    marginTop: `2.5em`,
    justifyContent: `center`,
  },
};
