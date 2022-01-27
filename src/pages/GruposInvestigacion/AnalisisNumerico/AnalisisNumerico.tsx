import React, { useState } from "react";
/*import "./styles.css";*/
import Tabs from "./Tabs";
// Tabs Components
import TabOne from "./Acerca";
import TabTwo from "./Miembros";
import TabThree from "./Proyectos";
import TabFour from "./Publicaciones";
import TabFive from "./EventosAcademicos";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Acerca del grupo",
    index: 1,
    Component: TabOne
  },
  {
    label: "Miembros",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Proyectos",
    index: 3,
    Component: TabThree
  },
  {
    label: "Publicaciones",
    index: 4,
    Component: TabFour
  },
  {
    label: "Eventos Académicos",
    index: 5,
    Component: TabFive
  }
];

export default function AnalisisNumerico() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="App-investigacion">
      <h2>Grupo de Análisis Numérico</h2>
      <br />
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      <br />
    </div>
  );
}
