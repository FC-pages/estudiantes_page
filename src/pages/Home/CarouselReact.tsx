import React, { useState } from 'react';
import * as S from '../../styles/styles';


import { Carousel, Container, Row, Col } from 'react-bootstrap';

let { carousel } = require('../../data/data-home.js'  );
let { eventos } = require('../../data/data-eventos.js'  );

function Eventos(){

  const [toggleEvents, setTogleEvents] = useState(true);
  
  console.log("Eventos", eventos);
  console.log("Eventos reverse", eventos.reverse());

  let Evento = (props : any) => {
    
      return (
          <div className = "evento animate-slidein">
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
          <div className = "eventos-seccion">
            <h3>
              { toggleEvents ? "EVENTOS FUTUROS": "EVENTOS PASADOS" }
            </h3>
            <div className = "body-eventos">
              {
                toggleEvents?
                eventos.map((e : any) => {
                  if (e.future === toggleEvents)
                  return(
                    <Evento 
                      fechaEvento = {e.fechaEvento} 
                      descripcion = { e.descripcion } 
                      eventoFuturo= { e.future } 
                      hrefLink = { e.hrefLink } />
                    )
                }):
                eventos.map((e : any) => {
                  if (e.future === toggleEvents)
                  return(
                    <Evento 
                      fechaEvento = {e.fechaEvento} 
                      descripcion = { e.descripcion } 
                      eventoFuturo= { e.future } 
                      hrefLink = { e.hrefLink } />
                    )
                }).reverse()
                
              }
            </div>

          </div>
          <div onClick = { () =>  setTogleEvents(!toggleEvents)} className = "footer-eventos">
            <a >{ toggleEvents ? "Eventos pasados": "Eventos futuros" }</a>
          </div>
          </S.Seccion>
      )
}

function CarouselReact() {
  console.log(carousel)
  return (
    <S.ContainerCarousel>
    <Container className = "animate-slidein">
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












