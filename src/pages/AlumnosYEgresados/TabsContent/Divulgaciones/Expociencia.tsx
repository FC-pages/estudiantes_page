import React from "react";
import { Container, Tab, Nav, Row } from "react-bootstrap";

export default function Expociencia() {
  return (
    <Container>
        <Row>
          <div className = "cont-tab">
            <h4 className="t-stroke-shadow-h5">Expociencia</h4>
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
          </div>
        </Row>
    </Container>
  );
}
