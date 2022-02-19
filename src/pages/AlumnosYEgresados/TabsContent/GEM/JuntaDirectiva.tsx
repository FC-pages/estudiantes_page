function JuntaDirectiva(props: any) {
  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };
  return (
    <div className="App-profes">
      <span className="borde">
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
                <li>
                  E-mail:{' '}
                  <span className="correo-oculto">{reverse(props.correo)}</span>
                </li>
                <li>Celular: {props.cel} </li>
              </ul>
            </td>
          </tr>
        </table>
      </span>
    </div>
  );
}

export default JuntaDirectiva;
