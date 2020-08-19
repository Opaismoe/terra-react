import React from "react";
import { Embed } from "semantic-ui-react";

const ProjectVideo = ({ id }) => {
  const getId = (id) => {
    let vimId = id.split('/')
    console.log(vimId[vimId.length-1])
    return vimId[vimId.length-1]
  }

  return (
    <>
      <Embed
        id={getId(id)}
        placeholder="/images/vimeo-example.jpg"
        source="vimeo"
      />
    </>
  );
};

export default ProjectVideo;
