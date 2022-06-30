import React from 'react';
import { Tab, Container, Nav } from 'react-bootstrap';
import GruposEstPage from './TabsContent/GruposEstPage';
import '../../components/estilosTab.css';
import TestimoniosPage from './TabsContent/TestimoniosPage';
import EgresadosTitulados from './TabsContent/EgresadosTitulados';
import Alumnos from './TabsContent/AlumnosYTesistasTab/Alumnos';
import Tesistas from './TabsContent/AlumnosYTesistasTab/Tesistas';
import AlumnosYTesistas from './TabsContent/AlumnosYTesistas';
import DivulgacionesMain from './TabsContent/DivulgacionesMain';
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
      <Tab.Container defaultActiveKey="Alumnos">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: colors.main }}
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Alumnos">
              Alumnos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Tesistas">
              Tesistas
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
          {/*
          <Nav.Item>
            <Nav.Link eventKey="Egresados y Titulados">
              Egresados
            </Nav.Link>
          </Nav.Item>*/}
        </Nav>
        <div className="pt-3 pb-3 pl-0 pr-0">
          <Tab.Content>
            <Tab.Pane eventKey="Alumnos">
              <Alumnos />
            </Tab.Pane>
            <Tab.Pane eventKey="Tesistas">
              <Tesistas />
            </Tab.Pane>
            <Tab.Pane eventKey="Testimonios">
              <TestimoniosPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Divulgaciones">
              <DivulgacionesMain/>
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
