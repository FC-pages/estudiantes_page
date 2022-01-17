import React from 'react';
import * as S from '../components/styles';


import { Carousel, Container, Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

let { carousel } = require('../data/data-home.js'  );


function CarouselReact() {
  console.log(carousel)
  return (
    <S.ContainerCarousel>
    <Container>
      <Row>
        <Col xs = "12" lg = "8">
          <Carousel fade>
            {carousel.map((item: any) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src= {item.src}
                  alt= {item.alt}
                />
                <Carousel.Caption className = "caption-background">
                  <p>{item.Description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs = "12" lg = "4">
          <S.Seccion>
            <h2>
              Eventos
            </h2>
          </S.Seccion>
        </Col>
      </Row>
    </Container>
    </S.ContainerCarousel>
  );
}

export default CarouselReact;












