import React, { useState } from "react";
import "./App.css";

import { Container, Grid, Header, Embed } from "semantic-ui-react";
import NavbarMenu from "./components/NavbarMenu";
import SidebarMenu from "./components/SidebarMenu";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  return (
    <div className="App">
      <SidebarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
        <NavbarMenu isVisible={isVisible} setIsVisible={setIsVisible} />

      <div className="video-container">
        <Embed
          active={true}
          url="https://player.vimeo.com/video/158629788?autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&quality=auto"
        />
      </div>

        <Grid padded textAlign="center">
          <Grid.Row style={{ marginTop: `2.5em`, }}>
            <Header>
              <h1 className="header-1">Wij zijn een digital design agency.</h1>
            </Header>
          </Grid.Row>
        </Grid>
    </div>
  );
}

export default App;
