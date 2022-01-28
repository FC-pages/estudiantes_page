import { useState } from "react";
import { Table } from 'react-bootstrap';
import { Modal, Button, Card } from "react-bootstrap";
import * as S from './styles/main';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

let { alumnos } = require('../../data/data-alumnos.js'  );


function Alumnos() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <>
              <tr>
                <td>{ index + 1  }</td>
                <td><a onClick={handleShow} href="#">{ a.nombre }</a></td>
                <td>{ a.ciclo }</td>
                <td>{ a.contacto }</td>
              </tr>
                <Modal show={show} onHide={handleClose}>
                  <S.ModalContainer>          
                    <Modal.Header closeButton>
                      <div>
                        { a.nombre?
                          <Modal.Title>{ a.nombre }</Modal.Title>:
                          <div/>
                          }
                      </div>
                    </Modal.Header>
                    <Modal.Body>
                      <img src = { a.imgOrce }></img>
                    </Modal.Body>
                    <Modal.Footer>
                        © Escuela Profesional de Matemática
                    </Modal.Footer>
                  </S.ModalContainer>          
                </Modal>
              </>
              )
           }) 
          }
        </tbody>
      </Table>
    </S.TabContent>
  );
}

export default Alumnos;
