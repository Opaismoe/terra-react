import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../components/awesome-slider-custom.css";
import { Header } from "semantic-ui-react";

const ProjectFluidContent = ({ oneProject }) => {
  return (
    <>
      {oneProject[0]?.fluid_content.map((content, i) =>
        content.content ? (
          <p key={i}>{content.content}</p>
        ) : content.image_project ? (
          <img
            key={i}
            src={content.image_project}
            alt={content.image_project}
          ></img>
        ) : content.subtitle ? (
          <Header key={i}>
            <h4>{content.subtitle}</h4>
          </Header>
        ) : content.image_gallery ? (
          <AwesomeSlider key={i} bullets={false}>
          {content.image_gallery.map(src => (
            <img key={i} data-src={src} alt={src} />
          ))}
          </AwesomeSlider>
        ) : null
      )}
    </>
  );
};

export default ProjectFluidContent;