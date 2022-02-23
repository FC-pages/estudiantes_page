import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import Testimonios from "./TestimoniosTab/Testimonios";
import TestimoniosEstudiantesPage from "./TestimoniosTab/TestimoniosEstudiantesPage";

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
        <div
          className="fs-6">
        
          <Tab.Content className="p-4  fs-8">
             <Tab.Pane eventKey="Estudiantes">{/*className="tab-pane fade in active" */}
              <TestimoniosEstudiantesPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Egresados">
              <Testimonios />
            </Tab.Pane>
          </Tab.Content>
         </div>
      </Tab.Container>
    </Container>
    
  );
}
