import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

export default function Miembro(props: any) {
  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };
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
                  <img alt="" src={props.foto} />{' '}
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
                  <li>
                    <span className="tag">Función:</span> {props.funcion}
                  </li>
                  <li>
                    <span className="tag">Grado académico:</span>{' '}
                    {props.gradoacd}
                  </li>
                    {!props.pagina && props.cv ? (
                      <li>
                        <span className="tag">CTI Vitae:</span>&nbsp;&nbsp;&nbsp;
                        <a className="a-link" href={props.cv}>
                          <FaFileAlt size={17} />
                        </a>{' '}
                      </li>
                    ) : (
                      <div />
                    )}
                    {props.pagina ? (
                      <li>
                        <span className="tag">Página web:</span>&nbsp;&nbsp;&nbsp;
                        <a className="a-link" href={props.pagina}>
                          <BiWorld size={17} />
                        </a>{' '}
                      </li>
                    ) : (
                      <div />
                    )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </span>
    </div>
  );
}
