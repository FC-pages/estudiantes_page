import Tabs from "./Tabs";
import React from "react";
import "./styles.css";
import Perfil from './TabsContent/Perfil';
import ResenaHistorica from './TabsContent/ResenaHistorica';
import PlanEstudios from './TabsContent/PlanEstudios';
import Autoridades from './TabsContent/Autoridades';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandPointRight,
  faPaperclip,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function Descripcion() {
  return (
    <div>
      <div className="App-grid">
        <Tabs>
          <div label = "Perfil">
            <Perfil/>
          </div>
          <div label="Reseña historica" >
            <ResenaHistorica/>
          </div>
          <div label="Plan y Malla de estudios">
            <PlanEstudios/>
          </div>
          <div label="Autoridades" >
            <Autoridades/>
          </div>
        </Tabs>
      </div>
      <footer className="App-footer">FINAL DE LA PAGINA</footer>
    </div>
  );
}

export default Descripcion;
