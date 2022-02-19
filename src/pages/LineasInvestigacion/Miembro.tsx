import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

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
                  <li>
                    <span className="tag">CV:</span>{' '}
                    <a className="a-link" href={props.cv}>
                      <FaFileAlt size={17} />
                    </a>
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
