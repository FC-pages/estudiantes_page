import React, { FC, Fragment } from "react";
/*import "../App.css";*/
import "../../../styles/gInvestigacion.css";
import pubb from "../../../images/pubb.gif";
import eventA from "../../../images/eventoA.png";
import congreso1 from "../../../images/congreso1.jpg";
import congreso2 from "../../../images/congreso2.jpg";
import conf1 from "../../../images/conf1.jpeg";
import conf2 from "../../../images/conf2.jpeg";


const TabFour: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Optimización</h3>
      </div>
      <hr></hr>

      <h4 className="tit">ISORA (Internacional Seminar on Optimization and Related Areas)</h4>
      <div className="grid">
        <div className="itemLeft3">
          Este seminario se lleva a cabo cada dos años de forma ininterrumpida desde el año 1993, como un <i>homenaje a la memoria del profesor Eugen Blum</i>, matemático suizo que pasó los últimos 20 años de su vida en el Perú como profesor de la Universidad Nacional de Ingeniería (UNI), institución que promueve este seminario después de su muerte. 
          <br/>
          <br/>El área de investigación que desarrolló el prof. Blum fue Optimización Matemática, quien realizó aportes fundamentales. 
          <br/>
          <br/>Las reuniones ISORA son ahora entre las conferencias periódicas más importantes sobre Optimización y sus aplicaciones en América del Sur.<br/>
          <br/>A continuación los enlaces de las tres últimas ediciones:<br/>
          <ul>
            <li><a href="http://isora2019.imca.edu.pe/" className="tit2">http://isora2019.imca.edu.pe/</a></li>
            <li><a href="http://isora2017.imca.edu.pe/" className="tit2">http://isora2017.imca.edu.pe/</a></li>
            <li><a href="http://www.imca.edu.pe/isora2015/" className="tit2">http://www.imca.edu.pe/isora2015/</a></li>
          </ul>
        </div>
        <div className="eventoss">
          <img src={eventA} className="foto-eventos"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      
      
      {/* 
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
*/}

    </Fragment>
  );
};
export default TabFour;
