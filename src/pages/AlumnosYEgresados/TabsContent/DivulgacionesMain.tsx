import React from 'react'
import { Container, Nav, Tab } from 'react-bootstrap'
import Expociencia from './Divulgaciones/Expociencia'
import Feria from './Divulgaciones/Feria'

export default function AlumnosYTesistas() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Expociencia">
        <Nav style={{ textAlign: 'left' }} className="nav2">
          <Nav.Item>
            <Nav.Link eventKey="Expociencia">Expo-Matemática</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Feria">Feria</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Expociencia">
              <Expociencia />
            </Tab.Pane>
            <Tab.Pane eventKey="Feria">
              <Feria />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  )
}
