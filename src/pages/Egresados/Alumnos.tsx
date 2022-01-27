import { Table } from 'react-bootstrap';
import * as S from './styles/main';
let { alumnos } = require('../../data/data-alumnos.js'  );

function Alumnos() {
  return (
    <S.TabContent>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Ciclo relativo</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          {
           alumnos.map((a : any, index: any) => {
            return(
              <tr>
                <td>{ index + 1  }</td>
                <td>{ a.nombre }</td>
                <td>{ a.ciclo }</td>
                <td>{ a.contacto }</td>
              </tr>
              )
           }) 
          }
        </tbody>
      </Table>
    </S.TabContent>
  );
}

export default Alumnos;
