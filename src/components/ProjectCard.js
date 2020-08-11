import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProjectCard = ({project}) => {
  
  const parseJson = (data) => {
    return JSON.stringify(data)
  }

  return (
  <Card>
    <Image src={project.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{project.title}</Card.Header>
      <Card.Meta>{project.date}</Card.Meta>
      <Card.Description>
        parseJson({project.summary})
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        {project.url_title}
      </a>
    </Card.Content>
  </Card>
  )
}

export default ProjectCard
