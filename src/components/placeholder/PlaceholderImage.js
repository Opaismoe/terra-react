import React from "react";
import { Placeholder } from "semantic-ui-react";

const PlaceholderImage = () => {
  return (
    <>
      <Placeholder fluid>
        <Placeholder.Image rectangular />
      </Placeholder>
    </>
  );
};

export default PlaceholderImage;
