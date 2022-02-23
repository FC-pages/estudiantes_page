import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../AlumnosYTesistasTab/styles/main";

type CardProps = {
  name: string;
  image: string;
  testimony: string;
  fotoCompleta: string;
};

function TestimonyCard({ name, image, testimony, fotoCompleta }: CardProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let displayedText = "";
  let numCharacter = 200;

  if (testimony.length > numCharacter) {
    displayedText = testimony.substring(0, numCharacter) + "...";
  } else {
    displayedText = testimony;
  }

  return (
    <S.TCard2>
      <Card >
        <Card.Body className="card-testimony">
          <div className="card-testimony-header">
            <img
              src={image}
              alt=""
              className="rounded-circle"
              width="80"
              height="80"
            />
            <Card.Title className="card-title">{name}</Card.Title>
          </div>
          <Card.Text className="card-text">{displayedText}</Card.Text>
          <Card.Link onClick={handleShow} href="#">
            Ver más
          </Card.Link>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {testimony} <img width="100%" alt="" src={fotoCompleta}></img>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </S.TCard2>
  );
}

export default TestimonyCard;
