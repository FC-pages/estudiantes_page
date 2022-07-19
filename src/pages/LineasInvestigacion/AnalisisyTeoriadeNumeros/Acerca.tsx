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
      <br/> <br/>
      y sus aplicaciones al estudio de la distribución de conjuntos de números enteros. Esto corresponde a áreas de variable compleja y teoría analítica de números. Entre otros
      <br/> <br/>
      temas, en lo concerniente a análisis, estudiamos problemas de distribución de ceros, polos y en general de puntos singulares de funciones meromorfas, además de
      <br/> <br/>
      problemas de continuación analítica de series, mientras que en lo concerniente a la teoría de números, estudiamos teoremas tauberianos y sus aplicaciones.
    </>
  );
};
export default Acerca;