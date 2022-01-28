import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import Tesistas from "../../Egresados/Tesistas";
import Alumnos from "../../Egresados/Alumnos";

export default function AlumnosYTesistas() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Alumnos">
        <Nav
          style={{ textAlign:"left" }}
          className="nav2" 
        >
          <Nav.Item>
            <Nav.Link eventKey="Alumnos">Alumnos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Tesistas">Tesistas</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Alumnos">
              <Alumnos/>
            </Tab.Pane>
            <Tab.Pane eventKey="Tesistas">
              <Tesistas/> 
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
