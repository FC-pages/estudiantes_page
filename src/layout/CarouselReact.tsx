import React from 'react';
import * as S from '../styles/styles';

//import pdf from './congreso.pdf';
//render () {
//}

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
          <Carousel >
            {carousel.map((item: any) => (
              <Carousel.Item>
                <a href = {item.href}>
                <img
                  className="d-block w-100"
                  src= {item.src}
                  alt= {item.alt}
                />
                </a>
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
              EVENTOS
            </h2>
            <div className = "body-eventos">
              <div className = "evento">
                <div className = "fecha-evento">
                  18 DE ABRIL
                </div>
                <div className = "descripcion">
                  <a href="./congreso.pdf"> III Congreso
                  Internacional
                  Multidisciplinario
                  de Matemática</a>
                </div>
              </div>
              <div className = "evento">
                <div className = "fecha-evento">
                  01 DE MARZO
                </div>
                <div className = "descripcion">
                  <a href="http://www.admision.uni.edu.pe/"> 
                    Examen de admisión UNI
                  </a>
                </div>
              </div>
            </div>

          </S.Seccion>
        </Col>
      </Row>
    </Container>
    </S.ContainerCarousel>
  );
}

export default CarouselReact;












