import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import Titulados from "../../Egresados/Titulados";
import Egresados from "../../Egresados/Egresados";

export default function EgresadosTitulados() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Egresados">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Egresados">Egresados</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Titulados">Titulados</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Egresados">
              <Egresados/> 
            </Tab.Pane>
            <Tab.Pane eventKey="Titulados">
              <Titulados/> 
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
