import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";

const Acerca: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Probabilidad y Procesos Estocásticos</h3>
      </div>
      <hr></hr>
      <p>
        El área de probabilidad de la Escuela de Matemática cuenta con un pequeño pero activo grupo de investigadores y un cierto número de estudiantes motivados.
      </p>

      <p>
        En la actualidad desarrollamos investigación en caminos aleatorios en medios aleatorios, ecuación KPZ, sistemas de partículas en interacción y percolación, además de la relación con la física estadística.
      </p>

      <p>
        También se desarrollan aplicaciones en la industria, economía, finanzas y otros temas, que involucran principalmente el modelamiento de procesos estocásticos, simulación de Monte Carlo y la optimización estocástica.
      </p>

      <p>
        El grupo mantiene colaboración activa con el IMPA en Brasil y la PUC de Chile.
      </p>
    </Fragment>
  );
};
export default Acerca;
