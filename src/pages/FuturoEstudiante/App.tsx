import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";

import TabOne from "./PerfilIngreso";
import TabTwo from "./CampoLaboral";
import TabThree from "./Investigacion";


export default function Descripcion() {
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
      <Tab.Container defaultActiveKey="Perfil ingreso">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: "#282C34" }}
          className="justify-content-center pt-1 fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Perfil ingreso">
              Perfil de ingreso
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Campo laboral">
              Campo laboral
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Investigacion">Investigación</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Perfil ingreso">
              <TabOne />
            </Tab.Pane>
            <Tab.Pane eventKey="Campo laboral">
              <TabTwo />
            </Tab.Pane>
            <Tab.Pane eventKey="Investigacion">
              <TabThree />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}

{/*
import React, { useState } from "react";

import "../../styles/festudiantes.css";
import Tabs from "./Tabs";
// Tabs Components

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Perfil de Ingreso",
    index: 1,
    Component: TabOne,
  },
  {
    label: "Campo Laboral",
    index: 2,
    Component: TabTwo,
  },
  {
    label: "Investigación",
    index: 3,
    Component: TabThree,
  },
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="App">
      <br />
      <div className="superDiv">
        <div className="titleBar">Futuro Estudiante</div>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
      <br />
    </div>
  );
}
*/}
