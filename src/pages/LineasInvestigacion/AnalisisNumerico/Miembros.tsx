import React, { FC, Fragment } from 'react';
import '../../../styles/gInvestigacion.css';
import Miembro from '../Miembro';
import { miembroAnalisisNumerico, miembroAnalisisNumericoTesistas } from '../../../data/data-miembros-Investigacion';

const TabTwo: FC<{}> = () => {
  let eliminarDiacriticos = (texto: any) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Análisis Numérico</h3>
      </div>
      <hr></hr>
      <h4>DOCENTES</h4>
      <div className="App-center">
        {miembroAnalisisNumerico
          .sort(function (a: any, b: any) {
            let valueA = a.nombre;
            let valueB = b.nombre;
            valueA = eliminarDiacriticos(valueA);
            valueB = eliminarDiacriticos(valueB);

            let av = valueA.trim().toLowerCase();
            let bv = valueB.trim().toLowerCase();
            let r = av > bv ? 1 : av < bv ? -1 : 0;
            if (r === 0) {
              r =
                typeof a.key !== 'undefined' && typeof b.key !== 'undefined'
                  ? a.key - b.key
                  : 0;
            }
            return r;
          })
          .map((d: any) => {
            return (
              <Miembro
                nombre={d.nombre}
                foto={d.foto}
                correo={d.email}
                pagina={d.pagina}
                funcion={d.funcion}
                gradoacd={d.gradoAc}
                cv={d.cv}
              />
            );
          })}
      </div>
      <h4>TESISTAS</h4>
      <div className="App-center">
        {miembroAnalisisNumericoTesistas
          .sort(function (a: any, b: any) {
            let valueA = a.nombre;
            let valueB = b.nombre;
            valueA = eliminarDiacriticos(valueA);
            valueB = eliminarDiacriticos(valueB);

            let av = valueA.trim().toLowerCase();
            let bv = valueB.trim().toLowerCase();
            let r = av > bv ? 1 : av < bv ? -1 : 0;
            if (r === 0) {
              r =
                typeof a.key !== 'undefined' && typeof b.key !== 'undefined'
                  ? a.key - b.key
                  : 0;
            }
            return r;
          })
          .map((d: any) => {
            return (
              <Miembro
                nombre={d.nombre}
                foto={d.foto}
                correo={d.email}
                pagina={d.pagina}
                funcion={d.funcion}
                gradoacd={d.gradoAc}
                cv={d.cv}
              />
            );
          })}
      </div>
    </Fragment>
  );
};
export default TabTwo;
