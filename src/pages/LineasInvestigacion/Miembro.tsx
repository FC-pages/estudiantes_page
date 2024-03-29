import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import perfilImage from '../../images/perfil_black.png';

export default function Miembro(props: any) {
  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };

  let titulos = [
    'Maestro',
    'Maestra',
    'Magíster',
    'Doctor',
    'Doctora',
    'Ingeniero',
    'Ingeniera',
  ]; let sinpagina = ['no tengo']
  return (
    <div className="App-profes">
      <span className="borde">
        <table cellPadding={6}>
          <tbody>
            <tr>
              <td colSpan={2}>{props.nombre}</td>
            </tr>
            <tr>
              <td>
                <div className="cont-img">
                <img alt="" src={props.foto ? process.env.REACT_APP_API_URL+props.foto : perfilImage} />{' '}
                </div>
              </td>
              <td className="App-profes-td">
                <ul>
                    <li className="notnoselect">
                      <span className="tag">E-mail:</span>{' '}
                      <span className="correo-oculto">
                        {reverse(props.correo).replace(/\s+/g, '')}
                      </span>
                    </li>
                  {props.funcion ? (
                    <li>
                      <span className="tag">Función:</span> {props.funcion}
                    </li>
                  ) : (
                    <div />
                  )}
                  <li>
                    <span className="tag">Grado académico:</span>{' '}
                    {titulos.includes(props.gradoacd) ? props.gradoacd : <></>}{' '}
                  </li>
                    <li>
                      <span className="tag">CTI Vitae:</span>&nbsp;&nbsp;&nbsp;
                      <a className="a-link" href={props.cv}>
                        <FaFileAlt size={17} />
                      </a>{' '}
                    </li>
                    <li>
                      <span className="tag">Página web:</span>&nbsp;&nbsp;&nbsp;
                      {sinpagina.includes(props.pagina) ? <></> : <a className="a-link" href={props.pagina}>
                        <BiWorld size={17} />
                      </a>}{' '}
                    </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </span>
    </div>
  );
}
