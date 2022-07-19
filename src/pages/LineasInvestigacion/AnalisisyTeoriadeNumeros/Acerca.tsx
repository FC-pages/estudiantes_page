import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";
import miembros_optimizacion from "../images/Optimizacion/foto_miembros2.png";

const Acerca: FC<{}> = () => {
  return (
    <>
      <div>
        <h3 className="t-stroke-shadow">Línea de Análisis y Teoría de Números</h3>
      </div>
      <hr></hr>

      <br />

      <img alt="" src={miembros_optimizacion} className="foto-grupo" />

      <br />      
      <p className="justify"></p>
      En la línea de Análisis y Teoría de Números de la Facultad de Ciencias estudiamos problemas ligados al análisis de funciones reales y complejas de una y varias variables,
    </>
  );
};
export default Acerca;