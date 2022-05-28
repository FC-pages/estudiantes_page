import { Table } from 'react-bootstrap';
import * as S from './styles/main';
let { tesistas } = require('../../../../data/data-alumnos.js'  );

function Tesistas() {
  return (
    <S.TabContent>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Título de tesis</th>
            <th>Asesor</th>
            <th>Fecha de inicio</th>
          </tr>
        </thead>
        <tbody>
          {
           tesistas.map((t : any) => {
            return(
              <tr>
                <td>{ t.number }</td>
                <td>{ t.alumno }</td>
                <td>{ t.tituloTesis }</td>
                <td>{ t.asesor }</td>
                <td>{ t.fechaDefensa }</td>
              </tr>
              )
           }) 
          }
        </tbody>
      </Table>
    </S.TabContent>
  );
}

export default Tesistas;
