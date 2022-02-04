import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";
import profesor1 from "../../../images/IrlaMantilla3.jpg";
import profesor2 from "../../../images/AngelRamirez2.jpg";
import profesor3 from "../../../images/Mungia2.jpg";
import profesor4 from "../../../images/profesor4.jpg";
import profesor5 from "../../../images/roca.png";

import profesorX from "../../../images/profesorX.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";


/*import CardMore from "../Components/CardMore";*/



const TabTwo: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Ecuaciones Diferenciales y Sistemas Dinámicos</h3>
      </div>
      <hr></hr>
      <div className="container">
        <div className="itemLeft">
          <img src="roger-metzger.JPG" className="foto-profesor" width={110}></img></div>
        <div className="itemRight">
          <b>Profesor: </b> 
          <span className="tit">Roger Metzger </span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">rmetzger@uni.edu.pe</a> <br/>
          <b>Función: </b> Coordinador<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>CV: </b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do;jsessionid=cf15346c1e14958d9812f7a18dde?id_investigador=2056">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
        
      </div>
    </Fragment>
  );
};
export default TabTwo;