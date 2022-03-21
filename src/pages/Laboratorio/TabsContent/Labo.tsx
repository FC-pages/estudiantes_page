import React from 'react';
import '../../Descripcion/styles.css';
import { FcDocument } from "react-icons/fc"
import { FaAngleRight} from 'react-icons/fa';

function Laboratorio() {
  return (
      <article id="tab1">
        {/* <img src={fotomunguia} />
                        <img src="./fotomunguia.jpeg" /> */}
        <h5 className="t-stroke-shadow-h5">Lineas de Investigación</h5>
        <div className="vineta">
          <ul>
            <li><FaAngleRight size={17}/> Ecuaciones Diferenciales Parciales y la Dinámica de fluidos </li>
            <li><FaAngleRight size={17}/> Simulación numérica de la combustión</li>
            <li><FaAngleRight size={17}/> Métodos híbridos de alto orden (HHO) para ecuaciones diferenciales parciales</li>
          </ul>
        </div>
        <h5 className="t-stroke-shadow-h5">Antecedentes</h5>
        <p>El Laboratorio ha venido desarrollando actividades desde el año 2002, entre estas 
actividades, se encuentran proyectos de investigación conducentes a Tesis de Grado y 
Postgrado, publicación de artículos, participación en diversos eventos como Expociencia
UNI, INNOVA Perú, etc, Congresos nacionales e Internacionales como CIMAC, ICIAM, etc.
Asi como la coordinación de convenios y colaboración académica con Investigadores de las 
instituciones mencionadas a continuación. Dr. Bernardo Cockburm (Doctor Honoris Causa
UNI) Profesor de la Universidad de Minnesota, EEUU. Con el Dr. Chapiro Profesor 
Universidad Federal Minas Gerais, Brazil, Prof. José Marti, Universidad de Navarra, España, 
Prof. Miguel Herrero de la Universidad Complutense, Dr, Santiago de Vicente, Universidad 
Politécnica de Madrid, España para la asesoría conjunta, de Tesis, el dictado de cursos de 
capacitación y talleres, tales como el curso de Elementos Finitos GD, Leyes de 
Conservación y Ecuaciones del flujo de Transporte, programación en la Plataforma 
COMSOL, respectivamente, con la otorgación gratuita de Licencias de COMSOL para el 
dictado de los Talleres, Organizada por LABOSIN y se realizaron en CTIC, y auditorio de 
Ciencias. Los talleres se realizaron en dos oportunidades y cuya gestión fue realizada ante
Directores de COMSOL en Boston en coordinación con el Dr. Jonathan Velazco Expert de 
COMSOL de California-USA. </p>
        <h5 className="t-stroke-shadow-h5">Justificación</h5>
        <p>Continuar con nuestras actividades en I+I+D+S, como Matemáticos especialistas en el Área 
del Análisis y la simulación numérica, para el desarrollo de tecnología de la Matemática 
aplicada al campo de la ciencia e Ingeniería. 
Formación de Investigadores mediante el desarrollo de seminarios y proyectos de tesis, asi 
como cursos de capacitación , integrando y promoviendo la difusión y transferencia del 
conocimiento en esta área, con los grupos de contacto de científicos en estas líneas de 
investigación </p>
        <h5 className="t-stroke-shadow-h5">Objetivos</h5>
        <p>Conformación de proyectos multidisciplinarios transversales en nuestra Institución, así 
como la conformación de grupos internacionales en Cada una de las líneas de investigación 
que se ofrecen en LABOSIN, con la finalidad de Obtener resultados óptimos desarrollados y 
de impacto UNI.PE</p>
        <h5 className="t-stroke-shadow-h5">Relación actual de los grupos de investigación y sus proyectos en ejecución </h5>
        <table className="creditos" cellPadding={5}>
          <tr>
            <td>Nombre del grupo</td>
            <td>Nombre del Proyecto</td>
            <td>Fuente de<br></br>financiamiento</td>
            <td>Periodo de<br></br>Ejecucion</td>
            <td>Monto<br></br>asignado</td>
          </tr>
          <tr>
            <td> GRUPO 1 ECUACIONES DIFERENCIALES PARCIALES EN LA DINAMICA DE FLUIDOS </td>
            <td> SIMULACIÓN NUMÉRICA DE FLUJOS MULTIFASE </td>
            <td> NINGUNO </td>
            <td> 1 AÑO</td>
            <td> NINGUNO </td>
          </tr>
          <tr>
            <td> GRUPO 2 SIMULACIÓN NUMÉRICA DE LA COMBUSTION </td>
            <td> PROPUESTA DE UN MODELO MATEMÁTICO PARA EL PROCESO DE COMBUSTIÓN IN SITU Y SU ANÁLISIS DE SOLUCIÓN POR ONDAS VIAJERAS</td>
            <td> FONDECYT </td>
            <td> 2 AÑOS </td>
            <td> S/. 97 466</td>
          </tr>
          <tr>
            <td>GRUPO 3 MÉTODOS HÍBRIDOS DE ALTO ORDEN (HHO) PARA ECUACIONES DIFERENCIALES PARCIALES</td>
            <td>APLICACIÓN DEL METODO HHO EN LAS ECUACIONES DE MAXWELL EN TIEMPO ARMÓNICO</td>
            <td>NINGUNO </td>
            <td> 1 AÑO </td>
            <td> NINGUNO </td>
          </tr>
        </table>
        <h5 className="t-stroke-shadow-h5"> Relación de tesistas </h5>
        <p> Relación de estudiantes de pregrado y/o posgrado que pertenecen al grupo de investigación que hayan 
inscrito su tesis. </p>
        <table className="creditos" cellPadding={6}>
          <tr>
            <td>Nombre del tesista</td>
            <td>Nombre de la tesis</td>
            <td>Especialidad</td>
          </tr>
          <tr>
            <td> Luis Roca Galindo <br></br>Tesis Msc. FC_UNI </td>
            <td> Simulación Numérica del desplazamiento de aguas poco profundas mediante el método GD Hibrido </td>
            <td> Matemática <br></br>Aplicada </td>
          </tr>
          <tr>
            <td> Josué Zacarías Olivet Rojas<br></br>Tesis Lic. FC_UNI </td>
            <td> Inecuaciones Variacionales Parabólicas PE y SE aplicación en el 
              análisis computacional de la presión en oleoductos susceptibles a rupturas</td>
            <td> Matemática </td>
          </tr>
          <tr>
            <td>Kriss Lasy Stephanie Gutierrez Anco<br></br> Tesis Lic. FC-UNI</td>
            <td>Resolución Numérica de la Ecuación de Fokker Planck en la simulación de problemas de flujo Convectivo-Difusivos</td>
            <td>Matemática </td>
          </tr>
          <tr>
            <td>Marcia Paulina Nesiosup Vilca<br></br> Tesis Lic. FC-UNI </td>
            <td>Análisis del sistema de conservación hiperbólico Friedrichs bidimensional con MEF y Galerkin Estandar Explicito - Implicito aplicado al comportamiento de aguas someras</td>
            <td>Matemática </td>
          </tr>
          <tr>
            <td>María Velázques Campos<br></br>(Tesis Doctoral)<br></br>Universidad de Navarra España</td>
            <td>Construcción de un prototipo de mezcla bifásica radioactiva para evaluación de mapas de corrección en protocolos médicos oncológicos</td>
            <td>Física <br></br>Médica </td>
          </tr>
        </table>
        <h5 className="t-stroke-shadow-h5"> Relación de docentes investigadores (Registro obligatorio en el dina) </h5>
        <table className="creditos" cellPadding={6}>
          <tr>
            <td>Coordinador de grupos</td>
            <td>Codigo UNI</td>
          </tr>
          <tr>
            <td> <strong>Grupo 1</strong> <br></br>Irla Doraliza Mantilla Núñez </td>
            <td> 19858509I </td>
          </tr>
          <tr>
            <td> <strong>Grupo 2</strong> <br></br>Ángel Ramírez Gutiérrez  </td>
            <td> 20108663E</td>
          </tr>
          <tr>
            <td> <strong>Grupo 3</strong> <br></br> Jonathan Munguía La Cotera </td>
            <td> 20120485J</td>
          </tr>
        </table>

        <h5 className="t-stroke-shadow-h5"> Documentos </h5>
        <div className="vineta">
          <ul>
            <li><FaAngleRight size={18}/> Resolución Decanal: <a href='./RD 022-2022v Creación del Laboratorio de Simulación e Investigación Numérica (LABOSIN).pdf'> <FcDocument size={18}/> </a></li>
          </ul>
        </div>
      </article>
  );
}

export default Laboratorio;