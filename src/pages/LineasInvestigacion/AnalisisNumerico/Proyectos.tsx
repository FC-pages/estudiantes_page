import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";

const TabThree: FC<{}> = () => {
  let proyectos = [
    {
      titulo: "SIMULACIÓN NUMÉRICA DE FLUJOS MULTIFASE",
      i : "",
      resumen: "",
    },
    {
      titulo: "COMBUSTION RECUPERACIÓN DE PETRÓLEO RESIDUAL",
      i : "",
      resumen: "",
    },
    {
      titulo: "APLICACIÓN DEL METODO HHO EN LAS ECUACIONES DE MAXWELL EN TIEMPO ARMÓNICO",
      i : "",
      resumen: "En este proyecto se estudiará un modelo matemático basado en las ecuaciones de Maxwell, capaz de explicar la propagación de las ondas electromagnéticas con una única frecuencia, en algún medio como, por ejemplo, materiales magnéticos, plasmas e inclusive el vacío. El interés de estudiar este modelo surge de su aplicación en el diseño de celdas solares, dispositivos fotovoltaicos de película delgada, y en la exploración de petróleo. En este trabajo presentamos un método Híbrido de alto orden (HHO) para el problema de Maxwell armónico en el tiempo. Dado que este problema es notoriamente difícil de resolver con métodos iterativos, con frecuencia se emplean los métodos directos. Sin embargo, los métodos directos requieren grandes cantidades de memoria y, por esta razón, las técnicas eficientes de discretización de alto orden son de suma importancia. Al emplear incógnitas sobre el esqueleto de la malla (es decir, basadas en las caras), HHO es un excelente candidato para esta tarea. Este trabajo, se realizará un análisis de error a priori basado en un esquema HHO y software que verifique los órdenes de convergencia esperados.",
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

  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Análisis Numérico</h3>
      </div>
      <hr></hr>
      {/*
      <h4 className="tit">Propuesta de un modelo matemático para el proceso de combustión in situ y su análisis de solución por ondas viajeras.</h4>
      <p>The increasing popularity of cluster-randomized trials has created many opportunities and challenges for statisticians. In recent years a variation of the traditional cluster randomized trial has been proposed called stepped...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Modelos de Regresión para variables limitadas</h4>
      <p>Una limitación de los modelos clásicos de regresión es que estos asumen un conjunto de supuestos acerca de la naturaleza de las variables consideradas. Supuestos usuales son asumir normalidad en los errores,...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Comparacion de modelos bayesianos para la estimación de la prevalencia de enfermedades</h4>
      <p>La estimación de la prevalencia es una tarea sencilla si se cuentan con pruebas diagnósticas 100% exactas. Sin embargo, en muchos casos lo que ocurre es que no existen pruebas...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Factores asociados con rendimiento académico</h4>
      <p>Relación entre el desempeño en las evaluaciones para la admisión y el rendimiento en los dos primeros ciclos en la PUCP. El objetivo es analizar en qué medida las evaluaciones...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Modelos de Regresión para variables limitadas</h4>
      <p>Una limitación de los modelos clásicos de regresión es que estos asumen un conjunto de supuestos acerca de la naturaleza de las variables consideradas. Supuestos usuales son asumir normalidad en los errores,...</p>
      <hr className="dotted"></hr>
      <h4 className="tit">Statistical Methods for Cluster Randomized Trials</h4>
      <p>The increasing popularity of cluster-randomized trials has created many opportunities and challenges for statisticians. In recent years a variation of the traditional cluster randomized trial has been proposed called stepped...</p>
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
