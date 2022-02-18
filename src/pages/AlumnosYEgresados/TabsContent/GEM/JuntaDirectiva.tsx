import perfilImage from '../../../../images/perfil_black.png';

function JuntaDirectiva(props: any) {
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
                  <img alt="" src={props.foto ? props.foto : perfilImage} />{' '}
                </div>
              </td>
              <td className="App-profes-td">
                <ul>
                  <li>
                    <span className="tag">Codigo:</span> {props.codigo}
                  </li>
                  <li>
                    <span className="tag">Ciclo:</span> {props.ciclo}
                  </li>
                  <li>
                    <span className="tag">Cargo:</span> {props.cargo}
                  </li>
                  <li className="notnoselect">
                    <span className="tag">E-mail:</span>{' '}
                    <span className="correo-oculto">
                      {reverse(props.correo)}
                    </span>
                  </li>
                  <li>
                    <span className="tag">Celular:</span> {props.cel}
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

export default JuntaDirectiva;
