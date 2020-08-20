import React from "react";
import { Embed, Grid } from "semantic-ui-react";

const ProjectVideo = ({ id }) => {
  const getId = (id) => {
    let vimId = id.split('/')
    console.log(vimId[vimId.length-1])
    return vimId[vimId.length-1] + "" // has to return a string as id-prop
  }

  return (
    <Grid.Column computer={5} stretched style={{ marginBottom: `2.5em` }}>
      <Embed
        id={getId(id)}
        // placeholder="/images/vimeo-example.jpg"
        source="vimeo"
        icon="play"
        color="#00b1dd"
        hd
      />
    </Grid.Column>
  );
};

export default ProjectVideo;
