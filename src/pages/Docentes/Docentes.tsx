import React from 'react';
import "./styles.css";

import fotomunguia from "../../images/fotomunguia.jpeg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHandPointRight, faPaperclip, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';

import Docente from './Docente';
let { docentes } = require('../../data/data-docentes.js'  );


function Docentes() {
  return (
    <>
      <div className='App-cuerpo'>
                    <div className="App-rectangulo2"></div>
                    <h3> Docentes de pregrado</h3>
                    <div className="App-rectangulo"></div>
                    <section className="App-center">
                        
                        {/*
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b> Ramirez Gutiérrez, Ángel Enrique  </b></td>
                                </tr>
                                <tr>
                                     <td> <img width={110} src="./estudiantes.jpeg" /></td>  
                                    <td> <img width={100} src="./fotoblanco.jpg" /></td> 
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: aramirezg@uni.edu.pe</li>
                                            <li>Cursos asignados* : </li>
                                            <li>Doctorado en Matematica (UNI-2017)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 2010. <a href="http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=27285"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                        */}
                    {/* </section> */}
                    {/* <p>*  Los cursos asignados son con respecto al periodo 2021-2</p> */}
                    {/* <div className="App-rectangulo2"></div> */}
                    {/* <h3> Docentes de postgrado</h3> */}
                    {/* <div className="App-rectangulo"></div> */}
                    {/* <section className="App-center"> */}
                        
                        { docentes.map((d: any) => {
                            return(
                              <Docente 
                                nombre = {d.nombre}
                                foto = { d.foto }
                                email = { d.email }
                                gradoAc = { d.gradoAc }
                                dina = { d.dina }
                                areasDeInteres = { d.areasDeInteres }

                              />
                            )
                        })  }
                        {/*
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b>Acuña Ortega, Richard Flavio</b></td>
                                </tr>
                                <tr>
                                    <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: ...@uni.edu.pe</li>
                                             <li>Cursos asignados* : </li>
                                            <li>Mayor grado (lugar-año)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 20XX. <a href="#"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b>Nombre completo</b></td>
                                </tr>
                                <tr>
                                    <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: abc@uni.edu.pe</li>
                                             <li>Cursos asignados* : </li>
                                            <li>Mayor grado (lugar-año)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 20XX. <a href="#"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b>Nombre completo</b></td>
                                </tr>
                                <tr>
                                    <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: abc@uni.edu.pe</li>
                                            <li>Cursos asignados* : </li> 
                                            <li>Mayor grado (lugar-año)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 20XX. <a href="#"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b>Nombre completo</b></td>
                                </tr>
                                <tr>
                                    <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: abc@uni.edu.pe</li>
                                             <li>Cursos asignados* : </li> 
                                            <li>Mayor grado (lugar-año)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 20XX. <a href="#"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                            
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b>Nombre completo</b></td>
                                </tr>
                                <tr>
                                    <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: abc@uni.edu.pe</li>
                                             <li>Cursos asignados* : </li> 
                                            <li>Mayor grado (lugar-año)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 20XX. <a href="#"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                */}
                    </section>
                    <p>*  Los cursos asignados son con respecto al periodo 2021-2</p>
                </div>     
    </>
  );
}

export default Docentes;