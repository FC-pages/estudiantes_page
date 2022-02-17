import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import PlanEstudios from './PlanesYMallas/PlanEstudios';
import MallasPage from './PlanesYMallas/MallasEstudio';

export default function PlanesYMallas() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Planes">
        <Nav
          style={{ textAlign:"left" }}
          className="nav2"
        >
          <Nav.Item>
            <Nav.Link eventKey="Planes">Planes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Mallas">Mallas</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Planes">
              <PlanEstudios/>
            </Tab.Pane>
            <Tab.Pane eventKey="Mallas">
              <MallasPage/>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
