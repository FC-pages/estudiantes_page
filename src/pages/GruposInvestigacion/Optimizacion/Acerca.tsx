import React, { FC, Fragment } from "react";
import fotoGrupo from "../../../images/grupoInvestigacion.jpg";
import "../../../styles/gInvestigacion.css";

import profesor1 from "../../images/profesor1.jpg";

const Acerca: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Linea de Optimización</h3>
      </div>
      <hr></hr>
      <div className="quote">
      <cite>
      “Nada en el mundo ocurre sin optimización, y no hay duda de que todos los aspectos del mundo que tienen una base racional pueden explicarse mediante métodos de optimización ». 
      </cite>
      </div>
      <div>
      <figcaption className="quote">
    &mdash;<cite>Leonhard Euler (1744)</cite>  </figcaption>
    </div>
    <br/>
     <img src={fotoGrupo} className="foto-grupo"></img>
      <p className="justify">
      El principal interés del grupo es el <b>desarrollo matemático y computacional de la optimización</b>. El grupo tienen amplia experiencia en la solución de problemas de gran talla,  lineales y cuadráticos, y la puesta en marcha mediante dos de las tecnologías centrales en optimización: <i>el método simplex</i> y los <i>métodos de puntos interiores</i>. El grupo también tiene intereses en optimización no lineal, optimización combinatoria, métodos de descomposición, computación paralela y optimización estocástica. También tiene interés en las aplicaciones de la optimización en temas del sector industrial: energía, transporte, entre otros.   
      </p>
      <p className="justify">
      El grupo tiene colaboración de trabajos con colegas de Italia, Francia, Portugal, España, Canadá,  Brasil, Chile, EEUU, UK, …
      </p>
      <i>Información agregada...(para referencia)</i>
      <h4 className="justify">Justificación</h4>
      <p className="justify">La evaluación se encuentra presente en diversas áreas del saber humano como la  Educación, Psicología, Medicina, Economía, Medio Ambiente, Análisis Político, Ingeniería y Marketing entre otros.  Nuestra sociedad  tiene un marcado interés por el estudio del impacto que tienen diversos programas emprendidos por los gobiernos u organizaciones privadas en la mejora de nuestra calidad de vida.  En tal sentido,  es necesario establecer metodologías adecuadas que permitan no solo evaluar el impacto de tales programas sino también sustentar, afinar e interpretar sus resultados a la luz del establecimiento de los modelos matemáticos y estadísticos  subyacentes en el proceso de medición de las variables en estudio.
Si bien el país experimenta una creciente demanda de este tipo de estudios, existe de otro lado  un déficit en el desarrollo y aplicación de modelos cuantitativos. Frente a este panorama se constituyó el grupo de Investigación de Modelos Matemáticos y Estadísticos para Evaluación (MMEPE). El grupo MMEPE es una línea de investigación sectorial del Departamento de Ciencias reconocida por la antigua Dirección Académica de Investigación DAI  en el año 2005 y es un grupo de Investigación del vicerrectorado de investigación desde 2007. Está formado por profesores de la sección Matemática e incluye profesores de otras unidades de la PUCP y profesores de otras universidades.
</p>
    <h4 className="justify">Objetivo General</h4>
    <p className="justify">El objetivo general del grupo de investigación es proponer, estudiar propiedades, estimar y aplicar diversos modelos estadísticos para la evaluación.</p>
    <h4 className="justify">Objetivos</h4>
    <ul className="justify">
      <li>Proponer, estudiar propiedades e implementar la estimación de modelos de datos en la que las que se desea evaluar una variable dependiente, que puede ser de distinta naturaleza: continua, acotada o categórica. Estos procedimientos se centran en el estudio individual de la variable o en su estudio conjunto a través de modelos de regresión que lo interrelacionen con un conjunto de variables explicativas.</li>
      <li>Analizar y diseñar  modelos  de  datos longitudinales para  estudiar  data de sobrevivencia o data resultante del impacto de intervenciones.</li>
      <li>Proponer, estudiar las propiedades e implementar la estimación de modelos de evaluación que involucren el uso de variables latentes (no observables).</li>
      <li>Proponer, estudiar las propiedades e implementar la estimación de modelos de regresión cuantílica.</li>
      <li>Presentar y difundir los resultados de la investigación y de los aplicativos computacionales en diversos foros académicos y profesionales incluyendo el desarrollo de tutoriales.</li>      
    </ul>
    </Fragment>
  );
};
export default Acerca;
