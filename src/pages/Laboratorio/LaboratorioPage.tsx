import React from 'react';
import { Tab, Container, Nav } from 'react-bootstrap';
import '../Descripcion/styles.css';
import Labo from './TabsContent/Labo';

import { colors } from '../../styles/colors';

export default function Laboratorio() {
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
          </Nav>

          <Container className="p-3">
            <Tab.Content>
              <Tab.Pane eventKey="Laboratorio">
                <Labo/>
              </Tab.Pane>
            </Tab.Content>
          </Container>

        </Tab.Container>
      </Container>
    );
  }