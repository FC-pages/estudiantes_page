function Miembro(props: any) {
  return (
    <div className="App-profes">
      <table cellPadding={8}>
        <tr>
          <td className="App-profes-nom" colSpan={2}>
            {' '}
            <b>{props.nombre}</b>
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
    </div>
  );
}

export default Miembro;
