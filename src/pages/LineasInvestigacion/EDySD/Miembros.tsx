import React, { FC, Fragment } from 'react';
import '../../../styles/gInvestigacion.css';
import { FaFileAlt } from 'react-icons/fa';

/*import CardMore from "../Components/CardMore";*/

const TabTwo: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">
          Línea de Ecuaciones Diferenciales y Sistemas Dinámicos
        </h3>
      </div>
      <hr></hr>
      <div className="grid">
        <div className="cell">
          <div className="itemLeft">
            <img
              alt=""
              src="roger-metzger.JPG"
              className="foto-profesor"
              width={110}
            ></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Roger Metzger </span> <br />
            <b>E-mail: </b>
            <a href="#" className="tit2">
              rmetzger@uni.edu.pe
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
              href="http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do;jsessionid=cf15346c1e14958d9812f7a18dde?id_investigador=2056"
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
