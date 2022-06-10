import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";

let proyectos = [
  {
    titulo: "Ciclos Algebraicos sobre Superficies Algebraicas",
    i : "FC-UNI, 2017.",
    resumen: "",
  },
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
        <h3 className="t-stroke-shadow">Línea de Álgebra, Geometría y Topología</h3>
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
          <Proyecto
            proy = {proyecto}
          />
        )
      }) }
     
    </Fragment>
  );
};
export default TabThree;
