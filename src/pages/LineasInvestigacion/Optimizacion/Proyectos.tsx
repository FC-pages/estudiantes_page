import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";

let proyectos = [
  {
    titulo: "A Inertial-Relaxed splitting algorithm for inclusion problems mixing a composite monotone plus a co-coercive operator",
    i : "IdI, FC-UNI, 2021.",
    resumen: "Debido a la gran demanda de métodos de descomposición que permitan lidiar con problemas de optimización de gran talla, proponemos en este proyecto desarrollar algunos algoritmos de descomposición del tipo proximal, aplicados a un modelo extendido de optimización. Además estudiaremos el comportamiento de sus parámetros y la inclusión de nuevos parámetros con el fin de lograr una mejor aceleración de convergencia de estos métodos.",
  },
  {
    titulo: "Optimización combinatoria en grafos con incertidumbre de ubicación",
    i : "Programa Ecosnord, 2020-2022",
    resumen: "",
  },
  {
    titulo: "Dualidad fuerte para problemas de optimización cuadrática",
    i : "IdI, FC-UNI, 2020.",
    resumen: "El desarrollo del presente trabajo es estudiar la dualidad fuerte (salto de dualidad cero y existencia de solución) para problemas de optimización cuadrática.  Los problemas de optimización cuadrática aparecen con frecuencia como un sub-problema en ciertos algoritmos tales como el algoritmo de región de confianza para problemas de optimización con restricciones donde el problema original es minimizar una función diferenciable no lineal sujeta a restricciones de igualdad y/o desigualdad. La teoría de la dualidad Lagrangiana ha demostrado ser una herramienta importante en el estudio de los problemas de optimización convexa, tanto del punto de vista teórico como del aspecto numérico, por ejemplo para desarrollar métodos computacionales tales como el método dual o primal-dual que resuelven el problema primal a través de los multiplicadores de Lagrange. Bajo no convexidad, Rockafellar, entre otros, introdujo el llamado método lagrangiano aumentado (no lineal) para reducir el salto de dualidad. Estudiaremos bajo qué condiciones (necesarias y suficientes) existe dualidad fuerte para un problema cuadrático correspondiente al lagrangiano aumentado. Veremos diferentes tipos de estos lagrangianos : proximal, sharp, entre otros.",
  },
  {
    titulo: "Algoritmos de descomposición aplicados a problemas de programación mixta",
    i : "IdI, FC-UNI, 2020",
    resumen: "",
  }
]

const Proyecto = (props: any) => {
  return (
    <>
      <h4 className="tit">{ props.proy.titulo }. <i>{ props.proy.i }</i></h4>
      <p>{ props.proy.resumen }</p>
      <hr className="dotted"></hr>
    </>
  )
}

const TabThree: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Optimización</h3>
      </div>
      <hr></hr>
      {/* <h3>Proyectos</h3> */}
      {/*
      <h4 className="tit">A Inertial-Relaxed splitting algorithm for inclusion problems mixing a composite monotone plus a co-coercive operator <i>IdI, FC-UNI, 2021</i></h4>
      <p>The increasing popularity of cluster-randomized trials has created many opportunities and challenges for statisticians. In recent years a variation of the traditional cluster randomized trial has been proposed called stepped...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Optimización combinatoria en grafos con incertidumbre de ubicación.  <i>Programa Ecosnord, 2020-2022</i></h4>
      <p>Una limitación de los modelos clásicos de regresión es que estos asumen un conjunto de supuestos acerca de la naturaleza de las variables consideradas. Supuestos usuales son asumir normalidad en los errores,...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Stochastic Optimization and Chance Constraints with Applications to Energy. <i>Programa MathAmsud, 2020-2021</i></h4>
      <p className="justify">La estimación de la prevalencia es una tarea sencilla si se cuentan con pruebas diagnósticas 100% exactas. Sin embargo, en muchos casos lo que ocurre es que no existen pruebas...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Strong duality for quadratic optimization problems. <i>IdI, FC-UNI, 2020</i></h4>
      <p>Relación entre el desempeño en las evaluaciones para la admisión y el rendimiento en los dos primeros ciclos en la PUCP. El objetivo es analizar en qué medida las evaluaciones...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Algoritmos de descomposición aplicados a problemas de programación mixta. <i>IdI, FC-UNI, 2020</i></h4>
      <p>Una limitación de los modelos clásicos de regresión es que estos asumen un conjunto de supuestos acerca de la naturaleza de las variables consideradas. Supuestos usuales son asumir normalidad en los errores,...</p>
      <hr className="dotted"></hr>
      */}
      { proyectos.map((proyecto) => {
        return (
          <>
          <Proyecto proy={proyecto}/>
          </>
        )
      }) }
     
    </Fragment>
  );
};
export default TabThree;
