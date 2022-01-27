import { Table } from 'react-bootstrap';
import * as S from './styles/main';
import { titulados } from '../../data/data-alumnos.js';


function Titulado(props:any) {
  return(
      <tr>
        <td>{ props.index }</td>
        <td>{ props.titulado.nombre }</td>
        <td>{ props.titulado.tituloDeTesis }</td>
        <td>{ props.titulado.fechaSustentacionTesis }</td>
        <td>{ props.titulado.actividadActual }</td>
        <td>{ props.titulado.contacto }</td>
      </tr>
  )
    
}

function Titulados() {
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
          { titulados.map((t:any, i:any) => {
            return <Titulado
                      index = { i + 1 }
                      titulado = { t }
                    />
          }) }
        </tbody>
      </Table>
    </S.TabContent>


  );
}

export default Titulados;
