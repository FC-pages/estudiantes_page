
import React from 'react';
import Tabs from "./Tabs";
import "./styles.css";
// import App2 from './Description_page';
// import App3 from 'App.js';
import fotomunguia from "../../images/fotomunguia.jpeg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHandPointRight, faPaperclip, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';

function Descripcion() {
  return (
    <div>
        <div className='App-grid'>
            <Tabs>
                <div label="Perfil" className='App-cuerpo'>
                    <article id="tab1">
                        {/* <img src={fotomunguia} />
                        <img src="./fotomunguia.jpeg" /> */}
                        <p></p>
                        <p> La Escuela Profesional de Matemática, ofrece a sus estudiantes una formación competitiva en los 
            fundamentos de la matemática moderna, lo que les permitirá emprender la actividad profesional 
            estimulante y a la vez gratificante de la investigación en Matemática o de sus múltiples campos de 
            aplicación, siempre ligada a la frontera del conocimiento. </p>
                        <p> Es ampliamente conocido que la Matemática cumple un rol trascendental en los sectores 
            informático, financiero, de telecomunicaciones, sanitario, seguros, energético, entre otros. El 
            trabajo que realiza el egresado de la carrera de matemática en estos campos demanda la interacción 
            con profesionales de diversas especialidades que se desenvuelven en estas actividades, por lo que 
            sus oportunidades de crecimiento y desarrollo profesional suelen ser bastante amplias. </p>
                        <p> Es cada vez mayor el número de egresados de la especialidad de matemática que tienen demanda
            e ingresan a trabajar en el sector financiero, ya sea en bancos, AFP y otras instituciones financieras, 
            en empresas de seguros, de desarrollo de software y en grandes empresas y consultoras para 
            encargarse del trabajo con big-data, con algoritmos de optimización, cuantificación y gestión de 
            riesgos, reconocimiento de patrones, aprendizaje automático y en modelamiento de procesos, 
            especialmente en lo que concierne a incertidumbre. </p>
                        <p> En el ámbito de las ciencias, la matemática cumple un papel muy dinámico, con un desarrollo 
            vertiginoso en los últimos años tanto en campos teóricos como aplicados, habiendo participado 
            de manera fundamental en muchos de los avances productivos y tecnológicos de los últimos 
            tiempos. El egresado de la carrera de Matemática se encuentra plenamente preparado asimismo 
            para continuar estudios de especialización en matemática con miras a desarrollar investigación 
            científica de primer nivel en matemática o en ciencias afines. Los estudios de posgrado se pueden 
            continuar en la propia Facultad de Ciencias de la UNI o en otras instituciones, sobre todo 
            extranjeras. Las áreas de mayor desarrollo en la UNI son Optimización, Sistemas Dinámicos, 
            Teoría Analítica de Números, Álgebra, Probabilidad, Geometría y Análisis Numérico. 
            Por último la matemática es la lingua franca de las ciencias, es el lenguaje en el que se plantean 
            las preguntas de la ciencia y la técnica, y es, en muchos casos, la herramienta básica en la búsqueda 
            de su solución </p>
                    
                    {/* <b className="anios">1960</b> */}
                    </article>
                </div>
                <div label="Reseña historica" className='App-cuerpo'>
                    <article id="tab2">
                        <table className="App-resena" cellSpacing={0} cellPadding={5}>
                            <tr>
                                <td>
                                    <b className="anios"> 1960</b>
                                    <p className='App-resena-borde'> Se creó la Facultad de Ciencias Físicas y Matemáticas en la Universidad Nacional de Ingeniería con las carreras de Física Química y Matemática, a partir de la entonces Facultad de Ciencias Básicas y Nucleares.</p>
                                </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> 
                                    <b className="anios">1961</b>
                                    <p className='App-resena-borde'>Se aprobó el Plan de Estudios, que consideró cursos semestralizados en la Facultad a partir del segundo año, pues los estudiantes ingresaban a la Universidad a través del Departamento Preparatorio, realizando un primer año (dos semestres) común a todas las Facultades. Se aprobó también otorgar el Grado de Bachiller en Ciencias Físicas y Matemáticas después de concluidos el cuarto año y previa sustentación de una tesis.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b className="anios">1965</b>
                                    <p className='App-resena-borde'>Se modifica el Plan de Estudios, se considera el primer año común de las Facultades, mantiene los tres años siguientes, al final de los cuales se opta el Grado de Bachiller en Ciencias Físicas y Matemáticas, previa sustentación de una tesis; y crea un Quinto Año en la Facultad en el que el estudiante podrá especializarse en Física o Matemática y optar el Título Profesional de Físico-Matemático, previa sustentación de una tesis.</p></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> 
                                    <b className="anios">1967</b>
                                    <p className='App-resena-borde'>Se modifica nuevamente el Plan de Estudios, se incrementa los cursos de Química a 3 , y se establece que el quinto año (etapa de especialización) tiene una orientación profesional y otra académica. La profesión conduce al Título de Físico-Matemático e involucra una preparación en Ciencia Aplicada, mientras que la académica corresponde a una preparación adecuada para continuar estudios en Postgrado.</p></td>
                            </tr>
                            <tr>
                                <td> 
                                    <b className="anios">1970</b>
                                    <p className='App-resena-borde'>Se aprueba otorgar los Grados de Bachiller en Ciencias con mención en Física, en Matemática, en Química y en Estadística, así como los Títulos Profesionales de Licenciado en cada una de las mencionadas especialidades. El Grado y el Título se optan después de cumplir los 10 semestres académicos que considera el Plan de Estudios, previa sustentación de las respectivas tesis. Cabe mencionar que los estudios en Estadística no se iniciaron sino en el año 1977.</p></td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td> 
                                    <b className="anios">1983</b>
                                    <p className='App-resena-borde'>Se promulga la Ley Universitaria No.23733 que modifica nuevamente la estructura académica y administrativa de las universidades y se crean las actuales Facultades, entre ellas la Facultad de Ciencias (FC), estableciéndose las Escuelas Profesionales de Física, Matemática, Química y Estadística. Se otorgan los Grados de Bachiller en Ciencias y los Títulos Profesionales de Licenciado, respectivos.</p></td>
                            </tr>
                            <tr>
                                <td> 
                                    <img src="./impa.png" /><b className="anios"> 1987</b>
                                    <p className='App-resena-borde'>Se creó la Escuela de Ingeniería Física y la Escuela Profesional de Ciencia de la Computación, por lo que actualmente la Facultad de Ciencias cuenta con las especialidades de FÍSICA, MATEMÁTICA, QUÍMICA, INGENIERIA FÍSICA y CIENCIA DE LA COMPUTACIÓN. 
                                    
                                    A iniciativa de la Facultad de Ciencias se creó, el INSTITUTO DE MATEMÁTICA Y CIENCIAS AFINES (IMCA), cuyos objetivos son la investigación y el apoyo a la formación de Maestros y Doctores, en Matemática; para lo cual se cuenta con la colaboración del Instituto de Matemática Pura y Aplicada (IMPA) de Río de Janeiro, Brasil. El IMCA funciona actualmente en una moderna instalación en el distrito limeño de La Molina construido por el Patronato UNI que preside el Ing. Alberto Benavides de la Quintana. </p></td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td> 
                                    <b className="anios">2010</b>
                                    <p className='App-resena-borde'>La Facultad de Ciencias ha cumplido 50 años de su creación con actividades sociales, culturales, científicas y entrega de títulos honoríficos a egresados, publicándose el libro "50 años de la Facultad de Ciencias", así mismo se ha continuado con cierta intensidad, contando con el apoyo del Rectorado de la Universidad,  el mejoramiento de los equipos de nuestros laboratorios de enseñanza, investigación y de servicios iniciándose asimismo el apoyo financiero de las empresas mineras (Southern Peru Copper Corporation) para estos propósitos.
                                    Se nos ha entregado por Recursos Ordinarios S/. 1 200 000  para equipamiento de un Laboratorio de Química y S/. 970 371,00 para iniciar la construcción de nuevos pabellones, para el Auditorio, Biblioteca, Sala de Lectura, Laboratorios, entre otros.</p></td>
                            </tr>
                        </table>
                    </article>
                </div>
                <div label="Plan de estudios" className='App-cuerpo'>
                    <p></p>
                    <p> En el plan de estudios podemos encontrar cursos con una fuerte dosis de análisis
científico para que el alumno tempranamente incursione en aspectos de
investigación inicial. Se incluyen en la malla curricular seis líneas de
especialización, sin embargo ellas están íntimamente entre conectadas por los
cursos básicos llevados en el nivel de estudios generales y los siguientes
semestres. En este quehacer el docente juega un papel de guía e integrador,
tocando aspectos de tópicos multidisciplinarios</p>
                    <p></p>
                    <b>Total de Créditos Exigidos al alumno para egresar en la Escuela Profesional de Matemática:</b>
                    <table className="App-creditos" cellPadding={5}>
                        <tr>
                            <th> Item </th>
                            <th>Créditos</th>
                            <th>Especificación</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td> 192</td>
                            <td> Créditos de cursos obligatorios</td>
                        </tr>
                        <tr>
                            <td> 02</td>
                            <td> 14</td>
                            <td> Total de créditos de cursos electivos o complementarios</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>1</td>
                            <td>Créditos por actividades extracurriculares (BAE01)</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>2</td>
                            <td>Créditos por prácticas pre-profesionales </td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>1</td>
                            <td>Ayudantia Académica o de Investigación</td>
                        </tr>
                        <tr>
                            <td><b>Total</b></td>
                            <td>210</td>
                            <td>TOTAL PARA EGRESAR RESPECTO AL PLAN 2018</td>
                        </tr>
                    </table>
                    <p></p>
                    <b>Descargar:</b>
                    
                    <ul className="App-archivo">
                        <li>Plan de estudios completo. <FontAwesomeIcon className="icons" icon={faPaperclip} /></li>
                        <li>Tabla de convalidaciones. <FontAwesomeIcon className="icons" icon={faPaperclip} /></li>
                        <li>Malla curricular con electivos 2018-1. <FontAwesomeIcon className="icons" icon={faPaperclip} /></li>
                        <li>Malla curricular sin electivos 2018-1. <FontAwesomeIcon className="icons" icon={faPaperclip} /></li>
                        <li>Sumillas de asignaturas electivas del plan de estudios 2018-1. <FontAwesomeIcon className="icons" icon={faPaperclip} /></li>
                        <li>Sumillas de asignaturas obligatorias del plan de estudios 2018-1. <FontAwesomeIcon className="icons" icon={faPaperclip} /></li>
                    </ul>
                </div>
                <div label="Directivos" className='App-cuerpo'>
                    <article id="tab4">
                        <p></p>
                        <section className="App-center">
                            <div className="App-profes">
                                <table cellPadding={7}> 
                                    <tr>
                                        <th colSpan={2}>Decano </th>
                                    </tr>
                                    <tr>
                                        {/* <td className="App-profes-images"></td>  */}
                                        <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                        <td className="App-profes-td2">
                                            <b> Dr. Pedro Canales García</b>
                                            <ul>
                                                <li> <FontAwesomeIcon className="icons2" icon={faEnvelope} /> E-mail: dabanto@uni.edu.pe</li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faPhoneAlt} /> Teléfono: 481-0824 </li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faHandPointRight} /> Central UNI: Anexos 5000, 5002,5003</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table> 
                            </div>
                            <div className="App-profes">
                                <table cellPadding={7}> 
                                    <tr>
                                        <th colSpan={2}> Secretario </th>
                                    </tr>
                                    <tr>
                                        {/* <td className="App-profes-images"></td>  */}
                                        <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                        <td className="App-profes-td2">
                                            <b> Mg. Manuel Teodosio Toribio Cangana</b>
                                            <ul>
                                                <li> <FontAwesomeIcon className="icons2" icon={faEnvelope} /> E-mail: dabanto@uni.edu.pe</li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faPhoneAlt} /> Teléfono: 381-3868/381-3869 </li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faHandPointRight} /> Central UNI: Anexos 5001, 5017</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table> 
                            </div>
                            <div className="App-profes">
                                <table cellPadding={7}> 
                                    <tr>
                                        <th className= "App-profes-th" colSpan={2}> Director de la Escuela profesional de Matemática</th>
                                    </tr>
                                    <tr>
                                        {/* <td className="App-profes-images"></td>  */}
                                        <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                        <td className="App-profes-td2">
                                            <b> Dr. Eladio Ocaña Anaya</b>
                                            <ul>
                                                <li> <FontAwesomeIcon className="icons2" icon={faEnvelope} /> E-mail: dabanto@uni.edu.pe</li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faPhoneAlt} /> Central FC: Anexo 14 </li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faHandPointRight} /> Central UNI: Anexo 5033</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>   
                            </div>   
                            <div className="App-profes">
                                <table cellPadding={7}> 
                                    <tr>
                                        <th colSpan={2}> Director del Departamento acad. de Matemática</th>
                                    </tr>
                                    <tr>
                                        {/* <td className="App-profes-images"></td>  */}
                                        <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                        <td className="App-profes-td2">
                                            <b> Mg. Rosulo Perez Cupe</b>
                                            <ul>
                                                <li><FontAwesomeIcon className="icons2" icon={faEnvelope} /> E-mail: dabanto@uni.edu.pe </li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faPhoneAlt} /> Central FC: Anexo 17</li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faHandPointRight} /> Central UNI: Anexo 5025</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table> 
                            </div>
                            <div className="App-profes">
                                <table cellPadding={7}> 
                                    <tr>
                                        <th colSpan={2}>Director del Instituto de Matemática y Ciencias Afines (IMCA) </th>
                                    </tr>
                                    <tr>
                                        <td> <img width={100} src="./fotoblanco.jpg" /></td>
                                        <td className="App-profes-td2">
                                            <b> Dr. Roger Javier Metzger Alvan</b>
                                            <ul>
                                                <li><FontAwesomeIcon className="icons2" icon={faEnvelope} /> E-mail: metzger@imca.edu.pe </li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faPhoneAlt} /> Central FC: Anexo 17</li>
                                                <li> <FontAwesomeIcon className="icons2" icon={faHandPointRight} /> Central UNI: Anexo 5025</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>     
                            </div>   
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
                <div label="Docentes" className='App-cuerpo'>
                    <div className="App-rectangulo2"></div>
                    <h3> Docentes de pregrado</h3>
                    <div className="App-rectangulo"></div>
                    <section className="App-center">
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b>Dr. Jonathan Alfredo Munguia La Cotera </b></td>                                
                                </tr>
                                <tr>
                                    {/* <td className="App-profes-imagesm"></td>  */}
                                    <td><img width={110} src="./fotomunguia.jpeg" /> </td>
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: jmunguia@uni.edu.pe</li>
                                            {/* <li>Cursos asignados*: - </li> */}
                                            {/* <li>Maestria en Matemática Aplicada (UMLV) </li> */}
                                            <li>Doctorado en Ciencias con mencion en Matematica (UNI)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 2012.  <a href="http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=82909"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a></li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b> Ramirez Gutiérrez, Ángel Enrique  </b></td>
                                </tr>
                                <tr>
                                    {/* <td> <img width={110} src="./estudiantes.jpeg" /></td>  */}
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
                    {/* </section> */}
                    {/* <p>*  Los cursos asignados son con respecto al periodo 2021-2</p> */}
                    {/* <div className="App-rectangulo2"></div> */}
                    {/* <h3> Docentes de postgrado</h3> */}
                    {/* <div className="App-rectangulo"></div> */}
                    {/* <section className="App-center"> */}
                        <div className="App-profes">
                            <table cellPadding={8}> 
                                <tr>
                                    <td className="App-profes-nom" colSpan={2}> <b>Abanto Silva, Dimas Percy </b></td>
                                </tr>
                                <tr>
                                    <td> <img width={100} src="./fotoblanco.jpg" /></td> 
                                    <td className="App-profes-td">
                                        <ul>
                                            <li>E-mail: ...@uni.edu.pe</li>
                                            {/* <li>Cursos asignados* : </li> */}
                                            <li>Doctorado en Matemática (IMPA, Brasil - 20XX)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 2018. <a href="http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do;jsessionid=e00c18456d41e955a0328e6db5b7?id_investigador=152641"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
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
                                            {/* <li>Cursos asignados* : </li> */}
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
                                            {/* <li>Cursos asignados* : </li> */}
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
                                            {/* <li>Cursos asignados* : </li> */}
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
                                            {/* <li>Cursos asignados* : </li> */}
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
                                            {/* <li>Cursos asignados* : </li> */}
                                            <li>Mayor grado (lugar-año)</li>
                                            <li>Trayectoria como docente en educación superior a partir del año 20XX. <a href="#"><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table> 
                        </div>
                    </section>
                    <p>*  Los cursos asignados son con respecto al periodo 2021-2</p>
                </div>
            </Tabs>
        </div>
        <footer className= "App-footer">
        FINAL DE LA PAGINA
        </footer>
      </div>
  );
}

export default Descripcion;

