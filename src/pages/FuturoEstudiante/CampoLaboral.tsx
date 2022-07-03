import React, { FC, Fragment } from "react";
import "./styles/festudiantes.css";
import ReactPlayer from "react-player";

import { Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";

let videos = [
  {
    name: "El tipo que te convencerá de que las matemáticas son la profesión del futuro",
    href: "https://www.youtube.com/watch?v=NILudp6hti8",
    Description:
      "",
  },
  {
    name: "Terence Tao Teaches Mathematical Thinking",
    href: "https://www.youtube.com/watch?v=axzFfSvQdYQ",
    Description:
      "",
  },
  {
    name: "Las Matemáticas son la profesión del futuro",
    href: "https://www.youtube.com/watch?v=NILudp6hti8",
    Description:
      "El matemático francés Cédric Villani, ganador de una medalla Fields en el 2010, nos explica la importancia de las matematicas para el futuro",
  }
  ];

const TabTwo: FC<{}> = () => {
  return (
    <div className = "cont-tab">
      <p>
        Del lado aplicado, la matemática cumple un rol trascendental en sectores clave de nuestra sociedad, como son energía, salud, financiero, medio ambiente, tecnología, entre otros. 
        La actividad laboral de un egresado de la Escuela de Matemática en estos campos demanda la interacción con profesionales de diversas especialidades que se desenvuelven en estos ámbitos, por lo que sus oportunidades de crecimiento y desarrollo profesional suelen ser bastante amplias.
      </p>
      <p>
        Es cada vez mayor el número de egresados de la especialidad de Matemática que cubren una demanda laboral en los sectores financiero (bancos, administradoras de fondos, entre otros); empresas de desarrollo de software; empresas o consultoras para trabajo con big-data, gestión de riesgos, aprendizaje automático y modelamiento de procesos, especialmente en lo que concierne a incertidumbre.
      </p>
      <p>
        Así mismo, el egresado de la carrera de Matemática se encuentra plenamente preparado para continuar estudios de postgrado en Matemática con miras a desarrollar investigación científica de primer nivel en matemática o en otras ciencias afines. 
      </p>

      <Row xs={1} md={1} className="g-4">
        <S.ContainerVideos>
          <div className="video">
            {videos.map((video: any) => {
              return (
                <Card bg="dark" text="white">
                  <ReactPlayer controls width="100%" url={video.href} />
                  <Card.Body>
                    <Card.Title>{video.name}</Card.Title>
                    <Card.Text>{video.Description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </S.ContainerVideos>
      </Row>


    </div>
  );
};
export default TabTwo;
