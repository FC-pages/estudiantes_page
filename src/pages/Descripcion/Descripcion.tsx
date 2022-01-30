import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";
import "../../pages/FuturoEstudiante/styles/estudiantes.css";
import Perfil from './TabsContent/Perfil';
import ResenaHistorica from './TabsContent/ResenaHistorica';
import PlanesYMallas from './TabsContent/PanesYMallas';
import Autoridades from './TabsContent/Autoridades';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandPointRight,
  faPaperclip,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";



export default function Descripcion() {
  return (

    <Container
      style={{
        borderStyle: "solid",
        borderColor: "#1D3557",
        paddingLeft: "0",
        paddingRight: "0",
      }}
      className="mt-5"
    >
      <Tab.Container defaultActiveKey="Perfil">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Perfil">
              Perfil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Resenia">
              Reseña histórica
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Planes y Mallas de estudio">Planes y Mallas de estudio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Autoridades">
              Autoridades
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Perfil">
              <Perfil />
            </Tab.Pane>
            <Tab.Pane eventKey="Resenia">
              <ResenaHistorica />
            </Tab.Pane>
            <Tab.Pane eventKey="Planes y Mallas de estudio">
              <PlanesYMallas />
            </Tab.Pane>
            <Tab.Pane eventKey="Autoridades">
              <Autoridades />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}

