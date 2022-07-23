import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import { FaPaperclip } from 'react-icons/fa';

/*Profesor
  Temas
  email
  fecha apertura
  fecha cierre
*/

type CardProps = {
  marca: string;
  tema: string;
  correo: string;
  apellidos_docente:string;
  nombres_docente:string;
  descripcion: string;
};

function ProyTesisCard(p:any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let displayedText = "";
  // let displayedextra = "";
  // let numCharacter = 210;
  let fecha = p.marca.slice(0,10);

  // if (sumilla.length > numCharacter) {
  //   displayedText = sumilla.substring(0, numCharacter) + "...";
  // } else {
  //   displayedText = sumilla;
  // };
  
  // if (infoextra.length !==0) {
  //   displayedextra = infoextra;
  // } else {
  //   displayedextra = "No hay informacion extra";
  // }

  return (
    <S.TCard2>
      <Card >
        <Card.Body className="card-testimony">
          <div className="card-testimony-header">
            <Card.Title className="card-title">{p.nombres_docente} {p.apellidos_docente}</Card.Title>
          </div>
          <Card.Text className="card-text">
          Tema: {p.tema}<br></br>
          E-mail: {p.email}<br></br>
          Silabo: <a target= "_blank" href={p.descripcion}><FaPaperclip size={20}  /></a><br></br>
          Fecha de apertura : {p.fecha}<br></br>
          Fecha de cierre: {p.fecha}
          </Card.Text>
            {/* <Card.Link className=" btn btn-sm ver-mas" onClick={handleShow} href="#">
                Leer más
            </Card.Link> */}
            <Card.Link className=" btn btn-sm ver-mas" href="#">
              Pre-inscripción
            </Card.Link>
        </Card.Body>

        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{tema}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {sumilla}
            <p>Informacion Extra: {displayedextra}</p>
            <p>Fecha de public. : {fecha}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Pre-inscripción
            </Button>
          </Modal.Footer>
        </Modal> */}
      </Card>
    </S.TCard2>
  );
}

export default ProyTesisCard;
