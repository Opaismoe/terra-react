import React from "react";
import { Image, } from "semantic-ui-react";

const ProjectHeroImage = ({ oneProject }) => {
  return (
    <>
      {oneProject.map((project) => (
        <Image key={project.id} src={project.image} fluid />
      ))}
    </>
  );
};

export default ProjectHeroImage;
