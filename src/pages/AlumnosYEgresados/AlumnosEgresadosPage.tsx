import React from 'react';
import { Tab, Container, Nav } from 'react-bootstrap';
import GruposEstPage from './TabsContent/GruposEstPage';
import '../../components/estilosTab.css';
import TestimoniosPage from './TabsContent/TestimoniosPage';
import EgresadosTitulados from './TabsContent/EgresadosTitulados';
import AlumnosYTesistas from './TabsContent/AlumnosYTesistas';
import Expociencia from './TabsContent/Expociencia';
import { colors } from '../../styles/colors';

export default function AlumnosEgresadosPage() {
  return (
    <Container
      style={{
        borderStyle: 'solid',
        borderColor: '#1D3557',
        paddingLeft: '0',
        paddingRight: '0',
        backgroundColor: 'white',
      }}
      className="mt-5"
    >
      <Tab.Container defaultActiveKey="Alumnos y Tesistas">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: colors.main }}
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Alumnos y Tesistas">
              Alumnos y Tesistas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Testimonios">Testimonios</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Divulgaciones">Divulgaciones</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="GEM">GEM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Egresados y Titulados">
              Egresados
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="pt-3 pb-3 pl-0 pr-0">
          <Tab.Content>
            <Tab.Pane eventKey="Alumnos y Tesistas">
              <AlumnosYTesistas />
            </Tab.Pane>
            <Tab.Pane eventKey="Egresados y Titulados">
              <EgresadosTitulados />
            </Tab.Pane>
            <Tab.Pane eventKey="Testimonios">
              <TestimoniosPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Divulgaciones">
              <Expociencia/>
            </Tab.Pane>
            <Tab.Pane eventKey="GEM">
              <GruposEstPage />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </Container>
  );
}
