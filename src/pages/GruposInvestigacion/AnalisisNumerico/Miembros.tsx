import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";
import profesor1 from "../../../images/IrlaMantilla3.jpg";
import profesor2 from "../../../images/AngelRamirez2.jpg";
import profesor3 from "../../../images/Mungia2.jpg";
import profesor4 from "../../../images/profesor4.jpg";
import profesor5 from "../../../images/roca.png";

import profesorX from "../../../images/profesorX.png";

/*import CardMore from "../Components/CardMore";*/



const TabTwo: FC<{}> = () => {
  return (
    <Fragment>
    <h3>Miembros del grupo:</h3>
      <div className="container">
        <div className="itemLeft">
          <img src={profesor1} className="foto-profesor"></img></div>
        <div className="itemRight">
          <span className="tit">Irla Mantilla </span>  <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Coordinador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor2} className="foto-profesor"></img></div>
        <div className="itemRight">
          <span className="tit">Angel Ramirez</span>  <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor3} className="foto-profesor"></img></div>
        <div className="itemRight">
          <span className="tit">Jhonatan Munguia </span>  <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor5} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <span className="tit">Luis Roca Galindo </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesorX} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <span className="tit">Josué Zacarías Olivet Rojas </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Tesista<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Bachiller<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesorX} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <span className="tit">Kriss Lady Gutierrez Anco </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Tesista<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Bachiller<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesorX} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <span className="tit">Marcia Paulina Nesiosup Vilca </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Tesista<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Bachiller<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
  
        
      </div>
      
    </Fragment>
  );
};
export default TabTwo;
