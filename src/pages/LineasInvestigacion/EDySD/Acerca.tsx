import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";
import fondoSD from '../../../images/fondoSD.jpg';

const Acerca: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Ecuaciones Diferenciales y Sistemas Dinámicos</h3>
      </div>
      <hr></hr>
      <div className="quote">
        <cite>
          “The principles governing the behavior of systems are not widely understood ».
        </cite>
      </div>
      <div>
        <figcaption className="quote">
          &mdash;<cite>Jay Wright Forrester</cite>{' '}
        </figcaption>
      </div>
      <br />
      <img alt="" src={fondoSD} className="foto-grupo foto-analisis-numerico"></img>
      <br />
      <h4 className="justify">Objetivos</h4>
      <p className="justify">
        El objetivo de los sistemas dinámicos es estudiar las ecuaciones de evolución 
        tratar de obtener información de su comportamiento a largo plazo, conociendo las 
        características topológicas y métricas del espacio donde se definen. El estudio 
        de los sitemas dinámicos se remontal final del siglo 19, cuando Henri Poincaré 
        publica un trabajo sobre Mecánica Celeste (Les Méthodes Nouvelles de la Mécanique Céleste). 
        En este trabajo, Poincaré, propuso usar conocimientos de otras áreas como topología, geometría, 
        álgebra y análisis. Con esto logró describir, cualitativamente (sin tratar de resolver explícimente 
        las ecuaciones), la evolución del sistema. Esta propuesta es la que marca el inicio de los Sistemas Dinámicos. <br /> <br />
        
        Actualmente, además de las ecuaciones de evolución, en los sistemas dinámicos se incluyen el estudio de 
        las iteraciones de transformaciones, ecuaciones en diferencias, ecuaciones diferenciales parciales de evolución.<br /> <br />

        Es de notar que los resultados y métodos de los sistemas dinámicos han ayudado a explicar fenómenos complejos 
        en química, física, biología, economía, entre otros.<br /> <br />

        Uno de esos métodos, usa tanto teoría ergódica como análisis. Un ejemplo de esto son los exponentes de Lyapunov, 
        los cuales dan una idea de como es el comportamiento a largo plazo de soluciones que nacen de condiciones iniciales 
        cercanas. Este conocimiento nos permite saber si el sistema es estable o no. Exponentes de Lyapunov positivos indican 
        un sistema muy sensible a las condiciones iniciales. Por otro lado también es necesario estudiar la estabilidad estructural 
        del sistema pues esto nos da un indicativo de que pequeños errores en la determinación del sistema no afectarán 
        el comportamiento global a largo plazo.<br /> <br />
      </p>
      <p className="justify">
        Las áreas de interés del grupo de sistemas dinámicos son:
      </p>
      <ul className="justify">
        <li>Estabilidad estocástica;</li>
        <li>Exponentes de Lyapunov;</li>
        <li>Hiperbolicidad singular</li>
        <li>Conjuntos invariantes e indicadores de estabilidad.</li>
      </ul>
      <br />
    </Fragment>
  );
};
export default Acerca;
