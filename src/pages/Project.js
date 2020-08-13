import React, { useState, useEffect } from "react";
import { Grid, Transition, Image } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom"

import AnimatedButton from "../components/AnimatedButton"

const Project = ({ projects }) => {
  let { url_title } = useParams()
  const [oneProject, setOneProject] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
  const getOneProject = async () => {
    setIsLoading(true)
    let oneProject = projects.filter(project => project.url_title === url_title).map(filteredProject => {
      return filteredProject
    })
    setOneProject(oneProject)
    setIsLoading(false)
  }
    getOneProject()
  }, [])
  
  return (
    <>
      <Transition visible={!isLoading} animation='fade' duration={1450}>
        {/* <Grid container>
          <AnimatedButton title="back" icon="arrow prev"/>
        </Grid> */}
        <Grid container centered>
          <Grid.Row style={style.row}>
            {oneProject.map((project) => (
              <div key={project.id}>
                <Image src={project.image} fluid/>
                <h1 className="bigtitle" style={{ marginBottom: 0 }}>
                  {project.title}
                </h1>
                <p className ="lead">
                  {project.summary}
                </p>
              </div>
            ))}
          </Grid.Row>
        </Grid>
      </Transition>
    </>
  );
};

export default Project;

const style = {
  row: {
    marginTop: `2.5em`,
    justifyContent: `center`,
  },
};
