import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import { FaPaperclip } from 'react-icons/fa';

type CardProps = {
  marca: string;
  correo: string; 
  apellidos:string;
  nombres: string;
  curso: string;
  codigo_curso: string;
  prerrequisitos: string;
  silabo: string;
};

function ElectivosCard({ marca, correo, apellidos, nombres, curso, codigo_curso, prerrequisitos, silabo}: CardProps) {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // let displayedText = "";
  // let numCharacter = 210;
  // let lista = "";
  let publicacion = marca.slice(0,10);
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
            <Card.Title className="card-title">{curso} - {codigo_curso}</Card.Title>
          </div>
          <Card.Text className="card-text">
          Profesor: {nombres} {apellidos}<br></br>
          Prerequisito: {prerrequisitos}<br></br>
          Silabo: <a href={silabo}><FaPaperclip size={20}  /></a><br></br>
          E-mail: {correo} <br></br>
          Fecha de publicacion: {publicacion}
          </Card.Text>
            {/* <Card.Link className=" btn btn-sm ver-mas" onClick={handleShow} href="#">
                Leer más
            </Card.Link> */}
            <Card.Link className=" btn btn-sm ver-mas" href="#">
                Preinscribirme
            </Card.Link>
        </Card.Body>

        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{curso}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {sumilla}
            <p>{lista}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Preinscribirme
            </Button>
          </Modal.Footer>
        </Modal> */}
      </Card>
    </S.TCard3>
  );
}

export default ElectivosCard;