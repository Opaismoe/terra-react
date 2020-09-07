import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
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
    try {
      let kaseProjects = projects.filter((project) => project.case.url_title === url_title )
      .map((filteredProjects) => filteredProjects)
      setKaseProjects(kaseProjects)
    } catch (error) {
      console.error(`error ${error}`)
    }
  };
  getProject()
}, [projects, url_title]);

  return (
    <>
      <AnimatedButton
        title="Terug"
        basic
        icon="long arrow alternate left"
        clickHandler={() => history.goBack()}
      />

      {isLoading && (
        <Container text>
          <PlaceholderHeader />
        </Container>
      )}

      <ProjectHeader project={kaseProjects} />
      <ProjectHeroImage project={kaseProjects} />
      <ProjectFluidContent project={kaseProjects} />
    </>
  );
};

export default Case;