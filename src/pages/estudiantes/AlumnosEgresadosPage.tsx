import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";
import "../../styles/estudiantes/estudiantes.css";
import GruposEstPage from "./GruposEstPage";
import Titulados from "../Egresados/Titulados";
import Tesistas from "../Egresados/Tesistas";
import TestimoniosPage from "./TestimoniosPage";

export default function AlumnosEgresadosPage() {
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
      <Tab.Container defaultActiveKey="Alumnos y Tesistas">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-1 fw-bold fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Alumnos y Tesistas">
              Alumnos y Tesistas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Egresados y Titulados">
              Egresados y Titulados
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Testimonios">Testimonios</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Grupos estudiantiles">
              Grupos estudiantiles
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Alumnos y Tesistas"></Tab.Pane>
            <Tab.Pane eventKey="Egresados y Titulados"></Tab.Pane>
            <Tab.Pane eventKey="Testimonios">
              <TestimoniosPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Grupos estudiantiles">
              <GruposEstPage />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
