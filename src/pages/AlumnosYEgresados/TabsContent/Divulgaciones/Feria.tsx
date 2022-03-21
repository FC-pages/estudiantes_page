
import React from "react";
import { Container, Tab, Nav, Row } from "react-bootstrap";
import AbetLogo from '../logo-abet.png';

export default function Feria() {
  return (
    <Container>
        <Row>
          <h3>Feria de proyectos</h3>
          <p>Desde el 2019 se viene realizando una Feria de proyectos de manera virtual, organizada por la oficina de acreditación ABET. Estos proyectos abordan problemas teóricos, aplicados y multidisciplinarios, cuentan con tres niveles: </p>
          <ul>
            <li>N1: Estudiantes del 1er, 2do, 3er y 4to ciclo.</li>
            <li>N2: Estudiantes del 5to, 6to, 7mo y 8vo ciclo.</li>
            <li>N3: Estudiantes del 9no y 10mo ciclo.</li>
          </ul>
          <p>Enlace de la página de Feria de proyectos de FC:</p>
        </Row>
        <Row>
          <a href = "https://sites.google.com/uni.edu.pe/feria-de-ciencias/feria-2020-2 ">
            <img style = {{"width":"110px", "margin":"0px 10px"}} src = {AbetLogo}></img>
          </a>
        </Row>


    </Container>
  );
}
