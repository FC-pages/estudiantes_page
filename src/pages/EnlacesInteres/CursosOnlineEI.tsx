import React from "react";

function CursosOnline() {
  return (     
    <div>
    <p className="fs-4 fw-bold">
      1.{" "}
      <a className="a-link-title" href="https://la.mathworks.com/academia/students.html">
        MathWorks for students
      </a>
    </p>
    <p>
      Mathworks brinda una serie de cursos, tutoriales relacionados principalmente al uso del software MATLAB y de modelamiento.
    </p>
    <a href="https://la.mathworks.com/academia/students.html">
      <img
        style={{
          /*backgroundColor: "#126f91",*/
          height: "75px",
          /*padding: "0 10px",*/
        }}
        alt="La Recherche"
        src="./logo-mathworks.png"
      />
    </a>

    <br />

    <p className="mt-3 fs-4 fw-bold">
      2.{" "}
      <a
        className="a-link-title"
        href="https://pythones.net/"
      >
        Pythones
      </a>
    </p>
    <p>
      Pythones es una web que brinda tutoriales para aprender a programar en Python. El programa constituye de 3 modulos: Programación Secuencial, Programación Orientada a Objetos y de Desarrollo de Software.
    </p>
    <a href="https://pythones.net/">
      <img
        style={{ height: "80px" }}
        alt="Sciences et avenir"
        src="./python.png"
      />
    </a>

    <br />

    <p className="mt-3 fs-4 fw-bold">
      3.{" "}
      <a className="a-link-title" href="https://www.geogebra.org/classic?lang=es">
      Geogebra
      </a>
    </p>
    <p>
    GeoGebra es un software de matemáticas dinámicas. En su website encontrará diversos tutoriales para aprender a utilizar este software.
    </p>
    <a href="https://www.geogebra.org/classic?lang=es">
      <img
        style={{ height: "80px" }}
        alt="ens-psl"
        src="./geogebra.png"
      />
    </a>

    <br />

    <p className="mt-3 fs-4 fw-bold">
      4.{" "}
      <a className="a-link-title" href="https://www.edx.org/es/school/mitx">
      HarvardX & MitX
      </a>
    </p>
    <p>
    HarvardX y MitX son una iniciativa estratégica de las universidades Harvard y MIT y ofrecen cursos abiertos en línea. Los cursos son hosteados en la plataforma de EdX, y abarcan desde Estadística, Economía, Data Anális y Machine Learning.
    </p>
    <a href="https://www.edx.org/es/school/mitx">
      <img
        style={{ height: "110px" }}
        alt="Images des Mathématiques"
        src="./harvardMit.png"
      />
    </a>


   
</div>
  )
}

export default CursosOnline;