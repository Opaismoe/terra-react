import React, { useState, useEffect } from "react";
import "./App.css";

import { Container, Grid, Header } from "semantic-ui-react";

import NavbarMenu from "./components/NavbarMenu";
import SidebarMenu from "./components/SidebarMenu";
import ProjectCard from "./components/ProjectCard"
import VideoVimeo from "./components/VideoVimeo"


const projectUrl = `https://terralemon-dev.nl/json/projects`;
const projectCache = {};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false)  
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      if (projectCache[projectUrl]) {
        console.log(projectCache[projectUrl])
        const data = projectCache[projectUrl];
        setProjects(data);
        setIsLoading(false);
    } else {
      const projects = await fetch(`https://terralemon-dev.nl/json/projects`)
      const data = await projects.json()
      projectCache[projectUrl] = data;
      setIsLoading(false)
      setProjects(data)
    }
    }
    fetchProjects()
  }, [projectUrl])

  return (
    <div className="App">
      <SidebarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
      <NavbarMenu isVisible={isVisible} setIsVisible={setIsVisible} />

      <VideoVimeo isL/>

      <Grid padded textAlign="center">
        <Grid.Row style={style.row}>
          <Header>
            <h1 className="header-1">Wij zijn een digital design agency.</h1>
          </Header>
        </Grid.Row>
      </Grid>

      <Grid padded textAlign="center">
        <Grid.Row style={style.row}>
          <Header>
            <h2 className="header-2">Projecten</h2>
          </Header>
        </Grid.Row>
      </Grid>
      {/* TODO: Filter compopnent */}
      <Grid padded>
        <Grid.Row style={style.row}>
          {projects.map((project, index) => 
            <ProjectCard
              key={project.id}
              project={project}
            />
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
}

const style = {
  row: { 
    marginTop: `2.5em`,
  }
}

export default App;
