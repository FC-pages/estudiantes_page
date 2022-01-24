import { Table } from 'react-bootstrap';
import * as S from './styles/main';
let { tesistas } = require('../../data/data-tesistas.js'  );

function Tesistas() {
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
          {
           tesistas.map((t : any) => {
            return(
              <tr>
                <td>{ t.number }</td>
                <td>{ t.alumno }</td>
                <td>{ t.tituloTesis }</td>
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
