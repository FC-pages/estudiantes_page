import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";
import "../../components/estilosTab.css";
import OptimizacionMain from './Optimizacion/OptimizacionMain';
import AnalisisNumericoMain from './AnalisisNumerico/AnalisisNumericoMain';
import AnalisisyTeoNumerosMain from './AnalisisyTeoriadeNumeros/AnalisisyTeoNumerosMain';
import ProbabilidadMain from './ProbabilidadyPE/ProbayPEMain';
import AlgebraGyTopoMain from './AlgebraGyTopo/AlgebraGyTopoMain';
import EDySDMain from './EDySD/EDySDmain'

import { colors } from '../../styles/colors';

export default function AlumnosEgresadosPage() {
  return (
    <Container
      style={{
        borderStyle: "solid",
        borderColor: "#1D3557",
        paddingLeft: "0",
        paddingRight: "0",
        backgroundColor: "white",
      }}
      className="mt-5"
    >
      <Tab.Container defaultActiveKey="Analisis">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: colors.main }}
          className="justify-content-center pt-1 fs-6 style-gr-i"
        >
          <Nav.Item >
            <Nav.Link eventKey="Analisis">
              Análisis y Teoría de Números
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Optimizacion">
              Optimización
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Algebra">Álgebra, Geometría y Topología</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Probabilidad">
              Probabilidad y Procesos Estocásticos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Diferenciales">
              Ecuaciones Diferenciales y Sistemas Dinámicos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Numerico">
              Análisis Numérico
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="pt-3 pb-3"
          style={{
            background: "white",
          }}
        >
          <Tab.Content >
            <Tab.Pane eventKey="Analisis">
              <AnalisisyTeoNumerosMain />
            </Tab.Pane>
            <Tab.Pane eventKey="Optimizacion">
              <OptimizacionMain />
            </Tab.Pane>
            <Tab.Pane eventKey="Algebra">
              <AlgebraGyTopoMain />
            </Tab.Pane>
            <Tab.Pane eventKey="Probabilidad">
              <ProbabilidadMain />
            </Tab.Pane>
            <Tab.Pane eventKey="Diferenciales">
              <EDySDMain />
            </Tab.Pane>
            <Tab.Pane eventKey="Numerico">
              <AnalisisNumericoMain/>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </Container>
  );
}
