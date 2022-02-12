import React, { useState, useEffect } from "react";
import "./styles.css";

import Docente from "./Docente";
import { Container, Spinner } from "react-bootstrap";
let { docentes } = require("../../data/data-docentes.js");

function Docentes() {
  let eliminarDiacriticos = (texto:any) => {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  }


  const obtenernombreapellido = ( nombre :any) => {
    const titleCase = (str : String) =>  {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
      }


    let nombres = nombre.split(",");
    let primernombre = nombres[1].split(" ")[1];
    let primerapellido = nombres[0].split(" ")[0];
    return titleCase(primernombre +  " " + primerapellido);
  }


  type dataType = {
    docentes: Array<any>;

  };
  const [data, setData] = useState({} as dataType)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=I1YFq5ffUUQ3azZIKONiHp1T3FVyvtcIAM3PfUefodo33h1SqqCuqz2yPAyw02N2o0EMelffpJYrsqhtsXWuCgzWtmVHBJOym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK9hLVD3Kt17yE6DQnI6BmZenSPmJECfh7vyjZJHKn1XgxmIEcEXJBraaCrdVp4vn9pytj_A4aoE&lib=MY1BW--6CseKPHKw9cdL87NwwPj3UkOcQ')
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setData(data);
        console.log(data.docentes);
      })
      .catch(error => {
        console.error("Error fetching", error);
        setError(error);
        
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  let Loading = () => {
    return <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  }
  if (loading) return <Loading/>
  if (error) return <>"Error!"</>;

  return (
    <Container  fluid>
      <div className="App-cuerpo">
        {/* <div className="App-rectangulo2"></div>
        <h3>Docentes</h3>
        <div className="App-rectangulo"></div> */}
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

          {/*docentes.sort(
                function(a :any, b:any) {

                let valueA = a.nombre;
                let valueB = b.nombre;
                valueA = eliminarDiacriticos( valueA )
                valueB = eliminarDiacriticos( valueB )

                let av = valueA.trim().toLowerCase();
                let bv = valueB.trim().toLowerCase();
                let r = ((av > bv) ? 1 : ((av < bv) ? -1 : 0));
                if(r === 0){
                  r = (typeof a.key !== 'undefined' && typeof b.key !== 'undefined')?
                    a.key - b.key : 0;
                }
                  return r;


              }

          ).map((d: any) => {
            return (
              <Docente
                nombre={d.nombre}
                foto={d.foto}
                email={d.email}
                gradoAc={d.gradoAc}
                dina={d.dina}
                areasDeInteres={d.areasDeInteres}
              />
            );
          })*/}
          {data ===null ? <div/> : data.docentes.sort(
                function(a :any, b:any) {

                let valueA = obtenernombreapellido(a.nombres);
                let valueB = obtenernombreapellido(b.nombres);
                valueA = eliminarDiacriticos( valueA )
                valueB = eliminarDiacriticos( valueB )

                let av = valueA.trim().toLowerCase();
                let bv = valueB.trim().toLowerCase();
                let r = ((av > bv) ? 1 : ((av < bv) ? -1 : 0));
                if(r === 0){
                  r = (typeof a.key !== 'undefined' && typeof b.key !== 'undefined')?
                    a.key - b.key : 0;
                }
                  return r;


              }

          ).map((d: any) => {
            return (
              <Docente
                nombre={obtenernombreapellido(d.nombres)}
                foto={d.foto}
                email={d.emailuni}
                gradoAc={d.gradosytitulos}
                dina={d.ctivitae}
                areasDeInteres={d.lineas}
              />
            );
          })}

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
      </div>
    </Container>
  );
}

export default Docentes;
