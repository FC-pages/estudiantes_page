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
        <h3 className="t-stroke-shadow">Línea de Optimización</h3>
      </div>
      <hr></hr>

      <h4 className="tit">ISORA (Internacional Seminar on Optimization and Related Areas)</h4>
      <div className="grid">
        <div className="itemLeft3">
Este seminario se organiza cada dos años de manera ininterrumpida desde el año 1993, en homenaje a la memoria del profesor Eugen Blum, matemático suizo quien pasó sus últimos 20 años de vida en el Perú como profesor de la Universidad Nacional de Ingeniería (UNI), institución que promueve este seminario.
          <br/>
          <br/>
El área de investigación que desarrolló el prof. Blum fue Optimización Matemática, quien realizó aportes relevantes al área.
          <br/>
          <br/>
El ISORA es ahora una de las reuniones periódicas más importantes sobre Optimización (y sus aplicaciones) en América del Sur.
          <br/>
          <br/>
A continuación los enlaces de las tres últimas ediciones:
          <br/>
                    <ul>
            <li><a href="http://isora2019.imca.edu.pe/" className="tit2">http://isora2019.imca.edu.pe/</a></li>
            <li><a href="http://isora2017.imca.edu.pe/" className="tit2">http://isora2017.imca.edu.pe/</a></li>
            <li><a href="http://www.imca.edu.pe/isora2015/" className="tit2">http://www.imca.edu.pe/isora2015/</a></li>
          </ul>
        </div>
        <div className="eventoss" onClick={handleShow}>
          <img src={miembros_optimizacion} className="foto-eventos"></img>
        </div>
            <Modal show={show} onHide={handleClose} className = "modal-image">
              <img src={miembros_optimizacion} className="foto-eventos"></img>
            </Modal>
      </div>
      <br/>
      <hr className="dotted"></hr>
    </Fragment>
  );
};
export default TabFour;
