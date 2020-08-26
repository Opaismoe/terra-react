import React from "react";
import { Link } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./MainCarousel.css"


const MainCarousel = () => {
  return (
    <>
      <Carousel swipeable={true} autoPlay={true} infiniteLoop={true} stopOnHover={true} showThumbs={false}>
        <Link to="/project/tno-ai">
          <img alt="carousel" src='https://terralemon.nl/img/projects_bg/_huge/190110-tno-ai-bg.png' />
          <h3 className="legend">Wij zijn de animatoren van TNO AI</h3>
        </Link>
        <Link to="/projecten/">
          <img alt="carousel" src='https://terralemon.nl/img/projects_bg/_huge/190909-Immuuntherapie-bg.jpg' />
          <h3 className="legend">Wij zijn makers van medische animaties over Immuuntherapie</h3>
        </Link>
        <Link to="/projecten/">
          <img alt="carousel" src='https://terralemon.nl/img/projects_bg/_huge/190923-zininzappelin-bg.jpg' />
          <h3 className="legend">Wij zijn de ontwerpers van Zin in Zappelin</h3>
        </Link>
        <Link to="/projecten/">
          <img alt="carousel" src='https://terralemon.nl/img/projects_bg/_huge/190107-ECN-TNO-bg.jpg' />
          <h3 className="legend">Wij zijn de makers van de explanimations voor ECN part of TNO</h3>
        </Link>
        <Link to="/projecten/">
          <img alt="carousel" src='https://terralemon.nl/img/projects_bg/_huge/180626-NPO-Zapp-bg.jpg' />
          <h3 className="legend">Wij zijn de ontwerpers achter NPO Zapp 2018</h3>
        </Link>
      </Carousel>
    </>
  );
};

export default MainCarousel;