import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";

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
      
    </>
  );
};
export default Acerca;