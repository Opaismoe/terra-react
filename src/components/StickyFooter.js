import React from "react";
import { Container } from "semantic-ui-react";

import './StickyFooter.css'

const StickyFooter = () => {
  return (
    <>
      <div className="permanent-footer">
        <Container textAlign='center'>
          <a href="mailto:fresh@terralemon.nl?subject=Ik heb echt iets voor Terralemon">
            Mail ons
          </a>{" "}
          of bel ons op <span>020 6248300</span>
        </Container>
      </div>
    </>
  );
};

export default StickyFooter;

