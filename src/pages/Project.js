import React, { useState, useEffect } from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom"

import AnimatedButton from "../components/AnimatedButton"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../components/awesome-slider-custom.css'

const Project = ({ projects, isLoading }) => {
  const { url_title } = useParams()
  const history = useHistory()
  const [oneProject, setOneProject] = useState([])

  useEffect(() => {
  const getOneProject = async () => {
    let oneProject = projects.filter(project => project.url_title === url_title).map(filteredProject => {
      return filteredProject
    })
    console.log(oneProject);
    setOneProject(oneProject)
  }
    getOneProject()
  }, [projects, url_title])
  
  return (
    <>
        <AnimatedButton title="back" icon="long arrow alternate left" clickHandler={() => history.goBack()} style={{ marginLeft: 0, position: `absolute`, left: 0 }}/>
        <Grid container centered>
          <Grid.Row style={style.row}>
            {oneProject.map((project) => (
              <div key={project.id}>
                <h1 className="bigtitle lead" style={{ marginBottom: 0 }}>
                  {project.title}
                </h1>
                <p className ="lead">
                  {project.summary}
                </p>
                <small>
                  {project.categories && project.categories.map((category, index) => (
                    index !== -1 ? `${category} ,` : null
                  ))}
                </small>
              </div>
            ))}
          </Grid.Row>
        </Grid>

        <Container fluid>
          <Grid.Row style={style.row}>
          {oneProject.map((project) => (
            <Image key={project.id} src={project.image} fluid/>
          ))}
          </Grid.Row>
        </Container>


        <Grid container centered>
          <Grid.Row style={style.row}>
            {oneProject.map((project) => (
              project.fluid_content[0].content.map((content => {
                content
              }
            ))}
          </Grid.Row>
        </Grid>

        <Grid container centered>
          <Grid.Row style={style.row}>

          </Grid.Row>
        </Grid>

        <Grid container centered>
          <Grid.Row style={style.row}>
            {oneProject.map((project) => (
              project.fluid_content && project.fluid_content[0].image_gallery ?
                <AwesomeSlider key={project.id} bullets={false}>
                {project.fluid_content[0].image_gallery.map(src => (
                  <img key={project.id} data-src={src} alt={src} />
                ))}
                </AwesomeSlider>
                : null
            ))}
          </Grid.Row>
        </Grid>
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
