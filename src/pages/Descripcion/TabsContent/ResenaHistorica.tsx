import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import ReactPlayer from "react-player";
import { Row, Card } from "react-bootstrap";
import React from "react";

function ResenaHistorica() {
  let videos = [
    {
      name: "Testimonio del prof. Segundo Félix Escalante del Águila",
      href: "https://www.youtube.com/watch?v=PzzDDUtftvA",
      Description:
        "",
    }
  ];
  return (
      
          <div className="App-cuerpo">
              <table className="resena" cellSpacing={0} cellPadding={5}>
                <tr>
                  <td>
                    <b className="anios"> 1960</b>
                    <p className="resena-borde">
                      {" "}
                      Promulgada la Ley Universitaria No. 13417, se creó la Facultad de 
                      Ciencias Físicas y Matemáticas en la Universidad Nacional de 
                      Ingeniería, a partir de la entonces Facultad de Ciencias Básicas 
                      y Nucleares.
                    </p>
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <b className="anios">1961</b>
                    <p className="resena-borde">
                    Se aprueba el Plan de Estudios, que considera cursos semestralizados en 
                    la Facultad a partir del segundo año, pues en ese entonces los 
                    estudiantes ingresaban a la Universidad a través del Departamento 
                    Preparatorio, realizando un primer año (dos semestres) común a todas 
                    las Facultades. Se aprueba también otorgar el Grado de Bachiller en 
                    Ciencias Físicas y Matemáticas después de concluir el cuarto año y 
                    previa sustentación de una tesis.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b className="anios">1962</b>
                    <p className="resena-borde">
                      A iniciativa del Dr. José Tola Pasquel, se crea el Instituto de 
                      Matemática de la UNI (IMUNI), siendo el Ing. Mario Samamé Boggio, rector 
                      de la UNI. Lamentablemente por cuestiones políticas internas (en la UNI) 
                      y externas (en el gobierno) hicieron que IMUNI cerrara en 1968.</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <b className="anios">1965</b>
                    <p className="resena-borde">
                      Se modifica el Plan de Estudios, se considera el primer año común de las 
                      Facultades con énfasis en los cursos de álgebra, análisis y física 
                      general, manteniéndose los tres años siguientes, al final de los cuales 
                      se opta el Grado de Bachiller en Ciencias Físicas y Matemáticas previa 
                      sustentación de una tesis; y se crea también el Quinto Año en la Facultad
                      en el que el estudiante pueda especializarse en Física o Matemática y 
                      optar el Título Profesional de Físico-Matemático, previa sustentación de 
                      una tesis.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b className="anios">1967</b>
                    <p className="resena-borde">
                      Se modifica nuevamente el Plan de Estudios, se incrementa a tres el 
                      número de cursos de Química, y se establece que el quinto año (etapa de 
                      especialización) tenga dos orientaciones, profesional y académica. La 
                      orientación profesional conduce al Título de Físico-Matemático e 
                      involucra una preparación en Ciencia Aplicada; la orientación académica 
                      corresponde a una preparación adecuada para continuar estudios en 
                      Postgrado.
                    </p>
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td>
                    <b className="anios">1969</b>
                    <p className="resena-borde">
                    Se decreta la Ley Universitaria No.17437, cambiando la estructura 
                    académica y administrativa de las universidades. Se elimina el régimen 
                    facultativo y se crea el de Departamentos y Programas Académicos. Es así 
                    como se crea el Programa Académico de Ciencias (PAC) con las 
                    especialidades de Física, Matemática y Química.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="" src="./impa.png" />
                    <b className="anios"> 1983</b>
                    <p className="resena-borde">
                      Se promulga la Ley Universitaria No.23733 que modifica nuevamente la 
                      estructura académica y administrativa de las universidades y se crean 
                      las actuales Facultades, entre ellas la Facultad de Ciencias (FC), 
                      estableciéndose las Escuelas Profesionales de Física, Matemática, 
                      Química y Estadística. Se otorgan los Grados de Bachiller en Ciencias 
                      y los respectivos Títulos Profesionales de Licenciado.{" "}
                    </p>
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td>
                    <b className="anios">1997</b>
                    <p className="resena-borde">
                    A iniciativa de la Facultad de Ciencias se creó, mediante Resolución 
                    Rectoral No. 000109 del 14.2.97, el Instituto de Matemática y Ciencias 
                    Afines (IMCA), cuyos objetivos son la investigación y el apoyo a la 
                    formación de Maestros y Doctores en Matemática. Desde el 2006 el IMCA 
                    viene funcionando en una moderna instalación en el distrito limeño de 
                    La Molina construido por el Patronato UNI precidido en ese entonces por 
                    el Ing. Alberto Benavides de la Quintana. 
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b className="anios">2009</b>
                    <p className="resena-borde">
                      Resolución Rectoral Nº 1481 del 3.11.09 se creó la Escuela Profesional 
                      de Ciencia de la Computación.
                    </p>
                    
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td>
                    <b className="anios"> 2010</b>
                    <p className="resena-borde">
                      La Facultad de Ciencias cumple 50 años de su creación con actividades 
                      sociales, culturales, científicas y entrega de títulos honoríficos a 
                      egresados, publicándose el libro "50 años de la Facultad de Ciencias".{" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="top">
                    <img alt="" src="./impa.png" />
                    <b className="anios2" > Actualmente</b>
                    <p className="resena-borde">
                      La Facultad de Ciencias cuenta con las especialidades de Física, 
                      Matemática, Química, Ingeniería física y Ciencias de la computación. {" "}
                    </p>
                  </td>
                  <td>
                    <Row xs={1} md={1} className="g-4">
                      <S.ContainerVideos className="containerTabOne">
                        <div className="video">
                          {videos.map((video: any) => {
                            return (
                              <Card bg="dark" text="white">
                                <ReactPlayer controls width="100%" height={200}  url={video.href} />
                                <Card.Body>
                                  <Card.Title>{video.name}</Card.Title>
                                  <Card.Text>
                                      {video.name === "Importancia de estudiar Matemática" ? 
                                        <>
                                        <div className="quote">
                                          <cite>
                                            “{video.Description}». 
                                          </cite>
                                        </div>
                                        <div>
                                          <figcaption className="quote">
                                            &mdash;<cite>Henri Poincaré</cite>  
                                          </figcaption>
                                        </div>
                                        </>
                                        :
                                        video.Description
                                        }
                                  </Card.Text>



                                </Card.Body>
                              </Card>
                            );
                          })}
                        </div>
                      </S.ContainerVideos>
                    </Row> 
                  </td>
                </tr>
              </table>
          </div>


  )
}

export default ResenaHistorica;
