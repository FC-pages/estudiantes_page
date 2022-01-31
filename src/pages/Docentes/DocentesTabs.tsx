import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";
import "../../components/estilosTab.css";
import Docentes from './Docentes';

export default function DocentesTabs() {
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
      <Tab.Container defaultActiveKey="Docentes">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item >
            <Nav.Link eventKey="Docentes">
              Docentes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Publicaciones">
              Publicaciones
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="PrePublicaciones">
              Pre-publicaciones
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content >
            <Tab.Pane eventKey="Docentes">
              <Docentes />
            </Tab.Pane>
            <Tab.Pane eventKey="Publicaciones">
              <div/>
            </Tab.Pane>
            <Tab.Pane eventKey="PrePublicaciones">
              <div/>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}