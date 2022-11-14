import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

import { FaAngleRight, FaPaperclip } from 'react-icons/fa'
import cron1 from './posters/cron1.jpeg'
import cron2 from './posters/cron2.jpeg'
import poster from './posters/Expo-matematica-2022.png'

export default function Expociencia() {
  return (
    <Container>
      <Row>
        <div className="cont-tab">
          <Row>
            <Col>
              <h4 className="t-stroke-shadow-h5">Expo-Matemática 2022-2</h4>
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
                    Inscripción al evento.{' '}
                    <a
                      className="a-link"
                      href="https://forms.gle/tSxQbJTJfnKH5Aqa9"
                    >
                      <FaPaperclip size={20} />
                    </a>
                  </li>
                  {/*<li>
                  <FaAngleRight size={17}/>
                  Inscripción de Experimento.{' '}
                  <a className="a-link" href="https://forms.gle/fNH9f5pZTe2CECjt9">              
                    <FaPaperclip size={20} />
                  </a>
</li>*/}
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
                  <li>
                    <FaAngleRight size={17} />
                    Inscripción de Guías.{' '}
                    <a
                      className="a-link"
                      href="https://forms.gle/tUP9PECa2gCuAhpk8"
                    >
                      <FaPaperclip size={20} />
                    </a>
                  </li>
                </ul>
              </div>
              <h5 className="t-stroke-shadow-h5">Lista de Experimentos</h5>
              <ol>
                <li>
                  Simulación de la propagación del cáncer usando "el juego de la
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
                  Teoría de grafos y medidas de tendencia central para "generar
                  mi agenda"
                </li>
              </ol>
            </Col>
            <Col>
              <img
                className="effect"
                alt=""
                id="img-vidrio"
                src={poster}
                width={450}
              ></img>
            </Col>
          </Row>

          <h5 className="t-stroke-shadow-h5">Charlas divulgativas</h5>
          <ol>
            <li>
              David Morante. Técnicas de descomposición aplicadas en el despacho
              de energía
            </li>
            <li>Daniel Gutierrez. Matemática para la Ciencia de Datos</li>
            <li>
              José Cerda. Una aplicación al estudio de la anemia en el Perú
            </li>
            <li>John Cotrina. Juegos de Nash</li>
            <li>Ruben Lizarbe. Números primos y Criptografía RSA</li>
            <li>Miller Silva. The Kissing Number</li>
            <li>Diego Yupanqui. Formación de imágenes de F-dispersa</li>
            <li>
              Angel Ramirez. Descomposición de valores singulares en comprensión
              de imágenes
            </li>
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
        </div>
        <Col>
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
            width={450}
          ></img>
        </Col>
      </Row>
    </Container>
  )
}
