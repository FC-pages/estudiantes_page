
import { Table } from 'react-bootstrap';
import * as S from './styles/main';

function Egresados() {
  return (
    <S.TabContent>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Título de Tesis</th>
            <th>Fecha de sustentación de tesis</th>
            <th>Actividad Actual</th>
            <th>Contacto</th>
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

export default Egresados;
