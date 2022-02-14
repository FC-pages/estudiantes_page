import { Container } from "react-bootstrap";
import React from "react";

import ReactPlayer from "react-player";

import { Row, Card } from "react-bootstrap";
import * as S from "../../../styles/styles";

export default function MallasPage() {

let videos = [
  {
    href:"https://www.youtube.com/watch?v=dxVKquza40Y&t", 
    name: "Así es la Matemática legendaria en la UNI",
    Description:"Un análisis completo acerca del plan de estudios de la carrera de Matemáticas en la UNI contrastado con la UNAM (México)",
  }
]
  return (
    <Container className="text-start p-3">
      <p className="fw-bold fs-5">Mallas curriculares</p>
      <Container>
        <a className="a-link" href="./PLANMATEMATICA2018.pdf">
          Malla General
        </a>
        <p>Malla Análisi Numérico y Ecuaciones Diferenciales</p>
        <p>Malla Optimización y Control</p>
        <p>Malla Estadistica y Procesos Estocasticos</p>
      </Container>
      <p className="fw-bold fs-5">Plan de estudios</p>
      <Container>
        <p>Plan de Estudios Vigente</p>
      </Container>


      <Row xs={1} md={1} className="g-4">
        <S.ContainerVideos className="containerTabOne">
          <div className="video">
            {videos.map((video: any) => {
              return (
                <Card bg="dark" text="white">
                  <ReactPlayer controls width="100%" url={video.href} />
                  <Card.Body>
                    <Card.Title>{video.name}</Card.Title>
                    <Card.Text>
                      <div className="quote">
                        <cite>
                          {video.Description}.
                        </cite>
                        </div>
                        <div>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </S.ContainerVideos>
      </Row>


    </Container>
  );
}
