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
        <h3 className="t-stroke-shadow">Línea de Probabilidad y Procesos Estocásticos</h3>
      </div>
      <hr></hr>

      <h4 className="tit">Random Media and Random Structures in Lima</h4>
      <div className="grid">
        <div className="itemLeft3">
El tema de los medios aleatorios ha tenido un rápido desarrollo durante al menos los últimos treinta años. La motivación original para los modelos en medios aleatorios provino de campos como la física de la materia condensada, la química física, la geología y otros. Hoy en día se puede decir que los medios aleatorios han impregnado casi todos los campos de la teoría de la probabilidad y los modelos aleatorios de diferente tipo.
          <br/>
          <br/>
El presente congreso tiene como objetivo presentar algunos de los últimos desarrollos en el campo de Random Media y su papel en la aparición de estructuras aleatorias. 
          <br/>
          <br/>
          
    <a href="https://rmrslima2020.netlify.app/" className="tit2">https://rmrslima2020.netlify.app/</a>
  </div>
              </div>
      <br/>
      <hr className="dotted"></hr>
    </Fragment>
  );
};
export default TabFour;
