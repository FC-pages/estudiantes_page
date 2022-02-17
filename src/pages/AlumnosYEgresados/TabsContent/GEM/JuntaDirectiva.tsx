function JuntaDirectiva(props: any) {
  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };
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
              <li>
                E-mail:{' '}
                <span className="correo-oculto">{reverse(props.correo)}</span>
              </li>
              <li>Celular: {props.cel} </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default JuntaDirectiva;
