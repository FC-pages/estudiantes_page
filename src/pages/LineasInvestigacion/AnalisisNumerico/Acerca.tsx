import React, { FC, Fragment } from 'react';
import fotoGrupo from '../../../images/grupoInvestigacion22.jpg';
import '../../../styles/gInvestigacion.css';
import labosin_miembros from "../images/AnalisisNumerico/imagen_principal2.jpeg";

import profesor1 from '../../images/profesor1.jpg';

const Acerca: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Análisis Numérico</h3>
      </div>
      <hr></hr>
      <div className="quote">
        <cite>
          “All science as it grows toward perfection becomes mathematical in its
          ideas ».
        </cite>
      </div>
      <div>
        <figcaption className="quote">
          &mdash;<cite>Alfred North Whitehead</cite>{' '}
        </figcaption>
      </div>
      <br />
      <img alt="" src={labosin_miembros} className="foto-grupo foto-analisis-numerico"></img>
      <br />
      {/* 
     <h4>Justificación</h4> <i>Información agregada...(para referencia)</i>
      <p>La evaluación se encuentra presente en diversas áreas del saber humano como la  Educación, Psicología, Medicina, Economía, Medio Ambiente, Análisis Político, Ingeniería y Marketing entre otros.  Nuestra sociedad  tiene un marcado interés por el estudio del impacto que tienen diversos programas emprendidos por los gobiernos u organizaciones privadas en la mejora de nuestra calidad de vida.  En tal sentido,  es necesario establecer metodologías adecuadas que permitan no solo evaluar el impacto de tales programas sino también sustentar, afinar e interpretar sus resultados a la luz del establecimiento de los modelos matemáticos y estadísticos  subyacentes en el proceso de medición de las variables en estudio.
Si bien el país experimenta una creciente demanda de este tipo de estudios, existe de otro lado  un déficit en el desarrollo y aplicación de modelos cuantitativos. 
</p>
*/}
      <h4 className="justify">Objetivos</h4>
      <p className="justify">
        El objetivo del grupo es resolver los distintos problemas que surgen en
        la física e ingeniería, a través de una comprensión matemática del
        problema modelo, la búsqueda de su solución a veces en contextos más
        amplios. Haciendo uso de la aproximación numérica inteligente y el
        desarrollo del poder computacional actual, se diseña modelos discretos
        que son capaces de resolverse de manera eficiente y con un alto orden de
        convergencia. <br /> <br />
        También es nuestro objetivo desarrollar matemática que sustente dichos
        modelos aproximados y crear nuevos y mejores métodos numéricos que
        ayuden a la sociedad a resolver las diferentes problemáticas como
        prevenir desastres naturales, a través de nuestros modelos; ser la base
        para el desarrollo de la ingeniería en nuestro país.{' '}
      </p>
      <p className="justify">
        El grupo tiene diferentes colaboradores en Chile, Francia, Brasil,
        España, EEUU:
      </p>
      <ul className="justify">
        <li>Dr. Rommel Bustinza</li>
        <li>Dr. Matteo Cicuttin</li>
        <li>Dr. Grigori Chapiro</li>
        <li>Dr. Santiago de Vicente</li>
        <li>Dr. Bernardo Cockburn</li>
      </ul>
      <h4 className="justify">Temas de investigación:</h4>
      <ul className="justify">
        <li>Ecuaciones Diferenciales Parciales y la Dinámica de fluidos</li>
        <li>Simulación Numérica de la Combustión</li>
        <li>
          Métodos Híbridos de Alto Orden (HHO) para ecuaciones diferenciales
          parciales
        </li>
      </ul>
      <br />
    </Fragment>
  );
};
export default Acerca;
