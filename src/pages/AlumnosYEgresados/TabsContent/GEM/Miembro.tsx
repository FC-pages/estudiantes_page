import perfilImage from '../../../../images/perfil_black.png';

function Miembro(props: any) {
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
                    <span className="tag">Cargo:</span> {props.cargo}
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

export default Miembro;
