import React, { FC, Fragment } from "react";
/*import table from "../table.png";*/
import "../../../styles/gInvestigacion.css";
import { EDySD_publicaciones } from "../../../data/publicaciones.js";
import Publicacion from '../Publicacion';

const TabFour: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Ecuaciones Diferenciales y Sistemas Dinámicos</h3>
      </div>
      <hr></hr>

      {
        EDySD_publicaciones.map((publicacion) => {
          return <Publicacion
            pub = {publicacion}
            />
        })
      }
      <br />
      <hr></hr>
    </Fragment>
  );
};
export default TabFour;
