import React from 'react';
import { Tab, Container, Nav } from 'react-bootstrap';
// import '../Descripcion/styles';
import Labo from './TabsContent/Labo';
import Elec from './TabsContent/Elec';
import PTesis from './TabsContent/PTesis';
// import "./styles.css"
import { colors } from '../../styles/colors';

export default function Asesoria() {
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
        <Tab.Container defaultActiveKey="Laboratorio">
          <Nav
            // variant="tabs"
            style={{ backgroundColor: colors.main }} //#1D3557
            className="justify-content-center pt-1 fs-6"
          >
            <Nav.Item>
              <Nav.Link eventKey="Laboratorio">Laboratorio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Electivos">Cursos Electivos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ProyTesis">Proyectos de Tesis</Nav.Link>
            </Nav.Item>
          </Nav>

          <Container className="p-3">
            <Tab.Content>
              <Tab.Pane eventKey="Laboratorio">
                <Labo/>
              </Tab.Pane>
              <Tab.Pane eventKey="Electivos">
                  <Elec/>
              </Tab.Pane>
              <Tab.Pane eventKey="ProyTesis">
                <PTesis/>
              </Tab.Pane>
            </Tab.Content>
          </Container>

        </Tab.Container>
      </Container>
    );
  }