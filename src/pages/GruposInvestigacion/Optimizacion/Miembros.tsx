import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";
import profesor1 from "../../../images/eladio.jpg";
import profesor2 from "../../../images/ernesto.png";
import profesor3 from "../../../images/flores.png";
import profesor4 from "../../../images/pedroCanales.png";
import profesor5 from "../../../images/navarro.png";
import profesor6 from "../../../images/rosuloPerez.png";
import profesor7 from "../../../images/cernades.png";
import profesorX from "../../../images/profesorX.png";

/*import CardMore from "../Components/CardMore";*/



const TabTwo: FC<{}> = () => {
  return (
    <Fragment>
    <h3>Miembros del grupo</h3>
      <div className="container">
        <div className="itemLeft">
          <img src={profesor1} className="foto-profesor"></img></div>
        <div className="itemRight">
          <span className="tit">Eladio Ocaña </span>  <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Coordinador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor2} className="foto-profesor"></img></div>
        <div className="itemRight">
          <span className="tit">Ernesto Oré</span>  <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor3} className="foto-profesor"></img></div>
        <div className="itemRight">
          <span className="tit">Luis Flores </span>  <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor4} className="foto-profesor"></img></div>
        <div className="itemRight">
          <span className="tit">Pedro Canales </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor5} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <span className="tit">Frank Navarro </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor6} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <span className="tit">Rosulo Perez </span>  <br/>
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
          <span className="tit">Héctor Guimaray </span>  <br/>
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
          <span className="tit">William Echegaray </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
        <div className="itemLeft">
          <img src={profesor7} className="foto-profesorX"></img></div>
        <div className="itemRight">
          <span className="tit">Jesús Cernades </span>  <br/>
          <a href="#" className="tit2">correo@uni.edu.pe</a> <br/>
          <b>Tipo de miembro: </b> Profesor(a)<br/>
          <b>Función: </b> Investigador(a)<br/>
          <b>Grado académico: </b> Doctor<br/>
          <b>Departamento: </b> Departamento Académico de Ciencias<br/>
          <a href="#" className="tit">Revisar CV </a>
        </div>
      </div>
      
    </Fragment>
  );
};
export default TabTwo;
