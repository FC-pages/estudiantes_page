import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";
import "../../components/estilosTab.css";
import OptimizacionMain from './Optimizacion/OptimizacionMain';

export default function AlumnosEgresadosPage() {
  return (
    <Container
      style={{
        borderStyle: "solid",
        borderColor: "#1D3557",
        paddingLeft: "0",
        paddingRight: "0",
      }}
      className="mt-5"
    >
      <Tab.Container defaultActiveKey="Analisis">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item >
            <Nav.Link eventKey="Analisis">
              Análisis Y Teoría de Números
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
        <Container className="p-3">
          <Tab.Content >
            <Tab.Pane eventKey="Analisis">
              <div />
            </Tab.Pane>
            <Tab.Pane eventKey="Optimizacion">
              <OptimizacionMain />
            </Tab.Pane>
            <Tab.Pane eventKey="Algebra">
              <div />
            </Tab.Pane>
            <Tab.Pane eventKey="Probabilidad">
              <div />
            </Tab.Pane>
            <Tab.Pane eventKey="Diferenciales">
              <div />
            </Tab.Pane>
            <Tab.Pane eventKey="Numerico">
              <div />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
