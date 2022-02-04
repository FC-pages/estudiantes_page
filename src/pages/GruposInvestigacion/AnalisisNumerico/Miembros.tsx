
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
        <h3 className="t-stroke-shadow">Línea de Análisis Numérico</h3>
      </div>
      <hr></hr>
      <div className="container">
        <div className="itemLeft">
          <img src={profesor2} className="foto-profesor"></img></div>
        <div className="itemRight">
        <b>Profesor: </b>
          <span className="tit">Angel Ramirez</span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Función: </b> Coordinador<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>CV: </b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="#">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
        <div className="itemLeft">
          <img src={profesor1} className="foto-profesor"></img></div>
        <div className="itemRight">
          <b>Profesora: </b> 
          <span className="tit">Irla Mantilla </span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Función: </b> Investigadora<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>CV: </b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="#">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
        
        <div className="itemLeft">
          <img src={profesor3} className="foto-profesor"></img></div>
        <div className="itemRight">
          <b>Profesor: </b> 
          <span className="tit">Jonathan Munguia </span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Función: </b> Investigador<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>CV: </b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="#">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
        <div className="itemLeft">
          <img src={profesor5} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <b>Profesor: </b>
          <span className="tit">Luis Roca Galindo </span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Función: </b> Investigador<br/>
          <b>Grado académico: </b> Licenciado<br/>
          <b>CV: </b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="#">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
        <div className="itemLeft">
          <img src={profesorX} className="foto-profesorX"></img></div>
        <div className="itemRight">
        <b>Tesista: </b>
          <span className="tit">Josué Zacarías Olivet Rojas </span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          
          <b>Función: </b> Investigador<br/>
          <b>Grado académico: </b> Bachiller<br/>
          <b>CV: </b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="#">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
        <div className="itemLeft">
          <img src={profesorX} className="foto-profesorX"></img></div>
        <div className="itemRight">
        <b>Tesista: </b>
          <span className="tit">Kriss Lady Gutierrez Anco </span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Función: </b> Investigadora<br/>
          <b>Grado académico: </b> Bachiller<br/>
          <b>CV: </b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="#">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
        <div className="itemLeft">
          <img src={profesorX} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <b>Tesista: </b>
          <span className="tit">Marcia P. Nesiosup Vilca </span>  <br/>
          <b>E-mail: </b>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Función: </b> Investigadora<br/>
          <b>Grado académico: </b> Bachiller<br/>
          <b>CV:</b>
          {/* <a href="#" className="tit">CV:</a>*/}
          <a href="#">
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
          </a>{" "}
        </div>
  
        
      </div>
      
    </Fragment>
  );
};
export default TabTwo;
