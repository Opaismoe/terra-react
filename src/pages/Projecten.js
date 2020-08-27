import React, { useState, useEffect } from "react";
import { Grid, Checkbox, Button } from "semantic-ui-react";

import { PlaceholderProjectCard, ProjectCard } from "../components/index";

import "./Projecten.css"

const Projecten = ({ projects, isLoading, setProjects }) => {
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
    setFiltered(projects) 
    setCheckboxes('Alle')
  }, [projects])


  return (
    <>
      <Grid container centered>
        <Grid.Row style={style.row}>
          <Button.Group widths="4">
            <Button toggle active={checkboxes === "Alle"} onClick={filterProjects} value="Alle">Alle projecten</Button>
            <Button.Or text=""/>
            <Button toggle active={checkboxes === "Motion"} onClick={filterProjects} value="Motion">Motion</Button>
            <Button.Or text=""/>
            <Button toggle active={checkboxes === "Identiteit"} onClick={filterProjects} value="Identiteit">Identiteit</Button>
            <Button.Or text=""/>
            <Button toggle active={checkboxes === "Online"} onClick={filterProjects} value="Online">Online</Button>
          </Button.Group>
        </Grid.Row>
      </Grid>
      <Grid container centered>
        <Grid.Row style={style.row}>
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
