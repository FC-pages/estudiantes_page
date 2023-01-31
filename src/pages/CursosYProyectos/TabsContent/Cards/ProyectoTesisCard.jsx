import React from 'react';
import { useState, useEffect } from "react";
import { Modal, Button, Card, Table } from "react-bootstrap";
import { FaPaperclip } from 'react-icons/fa';

import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";

let fecha_apertura = '12-01-2023'
let fecha_cierre = '27-01-2023'

function ProyectoTesisCard(props) {

  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  
  const handleClickLink = () =>{
    if(show){ setShow(false); }
    else{ setShow(true); }
  }

  useEffect(() => {
    if (typeof props.inscritos === 'string') {
      fetch(props.inscritos)
        .then(res => res.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    } else {
      setData(props.inscritos);
    }
  }, []);
  
  return (
    <S.TCard3>
      <Card >
        <Card.Body className="card-testimony">
          <Card.Title className="card-title">{props.nombres_docente} {props.apellidos_docente}</Card.Title>
          <Card.Text className="card-text">
            Temas: <a target= "_blank" rel="noreferrer" href={props.descripcion}><FaPaperclip size={20}  /></a><br></br>
            E-mail: {props.correo}<br></br>
            Fecha de apertura : {fecha_apertura}<br></br>
            Fecha de cierre: {fecha_cierre}
          </Card.Text>            
          <Card.Link target="_blank" rel="noreferrer" href = {props.preinscripcion} className=" btn btn-sm ver-mas">
            Preinscripción
          </Card.Link>
          <Card.Link className=" btn btn-sm ver-mas" onClick={handleClickLink} href="#">
            Lista de pre-inscritos
          </Card.Link>
        </Card.Body>
        <Modal show={show} onHide={handleClickLink}>
        <Modal.Header closeButton>
            <Modal.Title>Pre-inscritos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Código</th>
              <th>Nombres</th>
              <th>N° de proyecto</th>
            </tr>
            </thead>
            <tbody>
              {data === null ? (<></>) : (data.map((e, index ) => {
              return (
                  <tr key={index}>
                  <td>{e.codigo}</td>
                  <td>{e.nombres} {e.apellidos}</td>
                  <td>{e.num_proy}</td>
                  </tr>
                );})
              )}
              
            </tbody>
          </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClickLink}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal> 
      </Card>
    </S.TCard3>
  );
}

export default ProyectoTesisCard;
