import { useState } from "react";
import { Table } from 'react-bootstrap';
import * as S from './styles/main';
import { titulados } from '../../data/data-alumnos.js';
import { Modal, Button, Card } from "react-bootstrap";

function Titulado(props:any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <tr>
        <td >{ props.index }</td>
        <td><a onClick={handleShow} href="#">{ props.titulado.nombre }</a></td>
        <td>{ props.titulado.tituloDeTesis }</td>
        <td>{ props.titulado.fechaSustentacionTesis }</td>
        <td>{ props.titulado.actividadActual }</td>
        <td>{ props.titulado.contacto }</td>
      </tr>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.titulado.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span style = {{"fontWeight": "bold"}}>Título de tesis: </span> {props.titulado.tituloDeTesis} <a href = "./congreso.pdf">co</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>


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
