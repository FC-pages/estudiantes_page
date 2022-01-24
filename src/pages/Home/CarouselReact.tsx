import React, { useState } from 'react';
import * as S from '../../styles/styles';


import { Carousel, Container, Row, Col } from 'react-bootstrap';

let { carousel } = require('../../data/data-home.js'  );
let { eventos } = require('../../data/data-eventos.js'  );

function Eventos(){

  const [showAll, setShowAll] = useState(false);

  let Evento = (props : any) => {
    
    return (
        <div className = "evento">
          <div className = "fecha-evento">
            { props.fechaEvento }
          </div>
          <div className = "descripcion">
            <a href={ props.hrefLink }>
              { props.descripcion }
            </a>
          </div>
        </div>
    )
  }
    return(
        <S.Seccion>
            <h3>
              EVENTOS FUTUROS
            </h3>
            <div className = "body-eventos">
              {
                eventos.map((e : any) => {
                  if (e.future || showAll)
                  return(
                    <Evento 
                      fechaEvento = {e.fechaEvento} 
                      descripcion = { e.descripcion } 
                      hrefLink = { e.hrefLink } />
                    )
                })
                
              }
            </div>
            <div className = "footer-eventos">
              <a onClick = { () =>  setShowAll(!showAll)}>{ showAll ? "Ocultar": "Eventos pasados" }</a>
            </div>

          </S.Seccion>
      )
}

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
         <Eventos/> 
        </Col>
      </Row>
    </Container>
    </S.ContainerCarousel>
  );
}

export default CarouselReact;












