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
      <h5 className="t-stroke-shadow-h5">Mallas curriculares</h5>
      <div className="vineta">
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
            Malla Análisis Numérico y Ecuaciones Diferenciales. {' '}
            <FaPaperclip size={20} />
          </li>
          <li> 
            <FaAngleRight size={17}/>
            Malla Optimización y Control. {' '}
            <FaPaperclip size={20} />
          </li>
          <li> 
            <FaAngleRight size={17}/>
            Malla Estadistica y Procesos Estocasticos. {' '}
            <FaPaperclip size={20} />
          </li>
        </ul>
      </div>
      <h5 className="t-stroke-shadow-h5">Plan de estudios</h5>
      <div className="vineta">
        <ul>
          <li> <FaAngleRight size={17}/>Plan de Estudios Vigente. {' '}
          <FaPaperclip size={20} />
          </li>
        </ul>
      </div>

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
