import React from "react";
import { Image, } from "semantic-ui-react";

const ProjectHeroImage = ({ oneProject }) => {
  return (
    <>
      {oneProject.map((project) => (
        <Image key={project.id} src={`https://terralemon.nl/img/projects/${project.image.split('/')[5]}`} fluid />
      ))}
    </>
  );
};

export default ProjectHeroImage;
