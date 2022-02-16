import React, { FC, Fragment } from "react";
import "./styles/festudiantes.css";
import ReactPlayer from "react-player";

import { Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";

let videos = [
  {
    name: "Investigación - Matemática",
    href: "https://www.youtube.com/watch?v=V6OzvIKVCv8",
    Description:
      "Doctorado en Ciencias con mención en Matemáticas del profesor Luis Flores Luyo",
  },
  {
    name: "Industria - Testimonio",
    href: "https://www.youtube.com/watch?v=yDyMSliKsxI",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum ",
  },
];

const TabTwo: FC<{}> = () => {
  return (
    <div className = "cont-tab">
      <p>
        El egresado de Matemática puede trabajar en industrias mineras,
        metalúrgicas, pesqueras, entre otras, diseñando nuevos procesos o
        mejorando los existentes. También puede desempeñarse en empresas de
        servicios u organismos públicos, analizando grandes cantidades de datos;
        además en el área de finanzas, estimando los costos de los seguros o
        valorizando inversiones de riesgo.
      </p>
      <p>
        Muchos de nuestros egresados realizan maestrías y doctorados en
        universidades peruanas y del mundo. Desempeñandose en la docencia y
        realizando investigación científica.
      </p>
      <p>
        A continuación se detallan los divesos campos que puede seguir un
        egresado
      </p>
      {/* 
      <div className="container">
        <div className="itemLeft">Investigación</div>
        <div className="itemRight">
          Si quieres hacer una carrera de investigación, la licenciatura te
          permite iniciar estudios de doctorado en matemáticas o disciplinas
          afines.
          <br />
          Las principales líneas de investigación que desarrollamos en nuestra
          Facultad y que podrás conocer son: Análisis, Álgebra, Sistemas
          Dinámicos, Geometría Algebráica, Geometría Diferencial, Lógica, Teoría
          de Números, Probabilidades, Análisis Numérico, Ecuaciones en Derivadas
          Parciales, Física Matemática, Fundamentos de Teoría de Conjuntos,
          Geometría Compleja, Problemas Inversos, Teoría Geométrica de
          Funciones, entre otras.
        </div>
      </div>
        */}
      <div className="container">
        <div className="leftItem">Industria</div>
        <div className="rightItem">
          Podrás desempeñarte como asesor en la formulación de estrategias para
          el estudio y la solución de los problemas de la industria moderna. Así
          puede dedicarse a la consultoría en laboratorios industriales, en
          empresas financieras y de seguros, en la industria electrónica y en la
          industria petrolera y química.
        </div>
        </div>
      
      <div className="container">
        <div className="leftItem">Banca</div>
        <div className="rightItem">
          Si deseas relacionarte con las finanzas y economía, puedes trabajar en
          las industrias financieras o aseguradoras, ya que contarás con los
          skills necesarios como de modelamiento y análisis en aspectos
          cuantitativos, y asi realizar diversos diagnosticos de los riesgos, y
          enfrentarte a diversos problemas de esa índole.
        </div>
      </div>
      <div className="container">
        <div className="leftItem">Informática</div>
        <div className="rightItem">
          {/* Si deseas relacionarte con las finanzas y economia, puedes trabajar en
          las industrias financieras o aseguradoras, ya que contaras con los
          skills necesarios como de modelamiento y analisis en aspectos
          cuantitativos, y asi realizar diversos diagnosticos de los riesgos, y
          enfrentarte a diversos problemas de esa índole. */}
          Un matemático tiene habilidades de programación y de abstracción que le permite 
          sin dificultad aprender diferentes softwares. Puede trabajar en análisis de datos 
          de empresas de investigación e industriales, trabajar en equipo con personas 
          especialistas en Informática. También puede continuar estudios en Ciencia de la 
          Computación y volverse un desarrollador de Software.
        </div>
      </div>
      <div className="container">
        <div className="leftItem">Docencia Universitaria</div>
        <div className="rightItem">
          {/* Si quieres iniciar una carrera de docencia universitaria, la
          licenciatura te permite iniciar estudios de magíster y doctorado. */}
          Si deseas ejercer la docencia universitaria, la licenciatura te permite continuar 
          con una formación de maestría y doctorado en matemática o áreas afines.
        </div>
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
    </div>
  );
};
export default TabTwo;
