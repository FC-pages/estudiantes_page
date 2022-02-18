import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";
import "../../components/estilosTab.css";
import Docentes from './Docentes';
import Publicaciones from './Publicaciones/Publicacionesmain';

import { colors } from '../../styles/colors';

export default function DocentesTabs() {
  return (
    <Container
      style={{
        borderStyle: "solid",
        borderColor: "#1D3557",
        paddingLeft: "0",
        paddingRight: "0",
        backgroundColor: "white",
      }}
      className="mt-5"
    >
      <Tab.Container defaultActiveKey="Docentes">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: colors.main}}
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item >
            <Nav.Link eventKey="Docentes">
              Docentes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Publicaciones">
              Publicaciones
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="pt-3">
          <Tab.Content >
            <Tab.Pane eventKey="Docentes">
              <Docentes />
            </Tab.Pane>
            <Tab.Pane eventKey="Publicaciones">
              <Publicaciones/>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </Container>
  );
}
