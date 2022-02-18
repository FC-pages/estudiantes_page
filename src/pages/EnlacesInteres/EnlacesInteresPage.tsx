import { Tab, Container, Nav } from 'react-bootstrap';
import React from 'react';
//import '../../pages/FuturoEstudiante/styles/tabs.css';

import Competiciones from './CompeticionesEI';
import RevistaCiencias from './RevistacienciasEI';
import Otros from './OtrosEI';
import InstAcademicas from './InstitucionesAcademicasEI';
import Cursosonline from './CursosOnlineEI';
import SeminariosOnline from './SeminariosOnlineEI';

import { colors } from '../../styles/colors';

export default function EnlacesInteresPage() {
  return (
    <Container
      style={{
        borderStyle: 'solid',
        borderColor: '#1D3557',
        paddingLeft: '0',
        paddingRight: '0',
      }}
      className="text-start mt-5"
    >
      <Tab.Container defaultActiveKey="RevistaCiencias">
        <Nav
          style={{ backgroundColor: colors.main }}
          className="justify-content-center pt-1 fs-6 style-with-otros"
        >
          <Nav.Item>
            <Nav.Link eventKey="RevistaCiencias">
              Revista sobre ciencias
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="InstAcademicas">
              Instituciones académicas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="CursosOnline">Cursos Online</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="SeminariosOnline"> Seminarios Online</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Competicionesestudiantiles">
              Competiciones Estudiantiles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Otros"> Otros </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="RevistaCiencias">
              <RevistaCiencias />
            </Tab.Pane>
            <Tab.Pane eventKey="InstAcademicas">
              <InstAcademicas />
            </Tab.Pane>
            <Tab.Pane eventKey="CursosOnline">
              <Cursosonline />
            </Tab.Pane>
            <Tab.Pane eventKey="Competicionesestudiantiles">
              <Competiciones />
            </Tab.Pane>
            <Tab.Pane eventKey="Otros">
              <Otros />
            </Tab.Pane>
            <Tab.Pane eventKey="SeminariosOnline">
              <SeminariosOnline />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
