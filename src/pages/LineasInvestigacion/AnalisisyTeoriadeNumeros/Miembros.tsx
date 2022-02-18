import React, { FC, Fragment } from 'react';
import '../../../styles/gInvestigacion.css';
import { FaFileAlt } from 'react-icons/fa';

/*import CardMore from "../Components/CardMore";*/

const TabTwo: FC<{}> = () => {
  return (
    <Fragment>
      {/* <h3>Miembros del grupo:</h3> */}
      <div>
        <h3 className="t-stroke-shadow">
          Línea de Análisis y Teoría de Números
        </h3>
      </div>
      <hr></hr>
      <div className="grid">
        <div className="cell">
          <div className="itemLeft">
            <img
              alt=""
              src="oswaldo-velasquez.JPG"
              className="foto-profesor"
              width={110}
            ></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Oswaldo Velásquez </span> <br />
            <b>E-mail: </b>
            <a href="#" className="tit2">
              ovelasquez@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Coordinador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a
              className="a-link"
              href="http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do;jsessionid=cf51bd680f27c78438bdd69717ee?id_investigador=16951"
            >
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TabTwo;
