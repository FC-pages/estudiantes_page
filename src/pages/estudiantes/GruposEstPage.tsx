import { Container, Tab, Nav } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../styles/estudiantes/grupestud.css";
import React from "react";

export default function GruposEstPage() {
  return (
    <Container className="text-start p-3">
      <Tab.Container defaultActiveKey="GEM">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="GEM">GEM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Grupo 2">Grupo 2</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="GEM">
              <p className="fs-4 fw-bold">Grupo de estudiantes de matemática</p>
              <p>
                Descripción del grupo estudiantil: Grupo de estudiantes de
                matematica de la facultad de ciencias, escuela profecional de
                matematica.
              </p>
              <p className="fs-4 fw-bold">
                Información de contacto y redes sociales
              </p>
              <p>
                <FaYoutube size={25} title="youtube" />{" "}
                <a
                  className="a-link"
                  href="https://www.youtube.com/channel/UCyALMJPXSZBnJ7DlF5yEOvw"
                >
                  Grupo Estudiantil de Matemática - FC
                </a>
              </p>
              <p>
                <MdEmail size={25} title="email" />{" "}
                <a className="a-link" href="mailto:gem@uni.edu.pe">
                  gem@uni.edu.pe
                </a>
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="Grupo 2"></Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
