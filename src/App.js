import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Progress } from "semantic-ui-react";
import { About, Case, Cases, Home, News, Project, Projecten } from "./pages";
import { NavbarMenu, SidebarMenu, StickyFooter, Footer } from "./components";

import "./App.css";

let PROJECT_URL = "/projects.json";
if (process.env.NODE_ENV === "development") {
  PROJECT_URL = `https://terralemon-dev.nl/json/projects`;
}
const PROJECT_CACHE = {};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);

      if (PROJECT_CACHE[PROJECT_URL]) {
        const data = PROJECT_CACHE[PROJECT_URL];
        setProjects(data);
        setIsLoading(false);
      } else {
        const projects = await fetch(PROJECT_URL);
        const data = await projects.json();
        PROJECT_CACHE[PROJECT_URL] = data;
        setIsLoading(false);
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);

  let kasusen = projects.map((project) => project.case);

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
          <Route exact path="/">
            <Home isLoading={isLoading} projects={projects} />
          </Route>
          <Route path="/projecten">
            <Projecten projects={projects} isLoading={isLoading} setProjects={setProjects} />
          </Route>
          <Route path="/project/:url_title">
            <Project projects={projects} isLoading={isLoading} />
          </Route>
          <Route path="/cases">
            <Cases projects={projects} isLoading={isLoading} />
          </Route>
          <Route path="/case/:url_title">
            <Case kasus={kasusen} projects={projects} isLoading={isLoading} />
          </Route>
          <Route path="/nieuws">
            <News />
          </Route>
          <Route path="/over">
            <About />
          </Route>
        </Switch>

        <Footer />
        <StickyFooter />
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
    background: `none`,
  },
};

export default App;
