import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHandPointRight,
  faPaperclip,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function Autoridades() {
  const reverse = (s:any) =>{
      return s.split("").reverse().join("");
  }
  return(
      <div className="App-cuerpo">
        <article id="tab4">
              <p></p>
              <section className="App-center">
                <div className="App-profes">
                  <a className="borde">
                    <table cellPadding={6}>
                      <tr>
                        <td colSpan={2}>DECANO </td>
                      </tr>
                      <tr>
                        {/* <td className="App-profes-images"></td>  */}
                        <td>
                          {" "}
                          <img alt="" width={100} src="./pedro_canales_carnet.png" />
                        </td>
                        <td className="App-profes-td2">
                          <b> Dr. Pedro Canales García</b>
                          <ul>
                            <li>
                              {" "}
                              <FontAwesomeIcon icon={faEnvelope} className="icons2" />
                              {/* <FontAwesomeIcon
                                className="icons2"
                                icon={faEnvelope}
                              /> */}{" "}
                              E-mail: pcanales@uni.edu.pe
                            </li>
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="icons2"
                                icon={faPhoneAlt}
                              />{" "}
                              Teléfono: 481-0824{" "}
                            </li>
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                icon={faHandPointRight} className="icons2" 
                              />{" "}
                              Central UNI: Anexos 5000, 5002, 5003
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </a>
                </div>
                <div className="App-profes">
                  <a className="borde">
                    <table cellPadding={6}>
                      <tr>
                        <td colSpan={2}>DIRECTOR DE LA ESCUELA PROFESIONAL DE MATEMÁTICA </td>
                      </tr>
                      {/* <tr>
                        <th className="App-profes-th" colSpan={2}>
                          {" "}
                          Director de la Escuela profesional de Matemática
                        </th>
                      </tr> */}
                      <tr>
                        {/* <td className="App-profes-images"></td>  */}
                        <td>
                          {" "}
                          <img alt="" width={100} src="./eladio_ocania_carnet.jpeg" />
                        </td>
                        <td className="App-profes-td2">
                          <b> Dr. Eladio Ocaña Anaya</b>
                          <ul>
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="icons2"
                                icon={faEnvelope}
                              />{" "}
                              E-mail: eocana@uni.edu.pe
                            </li>
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="icons2"
                                icon={faPhoneAlt}
                              />{" "}
                              Central FC: Anexo 14{" "}
                            </li>
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="icons2"
                                icon={faHandPointRight}
                              />{" "}
                              Central UNI: Anexo 5033
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </a>
                </div>
                <div className="App-profes">
                  <a className="borde">
                    <table cellPadding={6}>
                      <tr>
                        <td colSpan={2}>DIRECTOR DEL DEPARTAMENTO ACAD. DE MATEMÁTICA </td>
                      </tr>
                      {/* <tr>
                        <th colSpan={2}>
                          {" "}
                          Director del Departamento acad. de Matemática
                        </th>
                      </tr> */}
                      <tr>
                        {/* <td className="App-profes-images"></td>  */}
                        <td>
                          {" "}
                          <img alt="" width={100} src="./rosulo_perez_carnet.png" />
                        </td>
                        <td className="App-profes-td2">
                          <b> Dr. Rosulo Perez Cupe</b>
                          <ul>
                            <li>
                              <FontAwesomeIcon
                                className="icons2"
                                icon={faEnvelope}
                              />{" "}
                              E-mail: rperezc@uni.edu.pe{" "}
                            </li>
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="icons2"
                                icon={faPhoneAlt}
                              />{" "}
                              Central FC: Anexo 17
                            </li>
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="icons2"
                                icon={faHandPointRight}
                              />{" "}
                              Central UNI: Anexo 5025
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>                
                  </a>
                </div>
                {/*
                <div className="App-profes">
                  <table cellPadding={7}>
                    <tr>
                      <th colSpan={2}>
                        Director del Instituto de Matemática y Ciencias Afines
                        (IMCA){" "}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <img alt="" width={100} src="./fotoblanco.jpg" />
                      </td>
                      <td className="App-profes-td2">
                        <b> Dr. Roger Javier Metzger Alvan</b>
                        <ul>
                          <li>
                            <FontAwesomeIcon
                              className="icons2"
                              icon={faEnvelope}
                            />{" "}
                            E-mail: metzger@imca.edu.pe{" "}
                          </li>
                          <li>
                            {" "}
                            <FontAwesomeIcon
                              className="icons2"
                              icon={faPhoneAlt}
                            />{" "}
                            Central FC: Anexo 17
                          </li>
                          <li>
                            {" "}
                            <FontAwesomeIcon
                              className="icons2"
                              icon={faHandPointRight}
                            />{" "}
                            Central UNI: Anexo 5025
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
                */}
                {/* <div className="App-profes">
                                <table> 
                                    <tr>
                                        <th colSpan={2}>Secretario </th>
                                    </tr>
                                    <tr>
                                        <td className="App-profes-images"></td> 
                                        <td className="App-profes-td">
                                            <b> Mg. Manuel Teodosio Toribio Cangana</b>
                                            <ul>
                                                <li>E-mail: dabanto@uni.edu.pe</li>
                                                <li>Teléfono: 381-3868/381-3869 </li>
                                                <li>Central UNI: Anexos 5001, 5017</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table> 
                            </div> */}
              </section>
            </article>
        </div>

  )
}

export default Autoridades;
