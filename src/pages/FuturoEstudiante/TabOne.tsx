import React, { FC, Fragment } from "react";
import ReactPlayer from "react-player";

import { Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";
import "../../styles/festudiantes.css";

let videos = [
  {
    name: "Importancia de estudiar Matemática",
    href: "https://www.youtube.com/watch?v=Cwq4dRBWcr8&t=185s",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui voluptas",
  },
];

const TabOne: FC<{}> = () => {
  return (
    <Fragment>
      <h3>Características del Postulante</h3>
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
                    <Card.Text>{video.Description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </S.ContainerVideos>
      </Row>
    </Fragment>
  );
};
export default TabOne;
