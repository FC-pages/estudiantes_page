import React from "react";

function Competiciones_estudiantiles() {
  return (
    <div>
    <p className="fs-4 fw-bold">
      1.{" "}
      <a className="a-link-title" href="https://la.mathworks.com/academia/students.html">
        Imagine Cup
      </a>
    </p>
    <p>
    Imagine Cup es una competencia anual patrocinada y organizada por Microsoft Corp. que reúne a estudiantes desarrolladores de todo el mundo para ayudar a resolver algunos de los desafíos más difíciles del mundo.
    </p>
    <a href="https://la.mathworks.com/academia/students.html">
      <img
        style={{
          /*backgroundColor: "#126f91",*/
          height: "75px",
          /*padding: "0 10px",*/
        }}
        alt="La Recherche"
        src="./imaginecupv2.jpg"
      />
    </a>

    <br />

    <p className="mt-3 fs-4 fw-bold">
      2.{" "}
      <a
        className="a-link-title"
        href="https://pythones.net/"
      >
        IMC for University Students
      </a>
    </p>
    <p>
    El Concurso Internacional de Matemáticas para Estudiantes Universitarios es un concurso anual de matemáticas abierto a todos los estudiantes universitarios de matemáticas. Se espera que los estudiantes participantes tengan como máximo veintitrés años de edad en el momento del IMC
    </p>
    <a href="https://pythones.net/">
      <img
        style={{ height: "90px" }}
        alt="Sciences et avenir"
        src="./imc-logo.jpg"
      />
    </a>

    <br />

   
</div>
  )
}

export default Competiciones_estudiantiles;