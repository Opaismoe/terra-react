import React, { useState, useEffect } from "react";
import { Grid, Transition, Image } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom"

import AnimatedButton from "../components/AnimatedButton"

const Project = ({ projects, isLoading }) => {
  const { url_title } = useParams()
  const history = useHistory()
  const [oneProject, setOneProject] = useState([])


  useEffect(() => {
  const getOneProject = async () => {
    let oneProject = projects.filter(project => project.url_title === url_title).map(filteredProject => {
      return filteredProject
    })
    setOneProject(oneProject)
  }
    getOneProject()
  }, [projects, url_title])
  
  return (
    <>
      <Transition visible={!isLoading} animation='fade' duration={1450}>
        <Grid container centered>
          <Grid.Row style={style.row}>
            <AnimatedButton title="back" icon="long arrow alternate left" clickHandler={() => history.goBack()} style={{ marginLeft: 0, position: `absolute`, left: 0 }}/>
            {oneProject.map((project) => (
              <div key={project.id}>
                <Image src={project.image} fluid/>
                <h1 className="bigtitle" style={{ marginBottom: 0 }}>
                  {project.title}
                </h1>
                <p className ="lead">
                  {project.summary}
                </p>
                <h2>
                  Case: {project.case.title}
                </h2>
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
