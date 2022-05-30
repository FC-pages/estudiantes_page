import React, { FC, Fragment } from 'react';
//import fotoGrupo from '../../../images/grupoInvestigacion.jpg';
import '../../../styles/gInvestigacion.css';
import miembros_optimizacion from "../images/Optimizacion/foto_miembros2.png";

const Acerca: FC<{}> = () => {
  return (
    <>
      <div>
        <h3 className="t-stroke-shadow">Línea de Optimización</h3>
      </div>
      <hr></hr>
     
      <br />

      <img alt="" src={miembros_optimizacion} className="foto-grupo" />

      <br />
      {/*
      <p className="justify">
        El principal interés del grupo es el{' '}
        <b>desarrollo matemático y computacional de la optimización</b>. El
        grupo tienen amplia experiencia en la solución de problemas de gran
        talla, lineales y cuadráticos, y la puesta en marcha mediante dos de las
        tecnologías centrales en optimización: <i>el método simplex</i> y los{' '}
        <i>métodos de puntos interiores</i>. El grupo también tiene intereses en
        optimización no lineal, optimización combinatoria, métodos de
        descomposición, computación paralela y optimización estocástica. También
        tiene interés en las aplicaciones de la optimización en temas del sector
        industrial: energía, transporte, entre otros.
      </p>
      <p className="justify">
        El grupo tiene colaboración de trabajos con colegas de Italia, Francia,
        Portugal, España, Canadá, Brasil, Chile, EEUU, UK, …
      </p>
      <i>Información agregada...(para referencia)</i>
      <h4 className="justify">Justificación</h4>
       */}
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
