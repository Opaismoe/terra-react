import React from "react";
import { Embed, Grid } from "semantic-ui-react";

const ProjectVideo = ({ url, count = 16 }) => {

  /**
   * @description get the id (1234556) from the end of the url giving by expression engine.
   * @param {string} url 
   */
  const getId = (url) => {
    let vimUrl = url.split('/')
    let vimId = vimUrl[vimUrl.length-1]
    return vimId
  }

  const getPlaceholderImage = (url) => {
    let vimId = getId(url)
    let placeholderURL = `https://vumbnail.com/${vimId}.jpg`
    return placeholderURL
  }

  // TODO: fix this and stop using the api from vumbnail. 
  // function getVideoThumbnails(url) {
  //   let vimId = getId(url)
  //   fetch(`https://vimeo.com/api/v2/video/${vimId}.json`)
  //   .then(response => { return response.text() })
  //   .then(data => {
  //     const { thumbnail_large } = JSON.parse(data)[0];
  //     const large = thumbnail_large + ""
  //     console.log("" + large)
  //     return large
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // }

  return (
    <Grid.Column computer={count} stretched style={{ marginBottom: `2.5em`, paddingLeft: 0, paddingRight: 0 }}>
      <Embed
        id={getId(url)}
        source="vimeo"
        icon="play"
        placeholder={getPlaceholderImage(url)}
        color="#00b1dd"
        hd={true}
      />
    </Grid.Column>
  );
};

export default ProjectVideo;
