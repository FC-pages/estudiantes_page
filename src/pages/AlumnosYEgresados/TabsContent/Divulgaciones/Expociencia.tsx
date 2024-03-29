import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

import { FaAngleRight, FaPaperclip } from 'react-icons/fa'
import cron1 from './posters/cron1.jpeg'
import cron2 from './posters/schelud.png'
import poster from './posters/Expo-matematica-ligero.jpg'

export default function Expociencia() {
  return (
    <Container>
      <Row>
        <div className="cont-tab">
          <Row>
            <Col xs lg="7">
              <h4 className="t-stroke-shadow-h5">Expo-Matemática 2022</h4>
              <p>
                Esta actividad se llevará a cabo el viernes 25 de noviembre del
                2022 organizada por la Escuela Profesional de Matemática,
                Facultad de Ciencias, UNI, con la finalidad de difundir la
                carrera a través de trabajos aplicados propuestos por los
                alumnos, profesores, egresados e invitados.
                {/*la Facultad de Ciencias - UNI, con la intervención de
sus cinco escuelas y tiene como finalidad difundir a los alumnos, básicamente de colegios, trabajos experimentales y otros, 
  realizados por los profesores, egresados, alumnos e invitados de la Facultad de Ciencias.*/}
              </p>
              {/*<h5 className="t-stroke-shadow-h5">Inscripción en Expociencia:</h5>*/}
              <div className="vineta">
                <ul>
                  <li>
                    <FaAngleRight size={17} />
                    Ficha de Inscripción{' '}
                    <a
                      className="a-link"
                      href="https://forms.gle/Pv23E5SVnYsdG9vM7"
                    >
                      <FaPaperclip size={20} />
                    </a>
                  </li>
                  <li>
                  <FaAngleRight size={17}/>
                  Inscripción de alumnos guías.{' '}
                  <a className="a-link" href="https://forms.gle/Y1M929nmqG7W2Pvy8">              
                    <FaPaperclip size={20} />
                  </a>
                  </li>
                  {/*<li>
                  <FaAngleRight size={17}/>
                  Inscripción de Experimento en Ciencias.{' '}
                  <a className="a-link" href="https://forms.gle/UFnPv9HoeYKN2tEM8">              
                    <FaPaperclip size={20} />
                  </a>
                </li>*/}
                  {/*<li>
                  <FaAngleRight size={17}/>
                  Inscripción en Sala Temática.{' '} 
                  <a className="a-link" href="https://forms.gle/gXR6zGg9DiEboGsC7">
                    <FaPaperclip size={20} />
                  </a>
              </li>*/}
                  {/*<li>
                    <FaAngleRight size={17} />
                    Inscripción de Guías.{' '}
                    <a
                      className="a-link"
                      href="https://forms.gle/tUP9PECa2gCuAhpk8"
                    >
                      <FaPaperclip size={20} />
                    </a>
            </li>*/}
                </ul>
              </div>
              <h5 className="t-stroke-shadow-h5">Trabajos de Experimentos</h5>
              <p>
                (Biblioteca de la Facultad de Ciencias, 8 a 17 hrs.)
              </p>
              <ol>
                <li>
                  Simulación de la propagación del cáncer "el juego de la
                  vida"{' '}
                  {/*<a
                    className="a-link"
                    href="https://forms.gle/tSxQbJTJfnKH5Aqa9"
                  >
                    <FaPaperclip size={20} />
            </a>*/}
                </li>
                <li>
                  Técnica Bayesiana: clasificación de textos{' '}
                  {/*<a
                    className="a-link"
                    href="https://forms.gle/tSxQbJTJfnKH5Aqa9"
                  >
                    <FaPaperclip size={20} />
          </a>*/}
                </li>
                <li>
                  Diferencias Finitas para un modelo de combustión in situ
                </li>
                <li>Modelo matemático epidemiológico SIRS</li>
                <li>
                  Runge-Kutta orientado a la degeneración de órbitas de
                  satélites
                </li>
                <li>Proceso de inmunización contra la Covid-19</li>
                <li>Cuaterniones para la eliminación de Gimbal Lock</li>
                <li>
                  Ecuación de Bessel para modelar la vibración de una membrana
                </li>
                <li>Algortimos support-vector machines</li>
                <li>La música a través de la teoría de grupos</li>
                <li>Teoría de Grupos y el Cubo de Rubik 3x3x3</li>
                <li>Optimizando el tendido eléctrico de un parque eólico</li>
                <li>
                  Grafos y medidas de tendencia central para "generar mi agenda"
                </li>
                <li>Ilusión de Sugihara</li>
                <li>Problema del Agente Viajero</li>
              </ol>
            </Col>
            <Col>
              <img
                className="effect"
                alt=""
                id="img-vidrio"
                src={poster}
                width={420}
              ></img>
            </Col>
          </Row>
          <Row>
          <p></p>
          </Row>
          <Row>
          <Col xs lg="7">
          <h5 className="t-stroke-shadow-h5">Charlas divulgativas</h5>
          <p>
                (Auditorio de la Facultad de Ciencias, 14 a 19 hrs.)
              </p>
          <ol>
            <li>
              David Morante (UNI). Descomposición aplicada en el despacho
              de energía{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1oBdqA6uDjrGIy8le6E9PpQXr-BR8YkGc/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li>
            <li>Daniel Gutierrez (UCSP). Matemática para la Ciencia de Datos{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1Q0mGAMp6H7sMOmJ3glGY5FNPJtB5qib5/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li>
            <li>
              José Cerda (UNI). Una aplicación al estudio de la anemia en el Perú{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1bMJPAkFfAjSwPuWdu8i_bWyjbIBEcq9m/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li>
            <li>Angel Ramirez (UNI). Descomposición de valores singulares en imágenes{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1eKzIySQXcxFhGk1W5pNRluA0RBrAkg9w/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li>
            <li>Miguel Cutipa (UNI). Resolución numérica del problema de corte{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1CXyKIsMY2B2h0q3fV_mx-ohj6xPp32MO/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li>
            <li>Miller Silva (UNI). The Kissing Number{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1Y5XXOk8RJB2dYVcy7px6YU9rGBY5MgSn/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li>
            <li>Rafael Mundo (UNI). Detección de objetos usando redes neuronales{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1EvPHD5RT8gk8Fw5OT_8ijgFZSB3Z4AXb/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li> 
            <li>Diego Yupanqui (UNI). Formación de imágenes de F-dispersa{' '}
                  <a
                    className="a-link"
                    href="https://drive.google.com/file/d/1yzmq7p0Qg_8BpoZXrcXCX9VhCUjXVO-j/view?usp=share_link"
                  >
                    <FaPaperclip size={20} />
            </a></li>
            <li>Dante Baldeon (INEN). Estadística Matemática aplicada al Cáncer{' '}
                  <a
                    className="a-link"
                    href=" "
                  >
                    <FaPaperclip size={20} />
            </a></li>
          </ol>

          {/*<h4 className="t-stroke-shadow-h5">Expociencia</h4>
            <p>Es una feria de proyectos de la Facultad de Ciencias que empezó en el año 1981, donde se presenta todas las 
              escuelas profesionales con trabajos de difusión. La escuela de matemática participa presentando trabajos aplicados en los rubros de las 6 líneas de investigación:</p>
            <ol>
              <li>Análisis y Teoría de Números.</li>
              <li>Álgebra, Geometría y Topología.</li>
              <li>Probabilidad y Procesos Estocásticos.</li>
              <li>Ecuaciones Diferenciales y Sistemas Dinámicos.</li>
              <li>Optimización.</li>
              <li>Análisis Numérico.</li>
            </ol>
            <p>Desde el año 2019 se ha dejado de realizar este evento debido a la pandemia COVID-19.</p>*/}      
        </Col>
        
        <Col>
        <h5 className="t-stroke-shadow-h5">Programación</h5>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
          {/* <img
            className="effect"
            alt=""
            id="img-vidrio"
            src={cron1}
            width={450}
          ></img> */}
          <img
            className="effect"
            alt=""
            id="img-vidrio"
            src={cron2}
            width={420}
          ></img>
        </Col>
        </Row>

        <h5 className="t-stroke-shadow-h5">Comité organizador</h5>
        <li>Eladio Ocaña (Director de Escuela)</li>
        <li>Rósulo Pérez (Director de Departamento)</li>
        <li>Jonathan Munguia</li>
            <li>Leopoldo Paredes</li>
            <li>Richard Acuña</li>
            <li>Jesús Cernades</li>
        </div>
      </Row>
    </Container>
  )
}
