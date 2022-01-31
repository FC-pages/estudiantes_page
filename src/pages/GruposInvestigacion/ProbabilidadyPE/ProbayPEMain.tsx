import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
// import Acerca from "./Acerca";
import Miembros from "./Miembros";
// import Proyectos from "./Proyectos";
// import Publicaciones from "./Publicaciones";
// import EventosAcademicos from "./EventosAcademicos";

export default function ProbayPEMainMain() {
  return (
    <Container  className = "style-gr-i">
      <Tab.Container defaultActiveKey="Acerca">
        <Nav
          style={{ textAlign:"left" }}
          className="nav2" 
        >
          <Nav.Item>
            <Nav.Link eventKey="Acerca">Acerca del grupo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Miembros">Miembros</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Proyectos">Proyectos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Publicaciones">Publicaciones</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Eventos">Eventos Académicos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Acerca">
              <div/>
              {/* <Acerca/> */}
            </Tab.Pane>
            <Tab.Pane eventKey="Miembros">
              {/* <div/> */}
              <Miembros/> 
            </Tab.Pane>
            <Tab.Pane eventKey="Proyectos">
              <div/>
              {/* <Proyectos/>  */}
            </Tab.Pane>
            <Tab.Pane eventKey="Publicaciones">
              <div/>
              {/* <Publicaciones/>  */}
            </Tab.Pane>
            <Tab.Pane eventKey="Eventos">
              <div/>
              {/* <EventosAcademicos/>  */}
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}