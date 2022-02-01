import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import Articulos from "./Articulos";
import Libros from "./Libros";
import Otros from "./Otros";


export default function PublicacionesMain() {
  return (
    <Container className = "style-gr-i">
      <Tab.Container defaultActiveKey="Acerca" >
        <Nav
          style={{ textAlign:"left" }}
          className="nav2" 
        >
          <Nav.Item>
            <Nav.Link eventKey="Articulos">Artículos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Libros">Libros</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Otros">Otros</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Articulos">
              <Articulos/>
            </Tab.Pane>
            <Tab.Pane eventKey="Libros">
              <Libros/> 
            </Tab.Pane>
            <Tab.Pane eventKey="Otros">
              <Otros/> 
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
