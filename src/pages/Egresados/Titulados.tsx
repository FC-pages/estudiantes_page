import { Table } from 'react-bootstrap';
import * as S from './styles/main';

function Titulados() {
  return (
    <S.TabContent>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Alumno</th>
            <th>Título de Tesis</th>
            <th>Fecha Defensa Tesis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </S.TabContent>


  );
}

export default Titulados;