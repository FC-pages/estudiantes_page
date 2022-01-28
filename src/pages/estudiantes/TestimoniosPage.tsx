import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import Testimonios from "../Egresados/Testimonios";
import TestimoniosEstudiantesPage from "./TestimoniosEstudiantesPage";

export default function TestimoniosPage() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Estudiantes">
        <Nav
          // variant="tabs"
          style={{ textAlign:"left" }}
          className="nav2" >
          <Nav.Item>
            <Nav.Link eventKey="Estudiantes">Estudiantes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Egresados" >Egresados</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container
          className="fs-6">
        
          <Tab.Content className="p-4  fs-8">
             <Tab.Pane eventKey="Estudiantes">{/*className="tab-pane fade in active" */}
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
