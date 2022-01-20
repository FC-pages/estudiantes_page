import React, { useState } from "react";
import ReactPlayer from "react-player";

import { Container, Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";

import "../../styles/festudiantes.css";
import Tabs from "./Tabs";
// Tabs Components
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
let { videos } = require("../../data/data-videos.js");

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
    Component: TabOne
  },
  {
    label: "Campo Laboral",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Investigación",
    index: 3,
    Component: TabThree
  }
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
