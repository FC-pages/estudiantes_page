import React, { FC } from "react";
import ReactPlayer from "react-player";

import { Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";
import "./styles/festudiantes.css";

let videos = [
  /* {
    name: "Importancia de estudiar Matemática",
    href: "https://www.youtube.com/watch?v=Cwq4dRBWcr8&t=185s",
    Description:
      "Las matemáticas tienen un triple propósito. Debe proporcionar un instrumento para el estudio de la naturaleza. Pero esto no es todo: tiene un propósito filosófico y, me atrevo a decir, estético.",
  }, */
  {
    name: "Perú entre los mejores países en olimpiada de Matemática",
    href: "https://www.youtube.com/watch?v=JE0IM-FgU_0",
    Description:
      "Estudiantes peruanos entre los mejores en Olimpiada Mundial de Matemática y los mejores de América Latina.",
  },
  {
    name: "Terence Tao enseña pensamiento matemático",
    href: "https://www.youtube.com/watch?v=axzFfSvQdYQ",
    Description:
      "Terence Tao, becario de MacArthur y ganador de la medalla Fields, estudiaba matemáticas de nivel universitario a los 9 años. Ahora, el 'Mozart de las matemáticas' está analizando su enfoque para la resolución de problemas cotidianos.",
  },
];

const TabOne: FC<{}> = () => {
  return (
    <div className = "cont-tab">
      <h4 className="t-stroke-shadow-h5">Caraterísticas del Postulante</h4>
      <p>Esta puede ser tu carrera si:</p>
      <ul>
        <li>Tienes habilidades y disfrutas con la matemática</li>
        <li>Eres aficionado a los desafíos</li>
        <li>Tienes curiosidad por la abstracción de relaciones lógicas existentes en los fenómenos de la realidad</li>
        <li>Eres curioso y buscas siempre explicaciones a los fenómenos</li>
        <li>Eres esforzado y perseverante</li>
      </ul>
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
                        {video.name === "Importancia de estudiar Matemática" ? 
                          <>
                          <div className="quote">
                            <cite>
                              “{video.Description}». 
                            </cite>
                          </div>
                          <div>
                            <figcaption className="quote">
                              &mdash;<cite>Henri Poincaré</cite>  
                            </figcaption>
                          </div>
                          </>
                          :
                          video.Description
                          }
                    </Card.Text>



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
export default TabOne;
