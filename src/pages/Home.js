import React from "react";
import { Grid, Header, Transition } from "semantic-ui-react";

import VideoHero from "../components/VideoHero";
import BigTitle from "../components/BigTitle";
import MainCarousel from "../components/MainCarousel";
import Rings from "../components/Rings";
import ProjectCard from "../components/project/ProjectCard"

const Home = ({ isVisible, isLoading, setIsVisible, projects}) => {
  return (
    <>
      <VideoHero />
      <BigTitle title="Wij zijn een digital design agency." />
      <MainCarousel />
      <BigTitle
        title="Wij geloven dat krachtige ideeën en intelligent design merken en
                organisaties versterken"
      />

      <Grid container>
        <Grid.Row style={style.rowLeft}>
          <Grid.Column computer={4} tablet={4} mobile={16}>
            <Header>
              <h3 className="subheading2">Identiteit</h3>
            </Header>
            <p>
              Een goede indentiteit zorgt voor een sterke band met je klant of
              publiek. Tastbaar, tone-of-voice en online. Wat beweegt je? waar
              sta je voor? Nu en in de toekomst
            </p>
          </Grid.Column>
          <Grid.Column computer={7} tablet={7} mobile={16}>
            <Rings fill="blue" opacity="1" />
          </Grid.Column>
          <Grid.Column computer={4} tablet={4} mobile={16}>
            <Header>
              <h3 className="subheading2">Interactie</h3>
            </Header>
            <p>
              Wij zijn jouw creatieve sparringspartner. Samen komen we tot de
              perfecte interactieve showcase waar elke pixel en elke regel code
              op zijn plek is.
            </p>
            <Header>
              <h3 className="subheading2">Motion</h3>
            </Header>
            <p>
              Motion is animatie storytelling, film en beleving. We zijn trots
              op onze ervaring in animatie, storytelling en identiteiten voor
              televisiezenders. Bewegend beeld heeft zeggingskracht.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <BigTitle
        title="Laatste projecten"
      />

      <Transition visible={!isLoading} animation='fade' duration={450}>
        <Grid>
          <Grid.Row style={style.row}>
            {projects.map((project, index) => {
              if (index < 4) {
                return (
                  <ProjectCard key={project.id} project={project} sm={12} md={8} lg={4}/>
                );
              } 
              return null
            })}
          </Grid.Row>
        </Grid>
      </Transition>
    </>
  );
};

export default Home;

const style = {
  row: {
    margin: `5em auto`,
    justifyContent: `center`,
  },
  rowLeft: {
    margin: `5em auto`,
    textAling: `left`,
  },
};
