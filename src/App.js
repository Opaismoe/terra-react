import React, { useEffect, useState } from "react";
import { Progress } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Projecten from "./pages/Projecten";
import Project from "./pages/Project";

import NavbarMenu from "./components/NavbarMenu";
import SidebarMenu from "./components/SidebarMenu";
import StickyFooter from "./components/StickyFooter";
import News from "./pages/News";
import Cases from "./pages/Cases";
import About from "./pages/About";

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
        // console.log(projectCache[projectUrl]);
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
  }, [projects]);

  return (
    <div className="App">
      <BrowserRouter>

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

        <Switch>
          <Route exact path="/" >
            <Home isLoading={isLoading} projects={projects}/>
          </Route>
          <Route path="/projecten">
            <Projecten projects={projects} isLoading={isLoading} />
          </Route>
          <Route path="/project/:url_title" >
            <Project projects={projects} isLoading={isLoading} setProjects={setProjects} />
          </Route>
          <Route path="/cases">
            <Cases/>
          </Route>
          <Route path="/nieuws">
            <News/>
          </Route>
          <Route path="/over">
            <About/>
          </Route>
        </Switch>
        
        <StickyFooter/>
        
      </BrowserRouter>
    </div>
  );
}

const style = {
  progress: {
    position: `absolute`,
    top: 0,
    left: 0,
    width: `100%`,
  },
};


export default App;
