import React from 'react';
import { Tab, Container, Nav } from 'react-bootstrap';

import './styles.css';
import Preprofesionales from '../Asesoria/TabsContent/Preprofesionales';

/* Tabs */
import CursosElectivos from './TabsContent/CursosElectivos/CursosElectivos';
import ProyectoTesis from './TabsContent/ProyectoTesis/ProyectoTesis'
import Ayudantias from '../Asesoria/TabsContent/Ayudantias';
import PlanesYMallas from './TabsContent/PlanesYMallas/PlanesYMallas';

import { colors } from '../../styles/colors';

export default function CursosProyectos() {
  return (
    <Container className="container-tab-main mt-5" >
      <Tab.Container defaultActiveKey="Planes y Mallas de estudio">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: colors.main }} //#1D3557
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Planes y Mallas de estudio">
              Planes y Mallas de estudio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Cursos electivos">
              Cursos electivos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Proyectos de Tesis">
              Proyectos de Tesis
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Ayudantias">
              Ayudantías
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Preprofesionales">
              Prácticas pre-profesionales
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Planes y Mallas de estudio">
              <PlanesYMallas />
            </Tab.Pane>
            <Tab.Pane eventKey="Cursos electivos">
              <CursosElectivos />
            </Tab.Pane>
            <Tab.Pane eventKey="Proyectos de Tesis">
              <ProyectoTesis />
            </Tab.Pane>
            <Tab.Pane eventKey="Ayudantias">
              <Ayudantias />
            </Tab.Pane>
            <Tab.Pane eventKey="Preprofesionales">
              <Preprofesionales />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
