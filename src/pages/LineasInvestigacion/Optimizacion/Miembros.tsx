import React, { FC, Fragment } from 'react';
import '../../../styles/gInvestigacion.css';
import profesor1 from '../../../images/eladio.jpg';
import profesor2 from '../../../images/ernesto.png';
import profesor3 from '../../../images/flores.png';
import profesor4 from '../../../images/pedroCanales.png';
import profesor5 from '../../../images/navarro.png';
import profesor6 from '../../../images/rosuloPerez.png';
import profesor7 from '../../../images/cernades.png';
import profesorX from '../../../images/profesorX.png';
import { FaFileAlt } from 'react-icons/fa';
/*import CardMore from "../Components/CardMore";*/

const TabTwo: FC<{}> = () => {
  return (
    <>
      <div>
        <h3 className="t-stroke-shadow">Línea de Optimización</h3>
      </div>
      <hr></hr>
      <div className="grid">
        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesor1} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Eladio Ocaña </span> <br />
            <b>E-mail: </b>
            <a href="mailto:eocana@uni.edu.pe" className="tit2">
              eocana@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Coordinador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>
        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesor2} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Ernesto Oré</span> <br />
            <b>E-mail: </b>
            <a href="mailto:eore@uni.edu.pe" className="tit2">
              eore@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>
        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesor3} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Luis Flores </span> <br />
            <b>E-mail: </b>
            <a href="mailto:lfloresl@uni.edu.pe" className="tit2">
              lfloresl@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>

        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesor4} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor:</b>
            <span className="tit">Pedro Canales </span> <br />
            <b>E-mail: </b>
            <a href="mailto:pcanales@uni.edu.pe" className="tit2">
              pcanales@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>

        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesor5} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Frank Navarro </span> <br />
            <b>E-mail: </b>
            <a href="mailto:fnavarro@uni.edu.pe" className="tit2">
              fnavarro@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>

        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesor6} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Rosulo Perez </span> <br />
            <b>E-mail: </b>
            <a href="mailto:rperezc@uni.edu.pe" className="tit2">
              rperezc@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>

        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesorX} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Héctor Guimaray </span> <br />
            <b>E-mail: </b>
            <a href="mailto:hguimaray@uni.edu.pe" className="tit2">
              hguimaray@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Doctor
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>

        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesorX} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">William Echegaray </span> <br />
            <b>E-mail: </b>
            <a href="mailto:wechegaray@uni.edu.pe" className="tit2">
              wechegaray@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Magister
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>

        <div className="cell">
          <div className="itemLeft">
            <img alt="" src={profesor7} className="foto-profesor"></img>
          </div>
          <div className="itemRight">
            <b>Profesor: </b>
            <span className="tit">Jesús Cernades </span> <br />
            <b>E-mail: </b>
            <a href="mailto:jesus.cernades.g@uni.edu.pe" className="tit2">
              jesus.cernades.g@uni.edu.pe
            </a>{' '}
            <br />
            <b>Función: </b> Investigador
            <br />
            <b>Grado académico: </b> Magister
            <br />
            <b>CV: </b>
            {/* <a href="#" className="tit">CV:</a>*/}
            <a className="a-link" href="#">
              <FaFileAlt size={17} />
            </a>{' '}
          </div>
        </div>
      </div>
    </>
  );
};
export default TabTwo;
