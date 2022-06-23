import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";

type CardProps = {
  curso: string;
  profesor: string;
  sumilla: string;
  multiline: string;
};

function ElectivosCard({ curso, profesor, sumilla, multiline}: CardProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let displayedText = "";
  let numCharacter = 210;
  let lista = ""

  if (sumilla.length > numCharacter) {
    displayedText = sumilla.substring(0, numCharacter) + "...";
  } else {
    displayedText = sumilla;
  }
  for ( var i=0; i < multiline.length; i++){
    lista= lista + multiline[i] + "\n ";
  }

  return (
    <S.TCard3>
      <Card >
        <Card.Body className="card-testimony">
          <div className="card-testimony-header">
            <Card.Title className="card-title">{curso}</Card.Title>
          </div>
          <Card.Text className="card-text">
          Profesor: {profesor}
          <hr></hr>
          {displayedText}</Card.Text>
            <Card.Link className=" btn btn-sm ver-mas" onClick={handleShow} href="#">
                Leer más
            </Card.Link>
            <Card.Link className=" btn btn-sm ver-mas" href="#">
                Preinscribirme
            </Card.Link>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
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
        </Modal>
      </Card>
    </S.TCard3>
  );
}

export default ElectivosCard;