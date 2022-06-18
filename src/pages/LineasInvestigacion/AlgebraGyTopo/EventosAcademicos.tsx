import React, { FC, Fragment, useState } from "react";
import { Modal, Button} from "react-bootstrap";
/*import "../App.css";*/
import "../../../styles/gInvestigacion.css";
import * as S from "../styles/stylesLineas"
import miembros_optimizacion from "../images/Optimizacion/foto_miembros.png";


const TabFour: FC<{}> = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Álgebra, Geometría y Topología</h3>
      </div>
      <hr></hr>

      <h4 className="tit">VII Escuela IMCA: Geometría algebraica</h4>
      <div className="grid">
        <div className="itemLeft3">
Escuela de matemática pura cuyo tema principal fue sobre los ciclos algebraicos en geometría algebraica.
          <br/>
          <br/>
          
    <a href="http://imca.edu.pe/jpalacios/files/VIIEscuelaIMCA/escuela.html" className="tit2">http://imca.edu.pe/jpalacios/files/VIIEscuelaIMCA/escuela.html</a>
  </div>
              </div>
      <br/>
      <hr className="dotted"></hr>
    </Fragment>
  );
};
export default TabFour;
