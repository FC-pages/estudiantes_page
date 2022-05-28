import React from 'react';

function Competiciones_estudiantiles() {
  return (
    <div>
      <p className="mt-3 fs-4 fw-bold">
        1.{' '}
        <a className="a-link-title" href="http://pec3.org">
          Peruvian Competence Center of Scientific Computing
        </a>
      </p>
      <p className="ms-3">
        PeC 3 es una red de universidades y científicos de Perú y Alemania con
        el objetivo de fomentar la investigación y la educación en computación
        científica, matemáticas aplicadas y computacionales.
      </p>
      <a className="ms-3" href="http://pec3.org">
        <img
          style={{ height: '90px' }}
          alt="Peruvian Competence Center of Scientific Computing"
          src="./enlaces/pecCubo.jpg"
        />
      </a>

      <br />

      <p className="fs-4 fw-bold">
        2.{' '}
        <a
          className="a-link-title"
          href="https://la.mathworks.com/academia/students.html"
        >
          Imagine Cup
        </a>
      </p>
      <p className="ms-3">
        Imagine Cup es una competencia anual patrocinada y organizada por
        Microsoft Corp. que reúne a estudiantes desarrolladores de todo el mundo
        para ayudar a resolver algunos de los desafíos más difíciles del mundo.
      </p>
      <a
        className="ms-3"
        href="https://la.mathworks.com/academia/students.html"
      >
        <img
          style={{
            height: '75px',
          }}
          alt="Imagine Cup"
          src="./enlaces/imaginecupv2.jpg"
        />
      </a>

      <br />

      <p className="mt-3 fs-4 fw-bold">
        3.{' '}
        <a className="a-link-title" href="https://pythones.net/">
          IMC for University Students
        </a>
      </p>
      <p className="ms-3">
        El Concurso Internacional de Matemáticas para Estudiantes Universitarios
        es un concurso anual de matemáticas abierto a todos los estudiantes
        universitarios de matemáticas. Se espera que los estudiantes
        participantes tengan como máximo veintitrés años de edad en el momento
        del IMC.
      </p>
      <a className="ms-3" href="https://pythones.net/">
        <img
          style={{ height: '90px' }}
          alt="IMC for University Students"
          src="./enlaces/imc-logo.jpg"
        />
      </a>
    </div>
  );
}

export default Competiciones_estudiantiles;
