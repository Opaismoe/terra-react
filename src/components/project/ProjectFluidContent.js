import React from "react";

import he from "he";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../components/awesome-slider-custom.css";
import { Header } from "semantic-ui-react";
import ProjectVideo from "./ProjectVideo";

const ProjectFluidContent = ({ oneProject }) => {
  /**
   * @param {object} content encoded html entities from expression engine's backend
   */
  const createMarkup = (content) => {
    let data = he.decode(content);
    return { __html: data };
  };

  return (
    <>
      {oneProject[0]?.fluid_content?.map((content, i) =>
        content.content ? (
          <div
            key={i}
            dangerouslySetInnerHTML={createMarkup(content.content)}
            className="row fluid__content"
          ></div>
        ) : content.image_project ? (
          <img
            key={i}
            src={content.image_project}
            alt={content.image_project}
          ></img>
        ) : content.subtitle ? (
          <Header key={i}>
            <h4>{he.decode(content.subtitle)}</h4>
          </Header>
        ) : content.image_gallery ? (
          <AwesomeSlider key={i} bullets={false}>
            {content.image_gallery.map((src) => (
              <img key={i} data-src={`https://terralemon.nl/img/projects_gallery/${src.split('/')[5]}`} alt={`https://terralemon.nl/img/projects/${src.split('/')[5]}`} />
            ))}
          </AwesomeSlider>
        ) : content.video_gallery ? (
          content.video_gallery.map((url, index) => (
            <ProjectVideo key={index} url={url} />
          ))
        ) : null
      )}
    </>
  );
};

export default ProjectFluidContent;
