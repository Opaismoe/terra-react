import React from "react";
import { Image, } from "semantic-ui-react";

const ProjectHeroImage = ({ project }) => {
  return (
    <>
      <Image key={project.id} src={project.image} fluid />
    </>
  );
};

export default ProjectHeroImage;
