import React from "react";
import { Embed, Grid } from "semantic-ui-react";

const ProjectVideo = ({ id }) => {
  const getId = (id) => {
    let vimId = id.split('/')
    console.log(vimId[vimId.length-1])
    return vimId[vimId.length-1] + "" // has to return a string as id-prop
  }

  return (
    <Grid.Column computer={5}>
      <Embed
        id={getId(id)}
        // placeholder="/images/vimeo-example.jpg"
        source="vimeo"
        hd={true}
      />
    </Grid.Column>
  );
};

export default ProjectVideo;
