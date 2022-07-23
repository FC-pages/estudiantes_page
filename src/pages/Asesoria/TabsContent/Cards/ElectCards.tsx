import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import { FaPaperclip } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
let { dataCM090 } = require("../../../../data/data-inscritos.js");

type CardProps = {
  marca: string;
  correo: string; 
  apellidos:string;
  nombres: string;
  curso: string;
  codigo_curso: string;
  prerrequisitos: string;
  silabo: string;
  preinscripcion: string;
};

function ElectivosCard(e:any) {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  // let displayedText = "";
  // let numCharacter = 210;
  // let lista = "";
  let publicacion = e.marca.slice(0,10);
  // if (sumilla.length > numCharacter) {
  //   displayedText = sumilla.substring(0, numCharacter) + "...";
  // } else {
  //   displayedText = sumilla;
  // }
  // for ( var i=0; i < multiline.length; i++){
  //   lista= lista + multiline[i] + "\n ";
  // }

  return (
    <S.TCard3>
      <Card >
        <Card.Body className="card-testimony">
          <div className="card-testimony-header">
            <Card.Title className="card-title">{e.curso} - {e.codigo_curso}</Card.Title>
          </div>
          <Card.Text className="card-text">
          Profesor: {e.nombres} {e.apellidos}<br></br>
          Prerequisito: {e.prerrequisitos}<br></br>
          Silabo: <a target= "_blank" href={e.silabo}><FaPaperclip size={20}  /></a><br></br>
          E-mail: {e.correo} <br></br>
          Fecha de apertura de inscripción: {publicacion}<br></br>
          Fecha de cierre de inscripción: {publicacion}
          </Card.Text>
            {/*<Card.Link className=" btn btn-sm ver-mas" onClick={handleShow} href="#">
                Leer más
            </Card.Link>*/}
            <Card.Link target="_blank" className=" btn btn-sm ver-mas" href={e.preinscripcion}>
                Preinscripción
            </Card.Link>
            <Card.Link className=" btn btn-sm ver-mas" onClick={handleShow} href="#">
                Lista de inscritos
            </Card.Link>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inscritos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Código</th>
              <th>Nombres</th>
            </tr>
            </thead>
            <tbody>
            {e.inscritos.map((e:any) => {
              return (
              <tr>
                <td>
                  {e.codigo}
                </td>
                <td>
                  {e.nombres}, {e.apellidos}
                </td>
              </tr>
              )

            })}
            </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </S.TCard3>
  );
}

export default ElectivosCard;
