import React from 'react';
import matematicoVidrio from '../../../images/matematico_vidrio.jpg';
import optimizacion from '../../../images/optimizacion.jpg';
import salud from '../../../images/matematica_salud.jpeg';
import profesores from '../../../images/profesores.jpeg';
import * as S from '../styles/styles';

function Perfil() {
  return (
    <S.ContainerPerfil>
      <article id="tab1">
        {/* <img src={fotomunguia} />
                        <img src="./fotomunguia.jpeg" /> */}
        <p></p>
        <p className = "p-parrafo">
          {' '}
          La Escuela Profesional de Matemática, ofrece a sus estudiantes una
          formación competitiva en los fundamentos de la matemática moderna, lo
          que les permitirá emprender la actividad profesional estimulante y a
          la vez gratificante de la investigación en Matemática o de sus
          múltiples campos de aplicación, siempre ligada a la frontera del
          conocimiento.{' '}
        </p>
        <img alt="" id="img-vidrio" src={matematicoVidrio} width={600}></img>
        <p className = "s-parrafo">
          {' '}
          Es ampliamente conocido que la Matemática cumple un rol trascendental
          en los sectores informático, financiero, de telecomunicaciones,
          sanitario, seguros, energético, entre otros. El trabajo que realiza el
          egresado de la carrera de matemática en estos campos demanda la
          interacción con profesionales de diversas especialidades que se
          desenvuelven en estas actividades, por lo que sus oportunidades de
          crecimiento y desarrollo profesional suelen ser bastante amplias.{' '}
        </p>
        <p className = "t-parrafo">
          {' '}
          Es cada vez mayor el número de egresados de la especialidad de
          matemática que tienen demanda e ingresan a trabajar en el sector
          financiero, ya sea en bancos, AFP y otras instituciones financieras,
          en empresas de seguros, de desarrollo de software y en grandes
          empresas y consultoras para encargarse del trabajo con big-data, con
          algoritmos de optimización, cuantificación y gestión de riesgos,
          reconocimiento de patrones, aprendizaje automático y en modelamiento
          de procesos, especialmente en lo que concierne a incertidumbre.{' '}
        </p>
        <img alt="" id="img-optimizacion" src={optimizacion} width={300}></img>
        {/*<img alt="" id="img-salud" src={salud} width={400}></img>-->*/}
        <p>
          {' '}
          En el ámbito de las ciencias, la matemática cumple un papel muy
          dinámico, con un desarrollo vertiginoso en los últimos años tanto en
          campos teóricos como aplicados, habiendo participado de manera
          fundamental en muchos de los avances productivos y tecnológicos de los
          últimos tiempos. El egresado de la carrera de Matemática se encuentra
          plenamente preparado asimismo para continuar estudios de
          especialización en matemática con miras a desarrollar investigación
          científica de primer nivel en matemática o en ciencias afines. Los
          estudios de posgrado se pueden continuar en la propia Facultad de
          Ciencias de la UNI o en otras instituciones, sobre todo extranjeras.
          Las áreas de mayor desarrollo en la UNI son Optimización, Sistemas
          Dinámicos, Teoría Analítica de Números, Álgebra, Probabilidad,
          Geometría y Análisis Numérico. Por último, la matemática es la lingua
          franca de las ciencias, es el lenguaje en el que se plantean las
          preguntas de la ciencia y la técnica, y es, en muchos casos, la
          herramienta básica en la búsqueda de su solución{' '}
        </p>
        <img alt="" id="img-profesores" src={profesores} width={600}></img>
        {/* <b className="anios">1960</b> */}
      </article>
    </S.ContainerPerfil>
  );
}

export default Perfil;
