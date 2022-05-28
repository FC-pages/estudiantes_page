import React, { FC, Fragment } from "react";
// import fotoGrupo from "../../../images/grupoInvestigacion22.jpg";
// import "../../../styles/gInvestigacion.css";

// import profesor1 from "../../images/profesor1.jpg"; 
import { optimization_publicaciones, analisisNumerico_publicaciones,EDySD_publicaciones } from '../../../data/publicaciones.js';
const Publicacion = (props: any) => {

  return (
      <>
      <h4 className="tit"><a href = {props.pub.src}>{ props.pub.autores } { props.pub.titulo } <i> { props.pub.revista } {props.pub.volume}, {props.pub.issue} ({props.pub.anio}), {props.pub.pag}.</i></a></h4>
      <br/>
      <hr className="dotted"></hr>
      </>
  )
}

const Articulo: FC<{}> = () => {
  let publicaciones = optimization_publicaciones.concat(analisisNumerico_publicaciones, EDySD_publicaciones);
    publicaciones.sort(function (a: any, b: any) {
                let valueA = a.anio;
                let valueB = b.anio;
                //valueA = eliminarDiacriticos(valueA);
                //valueB = eliminarDiacriticos(valueB);

                let av = valueA
                let bv = valueB
                let r = av < bv ? 1 : av > bv ? -1 : 0;
                if (r === 0) {
                  r =
                    typeof a.key !== 'undefined' && typeof b.key !== 'undefined'
                      ? a.key - b.key
                      : 0;
                }
                return r;
              })
  return (
    <Fragment>
      {
        publicaciones.map((publicacion) => {
          return <Publicacion
            pub = {publicacion}
            />
        })
      }


    </Fragment>
  );
};
export default Articulo;
