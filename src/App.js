import React, { useEffect, useState } from "react";
import { Dimmer, Grid, Header, Progress, Segment } from "semantic-ui-react";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import ProjectCard from "./components/ProjectCard";
import SidebarMenu from "./components/SidebarMenu";
import VideoVimeo from "./components/VideoVimeo";

const projectUrl = `https://terralemon-dev.nl/json/projects`;
const projectCache = {};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      if (projectCache[projectUrl]) {
        console.log(projectCache[projectUrl]);
        const data = projectCache[projectUrl];
        setProjects(data);
        setIsLoading(false);
      } else {
        const projects = await fetch(`https://terralemon-dev.nl/json/projects`);
        const data = await projects.json();
        projectCache[projectUrl] = data;
        setIsLoading(false);
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Progress
          style={style.progress}
          size="tiny"
          percent={isLoading ? 88 : 0}
          active={true}
          color="blue"
          autoSuccess
        />
      ) : null}
      <SidebarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
      <NavbarMenu isVisible={isVisible} setIsVisible={setIsVisible} />

      <VideoVimeo isLoading />

      <Grid padded textAlign="center">
        <Grid.Row style={style.row}>
          <Header>
            <h2 className="title">Wij zijn een digital design agency.</h2>
          </Header>
        </Grid.Row>
      </Grid>
      <Grid padded textAlign="center">
        <Grid.Row style={style.row}>
          <Header>
            <h2 className="header__2">Projecten</h2>
          </Header>
        </Grid.Row>
      </Grid>
      {/* TODO: Filter compopnent */}
      <Dimmer.Dimmable
        as={Segment}
        blurring
        dimmed={isLoading}
        loading={isLoading}
      >
        <Grid container centered>
          <Grid.Row style={style.row}>
            {projects.map((project, index) => {
              if (index <= 3) {
                return (
                  <ProjectCard key={project.id} project={project} size={8} />
                );
              } else {
                return (
                  <ProjectCard key={project.id} project={project} size={4} />
                );
              }
            })}
          </Grid.Row>
        </Grid>
      </Dimmer.Dimmable>
    </div>
  );
}

const style = {
  row: {
    marginTop: `2.5em`,
    justifyContent: `center`,
  },
  progress: {
    position: `absolute`,
    top: 0,
    left: 0,
    width: `100%`,
  },
};

export default App;
