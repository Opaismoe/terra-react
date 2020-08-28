import React from "react";
import { Button, Icon, Popup } from "semantic-ui-react";

import "./ScrollToTopButton.css"

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Popup
     content="go to top"
     position="left center"
     inverted
     size="small"
     trigger={
      <Button className="bg-primary" onClick={handleClick} animated="vertical" floated="right">
        <Button.Content hidden>
          <Icon name="chevron up" />
        </Button.Content>
        <Button.Content className="button" visible>
          <Icon name="chevron up" />
        </Button.Content>
      </Button>
     }
    />
      
  );
};

export default ScrollToTopButton;
