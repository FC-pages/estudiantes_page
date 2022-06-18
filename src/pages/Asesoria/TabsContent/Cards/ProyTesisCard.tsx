import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";

type CardProps = {
  linvestigacion: string;
  tema: string;
  profesor: string;
  sumilla: string;
  infoextra: string;
  fecha: string;
};

function ProyTesisCard({ linvestigacion, tema, profesor, sumilla, fecha, infoextra}: CardProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let displayedText = "";
  let displayedextra = "";
  let numCharacter = 210;

  if (sumilla.length > numCharacter) {
    displayedText = sumilla.substring(0, numCharacter) + "...";
  } else {
    displayedText = sumilla;
  };
//   if (infoextra.length !==0) {
//     displayedextra = infoextra;
//   } else {
//     displayedextra = "No hay informacion extra";
//   }

  return (
    <S.TCard3>
      <Card >
        <Card.Body className="card-testimony">
          <div className="card-testimony-header">
            <Card.Title className="card-title">{tema} - {linvestigacion}</Card.Title>
          </div>
          <Card.Text className="card-text">
          Profesor: {profesor}
          <hr></hr>
          {displayedText}
          <p>Fecha de public. : {fecha}</p>
          </Card.Text>
            <Card.Link className=" btn btn-sm ver-mas" onClick={handleShow} href="#">
                Leer más
            </Card.Link>
            <Card.Link className=" btn btn-sm ver-mas" href="#">
              Pre-inscripción
            </Card.Link>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{tema}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {sumilla}
            <p>Informacion Extra: {infoextra}</p>
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
        </Modal>
      </Card>
    </S.TCard3>
  );
}

export default ProyTesisCard;
