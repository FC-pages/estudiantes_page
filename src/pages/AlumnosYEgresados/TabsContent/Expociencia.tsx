import React, { FC } from "react";
import AbetLogo from './logo-abet.png';

import { Row, Card, Container } from "react-bootstrap";

const Expociencia: FC<{}> = () => {
  return (
  <Container>
    <Row>
    <div className = "cont-tab">
      <h3>Expociencia</h3>
      <p>Es una feria de proyectos de la Facultad de Ciencias, donde la escuela de matemática participa presentando trabajos aplicados en los rubros de las 6 líneas de investigación:</p>
      <ol>
        <li>Análisis y Teoría de Números.</li>
        <li>Álgebra, Geometría y Topología.</li>
        <li>Probabilidad y Procesos Estocásticos.</li>
        <li>Ecuaciones Diferenciales y Sistemas Dinámicos.</li>
        <li>Optimización.</li>
        <li>Análisis Numérico.</li>
      </ol>
      <p>Desde el año 2019 se ha dejado de realizar este evento debido a la pandemia COVID-19.</p>
      <h3>Feria de proyectos</h3>
      <p>Desde el 2019 se viene realizando una Feria de proyectos de manera virtual, organizada por la oficina de acreditación ABET. Estos proyectos abordan problemas teóricos, aplicados y multidisciplinarios, cuentan con tres niveles: </p>
      <ul>
        <li>N1: Estudiantes del 1er, 2do, 3er y 4to ciclo.</li>
        <li>N2: Estudiantes del 5to, 6to, 7mo y 8vo ciclo.</li>
        <li>N3: Estudiantes del 9no y 10mo ciclo.</li>
      </ul>
      <p>Enlace de la página de Feria de proyectos de FC:</p>
      
    </div>
    </Row>
    <Row>
      <a href = "https://sites.google.com/uni.edu.pe/feria-de-ciencias/feria-2020-2 ">
        <img style = {{"width":"110px", "margin":"0px 10px"}} src = {AbetLogo}></img>
      </a>
    </Row>
  </Container>
  );
};
export default Expociencia;
