import { Container } from "react-bootstrap";
import React from "react";

import ReactPlayer from "react-player";
import { FaAngleRight } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';
import { Row, Card } from "react-bootstrap";
import * as S from "../../../../styles/styles";

export default function MallasPage() {

let videos = [
  {
    href:"https://www.youtube.com/watch?v=dxVKquza40Y&t", 
    name: "Así es la Matemática legendaria en la UNI",
    Description:"Un análisis completo acerca del plan de estudios de la carrera de Matemáticas en la UNI contrastado con la UNAM (México)",
  }
]
  return (
    // <Container className="text-start p-3">
    <Container>
      <p className="fw-bold fs-5">Mallas curriculares</p>
      <div className="Biblioteca">
        <ul>
          <li>
            <FaAngleRight size={17}/>
            Malla General  {' '}
            <a className="a-link" href="./PLANMATEMATICA2018.pdf">
            <FaPaperclip size={20} />
            </a>
          </li>
          <li> 
            <FaAngleRight size={17}/>
            {/* <FaAngleRight size={17} className="blue"/> */}
            Malla Análisis Numérico y Ecuaciones Diferenciales {' '} </li>
          <li> 
            <FaAngleRight size={17}/>
            {/* <FaAngleRight size={17} className="blue"/>  */}
            Malla Optimización y Control {' '}</li>
          <li> 
            <FaAngleRight size={17}/>
            {/* <FaAngleRight size={17} className="blue"/>  */}
            Malla Estadistica y Procesos Estocasticos {' '}</li>
        </ul>
      </div>
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
