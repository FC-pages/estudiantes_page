import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import Tesistas from "../../Egresados/Tesistas";

export default function AlumnosYTesistas() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Alumnos">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="fs-6"
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
