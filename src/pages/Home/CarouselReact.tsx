import React, { useState } from 'react'
import * as S from '../../styles/styles'

import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import routes from '../../helpers/routes'

let { carousel } = require('../../data/data-home.js')
let { eventos } = require('../../data/data-eventos.js')

function Eventos() {
  const [toggleEvents, setTogleEvents] = useState(true)

  const clickt = () => {
    ;<Navigate to={routes.estudiantes_egresados} replace={true} />
  }

  let Evento = (props: any) => {
    return (
      <div className="evento animate-slidein">
        <div className="fecha-evento">{props.fechaEvento}</div>
        <div className="descripcion">
          <a href={props.hrefLink}>{props.descripcion}</a>
        </div>
      </div>
    )
  }
  return (
    <S.Seccion>
      <div className="eventos-seccion">
        <h3 className="">
          {toggleEvents ? 'Eventos Futuros' : 'Eventos Pasados'}
        </h3>
        <hr />
        <div className="body-eventos">
          {toggleEvents
            ? eventos.map((e: any, id: any) => {
                if (e.future === toggleEvents)
                  return (
                    <Evento
                      fechaEvento={e.fechaEvento}
                      descripcion={e.descripcion}
                      eventoFuturo={e.future}
                      hrefLink={e.hrefLink}
                      // onClick={click}
                      key={id}
                    />
                  )
              })
            : eventos
                .map((e: any, id: any) => {
                  if (e.future === toggleEvents)
                    return (
                      <Evento
                        fechaEvento={e.fechaEvento}
                        descripcion={e.descripcion}
                        eventoFuturo={e.future}
                        hrefLink={e.hrefLink}
                        // onClick={click}
                        key={id}
                      />
                    )
                })
                .reverse()}
        </div>
      </div>
      <div
        onClick={() => setTogleEvents(!toggleEvents)}
        className="footer-eventos"
      >
        <a>{toggleEvents ? 'Eventos pasados' : 'Eventos futuros'}</a>
      </div>
    </S.Seccion>
  )
}

function CarouselReact() {
  return (
    <S.ContainerCarousel>
      <Container className="animate-slidein">
        <Row>
          <Col xs="12" lg="8">
            <Carousel>
              {carousel.map((item: any, id: any) => (
                <Carousel.Item key={id}>
                  <a href={item.href}>
                    <img
                      className="d-block w-100"
                      src={item.src}
                      alt={item.alt}
                    />
                  </a>
                  <Carousel.Caption className="caption-background">
                    <p>{item.Description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs="12" lg="4">
            <Eventos />
          </Col>
        </Row>
      </Container>
    </S.ContainerCarousel>
  )
}

export default CarouselReact
