import React from "react";
import { Placeholder } from "semantic-ui-react";

const PlaceholderImage = ({ count = 1 }) => {
  console.log(count)
  return (
    <>
    {[...Array(count).keys()].map((index) => (
      <Placeholder key={index} fluid>
        <Placeholder.Image rectangular />
      </Placeholder>
      ))}
    </>
  );
};

export default PlaceholderImage;
