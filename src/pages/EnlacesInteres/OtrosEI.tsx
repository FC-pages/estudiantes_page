import React from "react";

function Otros() {
  return (
    <div>
    <p className="fs-4 fw-bold">
      1.{" "}
      <a className="a-link-title" href="https://www.rsme.es/2022/01/ultimo-boletin-2/">
        Real Sociedad Matemática Española
      </a>
    </p>
    <p>
    La Real Sociedad Matemática Española es una sociedad española científica dedicada a las matemáticas, cuyos fines, tal como se recogen en sus estatutos, son la promoción y divulgación de las matemáticas y sus aplicaciones y el fomento de su investigación y de su enseñanza en todos los niveles educativos.
    </p>
    <a href="https://www.rsme.es/2022/01/ultimo-boletin-2/">
      <img
        style={{
          /*backgroundColor: "#126f91",*/
          height: "80px",
          /*padding: "0 10px",*/
        }}
        alt="La Recherche"
        src="./RSME.jpg"
      />
    </a>

    <br />

    <p className="mt-3 fs-4 fw-bold">
      2.{" "}
      <a
        className="a-link-title"
        href="https://iciam.org/history-iciam"
      >
        The International Council for Industrial and Applied Mathematics
      </a>
    </p>
    <p>
    El Consejo Internacional de Matemáticas Industriales y Aplicadas (ICIAM) es una organización mundial de sociedades profesionales de matemáticas aplicadas y de otras sociedades con un interés significativo en las matemáticas industriales o aplicadas. El Consejo trabaja para promover las aplicaciones de las matemáticas en todas partes del mundo.
    </p>
    <a href="https://iciam.org/history-iciam">
      <img
        style={{ height: "90px" }}
        alt="Sciences et avenir"
        src="./iciam-logo.png"
      />
    </a>

    <br />

    
    <p className="mt-3 fs-4 fw-bold">
      3.{" "}
      <a
        className="a-link-title"
        href="https://www.conicyt.cl/becasconicyt/"
      >
        Prociencia - Concytec
      </a>
    </p>
    <p>
    El Concurso Internacional de Matemáticas para Estudiantes Universitarios es un concurso anual de matemáticas abierto a todos los estudiantes universitarios de matemáticas. Se espera que los estudiantes participantes tengan como máximo veintitrés años de edad en el momento del IMC
    </p>
    <a href="https://www.conicyt.cl/becasconicyt/">
      <img
        style={{ height: "90px" }}
        alt="Sciences et avenir"
        src="./prociencia.png"
      />
    </a>
  
    <br />
    <p className="mt-3 fs-4 fw-bold">
      4.{" "}
      <a
        className="a-link-title"
        href="https://www.conicyt.cl/becasconicyt/"
      >
        Becas CONYCIT
      </a>
    </p>
    <p>
    El Programa cofinancia Becas Integradas para becarios(as) de Doctorado de CONICYT que deseen realizar un proyecto de investigación como parte de su tesis 
    </p>
    <a href="https://www.conicyt.cl/becasconicyt/">
      <img
        style={{ height: "90px" }}
        alt="Sciences et avenir"
        src="./beca-conycit.jpg"
      />
    </a>
  
    <br />

    
<p className="mt-3 fs-4 fw-bold">
  5.{" "}
  <a
    className="a-link-title"
    href="http://pec3.org"
  >
  Peruvian Competence Center of Scientific Computing
  </a>
</p>
<p>
PeC 3 es una red de universidades y científicos de Perú y Alemania con el objetivo de fomentar la investigación y la educación en computación científica, matemáticas aplicadas y computacionales. 
</p>
<a href="http://pec3.org">
  <img
    style={{ height: "90px" }}
    alt="Sciences et avenir"
    src="./pecCubo.jpg"
  />
</a>
   
   
</div>
)

}
export default Otros;