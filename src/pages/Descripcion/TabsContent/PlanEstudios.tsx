import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandPointRight,
  faPaperclip,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";


function PlanEstudios() {
  return (
      <div className="App-cuerpo">
            <p></p>
            <p>
              En el plan de estudios podemos encontrar cursos con una fuerte
              dosis de análisis científico para que el alumno tempranamente
              incursione en aspectos de investigación inicial. Se incluyen en la
              malla curricular seis líneas de especialización, sin embargo ellas
              están íntimamente entre conectadas por los cursos básicos llevados
              en el nivel de estudios generales y los siguientes semestres. En
              este quehacer el docente juega un papel de guía e integrador,
              tocando aspectos de tópicos multidisciplinarios
            </p>
            <p></p>
            <b>
              Total de Créditos Exigidos al alumno para egresar en la Escuela
              Profesional de Matemática:
            </b>
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
                <td>
                  {" "}
                  Total de créditos de cursos electivos o complementarios
                </td>
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
                <td>
                  <b>Total</b>
                </td>
                <td>210</td>
                <td>TOTAL PARA EGRESAR RESPECTO AL PLAN 2018</td>
              </tr>
            </table>
            <p></p>
            <b>Descargar:</b>

            <ul className="App-archivo">
              <li>
                Plan de estudios completo.{" "}
                <FontAwesomeIcon className="icons" icon={faPaperclip} />
              </li>
              <li>
                Tabla de convalidaciones.{" "}
                <FontAwesomeIcon className="icons" icon={faPaperclip} />
              </li>
              <li>
                Malla curricular con electivos 2018-1.{" "}
                <FontAwesomeIcon className="icons" icon={faPaperclip} />
              </li>
              <li>
                Malla curricular sin electivos 2018-1.{" "}
                <FontAwesomeIcon className="icons" icon={faPaperclip} />
              </li>
              <li>
                Sumillas de asignaturas electivas del plan de estudios 2018-1.{" "}
                <FontAwesomeIcon className="icons" icon={faPaperclip} />
              </li>
              <li>
                Sumillas de asignaturas obligatorias del plan de estudios
                2018-1. <FontAwesomeIcon className="icons" icon={faPaperclip} />
              </li>
            </ul>
          </div>
)

}
export default PlanEstudios;