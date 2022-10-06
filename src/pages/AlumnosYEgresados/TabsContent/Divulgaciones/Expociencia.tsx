import React from "react";
import { Container, Tab, Nav, Row } from "react-bootstrap";

import { FaPaperclip } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

export default function Expociencia() {
  return (
    <Container>
        <Row>
          <div className = "cont-tab">
            <h4 className="t-stroke-shadow-h5">Expociencia 2022-2</h4>
            <p>Esta actividad que se llevará a cabo del 22 al 25 de noviembre del 2022, es organizada por la Facultad de Ciencias - UNI, con la intervención de
sus cinco escuelas y tiene como finalidad difundir a los alumnos, básicamente de colegios, trabajos experimentales y otros, realizados por los profesores, egresados, alumnos e invitados de la Facultad de Ciencias.</p>
            <h5 className="t-stroke-shadow-h5">Inscripción en Expociencia:</h5>
            <div className='vineta'>
              <ul>
                <li>
                  <FaAngleRight size={17}/>
                  Inscripción de Experimento.{' '}
                  <a className="a-link" href="https://forms.gle/fNH9f5pZTe2CECjt9">              
                    <FaPaperclip size={20} />
                  </a>
                </li>
                <li>
                  <FaAngleRight size={17}/>
                  Inscripción en Sala Temática.{' '} 
                  <a className="a-link" href="https://forms.gle/ATdMV8zVo4Yhwe7D8">
                    <FaPaperclip size={20} />
                  </a>
                </li>
                <li>
                  <FaAngleRight size={17}/>
                  Inscripción de Guías.{' '} 
                  <a className="a-link" href="https://forms.gle/tUP9PECa2gCuAhpk8">
                    <FaPaperclip size={20} />
                  </a>
                </li>
              </ul>
            </div>
            <p>Es una feria de proyectos de la Facultad de Ciencias, donde la escuela de matemática participa presentando trabajos aplicados en los rubros de las 6 líneas de investigación:</p>
            <ol>
              <li>Análisis y Teoría de Números.</li>
              <li>Álgebra, Geometría y Topología.</li>
              <li>Probabilidad y Procesos Estocásticos.</li>
              <li>Ecuaciones Diferenciales y Sistemas Dinámicos.</li>
              <li>Optimización.</li>
              <li>Análisis Numérico.</li>
            </ol>
            <p>Desde el año 2019 se ha dejado de realizar este evento debido a la pandemia COVID-19.</p>
          </div>
        </Row>
    </Container>
  );
}
