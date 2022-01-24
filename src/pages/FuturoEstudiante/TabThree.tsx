import React, { FC, Fragment } from "react";
import Accordion from "../../components/Accordion";
import "../../styles/festudiantes.css";

import ReactPlayer from "react-player";

import { Container, Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";

let videos = [
  {
    name: "Presentación de nuestra plana docente",
    href: "https://www.youtube.com/watch?v=yDyMSliKsxI",
    Description:
      "Docentes de la la carrera de matemática de la facultad de Ciencias",
  },
  {
    name: "Presentación de nuestra plana docente",
    href: "https://www.youtube.com/watch?v=yDyMSliKsxI",
    Description:
      "Docentes de la la carrera de matemática de la facultad de Ciencias",
  },
];

const accordionItems = [
  {
    title: "Sistemas de decantación",
    content: (
      <div>
        Este proceso consiste en separar la partículas suspendidas en un líquido
        por medio de la gravedad o la fuerza centrífuga. Se aplica por ejemplo
        en minería y en análisis de glóbulos rojos en la sangre. El trabajo,
        dirigido por el profesor Sepúlveda, consistió en determinar un método
        para extraer los parámetros que rigen el proceso, comparando las
        ecuaciones con observaciones reales.
      </div>
    ),
  },
  {
    title: "Lixiviación del cobre",
    content: (
      <div>
        Se agrega ácido sulfúrico al mineral molido, produciendo sulfato de
        cobre, el que es recuperado al fondo de la pila. Modelar este proceso
        adecuadamente permite optimizar la cantidad de ácido usado y el
        porcentaje de cobre recuperado de la pila. El profesor Bürger y su
        equipo desarrollan esta línea.
      </div>
    ),
  },
  {
    title: "Redes de regulación génica",
    content: (
      <div>
        El crecimiento de los seres vivos está regulado por la interacción entre
        sus genes. Estos siguen una dinámica de estimulación-inihibición que se
        puede estudiar con la técnica de Micro-array (1), y traducir en una red
        de interacción. La matemática es fundamental para deducir y entender
        estas redes, las cuales son estudiadas por el profesor Aracena y su
        equipo.
      </div>
    ),
  },
  {
    title: "Cultivo de Salmón",
    content: (
      <div>
        Mediante ecuaciones se estudia cómo fluye el oxígeno en las jaulas de
        salmones, según las corrientes marinas, la densidad de las jaulas y su
        posición. Este estudio permite determinar la mejor disposición y la
        cantidad de peces máxima que pueden tener las jaulas de manera que su
        crecimiento sea sano. La colaboración con la industria del Salmón, a
        cargo del profesor Riquelme ha permitido este y otros avances.
      </div>
    ),
  },
];

const TabThree: FC<{}> = () => {
  return (
    <Fragment>
      <p>
        La matemática está en constante crecimiento, cada vez nuevas
        herramientas son creadas y estas permiten apoyar el desarrollo de otras
        ciencias y la industria. <br /> <br />
        El Departamento de Ingeniería Matemática es activo en investigación
        tanto teórica como aplicada, destacándose por su gran número de
        publicaciones científicas anuales. Gran parte de la investigación se
        lleva a cabo en el Centro de Investigación en Ingeniería Matemática
        (CI²MA ) el cual reúne también a investigadores de otras disciplinas.{" "}
        <br /> <br />
        Con el fin de ilustrar el campo de aplicación de la carrera listamos a
        continuación algunos ejemplos llevados acabo por profesores y
        estudiantes de la carrera de Ingeniería Civil Matemática.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto.{" "}
      </p>
      <div className="container">
        <Accordion items={accordionItems} />
      </div>
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
    </Fragment>
  );
};
export default TabThree;