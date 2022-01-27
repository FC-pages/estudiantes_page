import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import PlanEstudios from './PlanEstudios';
import MallasPage from './MallasEstudio';

export default function PlanesYMallas() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Planes">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="fs-6"
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
