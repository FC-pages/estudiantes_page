import React, { useState } from "react";
/*import "./styles.css";*/
import Tabs from "../../components/gInvOptimizacion/Tabs";
// Tabs Components
import TabOne from "../../components/gInvOptimizacion/Acerca";
import TabTwo from "../../components/gInvOptimizacion/Miembros";
import TabThree from "../../components/gInvOptimizacion/Proyectos";
import TabFour from "../../components/gInvOptimizacion/Publicaciones";
import TabFive from "../../components/gInvOptimizacion/EventosAcademicos";

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

export default function App() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="App">
      <h2>Grupo de Optimización</h2>
      <br />
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      <br />
    </div>
  );
}
