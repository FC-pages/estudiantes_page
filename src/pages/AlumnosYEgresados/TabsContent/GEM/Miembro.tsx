function Miembro(props: any) {
  return (
    <div className="App-profes">
      <a className="borde">
        <table cellPadding={6}>
          <tr>
            <td colSpan={2}>
              {props.nombre}
            </td>
          </tr>
          <tr>
            <td>
              <img alt="" src={props.foto} />{' '}
            </td>
            <td className="App-profes-td">
              <ul>
                <li>Codigo: {props.codigo} </li>
                <li>Cargo: {props.cargo} </li>
              </ul>
            </td>
          </tr>
        </table>
      </a>
    </div>
  );
}

export default Miembro;
