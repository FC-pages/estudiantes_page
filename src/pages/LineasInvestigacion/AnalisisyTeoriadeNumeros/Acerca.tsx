import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";

const Acerca: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Análisis y Teoría de Números</h3>
      </div>
      <hr></hr>

      <br />

      <img alt="" src={miembros_optimizacion} className="foto-grupo" />

      <br />      
      <p className="justify">
      {/*En el sector industrial o económico surge a menudo la necesidad de determinar los valores de ciertas variables con el fin de maximizar o minimizar algún criterio. 
<br/> <br/>
La modelización de estos tipos de problemas y el desarrollo de métodos de solución (y la implementación eficiente) son de interés importante del grupo de optimización. 
<br/> <br/>
Algoritmos de optimización que incluyen modelos lineales y no lineales, modelos de optimización combinatoria y enfoques heurísticos, son temas que se desarrollan en el grupo.
<br/> <br/>*/}
En los sectores industrial, económico y otros, surgen a menudo la necesidad de determinar los valores de ciertas variables con el fin de maximizar o minimizar algún criterio.
<br/> <br/>

La modelización de estos tipos de problemas y el desarrollo de métodos de solución (y la implementación eficiente) son de interés importante del grupo de optimización.
<br/> <br/>

Algoritmos  que incluyen modelos lineales y no lineales, modelos de optimización combinatoria y enfoques heurísticos, son temas que se desarrollan en el grupo.
      </p>
      {/*
      <h4 className="justify">Objetivo General</h4>
      <p className="justify">
        El objetivo general del grupo de investigación es proponer, estudiar
        propiedades, estimar y aplicar diversos modelos estadísticos para la
        evaluación.
      </p>
      <h4 className="justify">Objetivos</h4>
      <ul className="justify">
        <li>
          Proponer, estudiar propiedades e implementar la estimación de modelos
          de datos en la que las que se desea evaluar una variable dependiente,
          que puede ser de distinta naturaleza: continua, acotada o categórica.
          Estos procedimientos se centran en el estudio individual de la
          variable o en su estudio conjunto a través de modelos de regresión que
          lo interrelacionen con un conjunto de variables explicativas.
        </li>
        <li>
          Analizar y diseñar modelos de datos longitudinales para estudiar data
          de sobrevivencia o data resultante del impacto de intervenciones.
        </li>
        <li>
          Proponer, estudiar las propiedades e implementar la estimación de
          modelos de evaluación que involucren el uso de variables latentes (no
          observables).
        </li>
        <li>
          Proponer, estudiar las propiedades e implementar la estimación de
          modelos de regresión cuantílica.
        </li>
        <li>
          Presentar y difundir los resultados de la investigación y de los
          aplicativos computacionales en diversos foros académicos y
          profesionales incluyendo el desarrollo de tutoriales.
        </li>
      </ul>
      */}
    </>
  );
};
export default Acerca;