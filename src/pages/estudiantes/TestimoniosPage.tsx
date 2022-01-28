import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import Testimonios from "../Egresados/Testimonios";
import TestimoniosEstudiantesPage from "./TestimoniosEstudiantesPage";

export default function TestimoniosPage() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Estudiantes">
        <Nav
          style={{ textAlign:"left" }}
          className="nav2" 
        >
          <Nav.Item>
            <Nav.Link eventKey="Estudiantes">Estudiantes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Egresados">Egresados</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Estudiantes">
              <TestimoniosEstudiantesPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Egresados">
              <Testimonios />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
