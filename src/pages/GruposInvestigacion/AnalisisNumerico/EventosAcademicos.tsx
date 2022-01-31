import React, { FC, Fragment } from "react";
/*import "../App.css";*/
import "../../../styles/gInvestigacion.css";
import pubb from "../../../images/pubb.gif";
import event from "../../../images/event.jpg";
import congreso1 from "../../../images/congreso1.jpg";
import congreso2 from "../../../images/congreso2.jpg";
import conf1 from "../../../images/conf1.jpeg";
import conf2 from "../../../images/conf2.jpeg";

const TabFour: FC<{}> = () => {
  return (
    <Fragment>
      {/* <h3>Eventos Académicos</h3> */}
      <hr></hr>
      <h4 className="tit">LABOSIN</h4>
      <div className="container">
        <div className="itemLeft2">
        Inicio: 20/01/2020 <br/>
        Fin: 22/01/2020 <br/>
        Del 20 al 22 de enero del 2020 se llevará a cabo el Workshop en Geometría y Dinámica. <br/>
        Auditorio de la Sección Matemáticas.<br/>
        Expositores confirmados:<br/>
        <ul>
          <li>Carlos Maquera (USP – Brasil)</li>
          <li>Walter Huaraca (UFV – Brasil)</li>
          <li>Américo Lopez (USP – Brasil)</li>
        </ul>
        </div>
        <div className="itemRight2">
        <img src={conf2} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      
      <h4 className="tit">II Congreso Internacional de Optimización</h4>
      <div className="container">
        <div className="itemLeft2">
        Inicio: 11/09/2021 <br/>
        Fin: 15/09/2021 <br/>
         Este congreso tiene por finalidad continuar con el intercambio de ideas entre los especialistas nacionales e internacionales de la línea de investigación en Optimización sobre sus trabajos recientes, presentar problemas abiertos susceptibles de ser abordados en proyectos de investigación del área de Optimización.</div>
        <div className="itemRight2">
        <img src={congreso2} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      <h4 className="tit">I Congreso Internacional de Optimización</h4>
      <div className="container">
        <div className="itemLeft2">
        Inicio: 11/09/2021 <br/>
        Fin: 15/09/2021 <br/>
        El grupo de investigación en Optimización de la UNI realizó la primera edición de este evento, cuyo objetivoes propiciar un intercambio científico en torno a los métodos de Optimización.</div>
        <div className="itemRight2">
        <img src={congreso1} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      <h4 className="tit">Conferencia: "A martingala approach to convergence to the Kingman's coalescent".</h4>
      <div className="container">
        <div className="itemLeft2">
        El Dr. Enrique chávez Sarmiento del Instituto de Matemática Pura y Aplicada Brasil, realizará una charla titulada "A martingala approach to convergence to the Kingman's coalescent"  </div>
        <div className="itemRight2">
        <img src={conf1} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>


    </Fragment>
  );
};
export default TabFour;
