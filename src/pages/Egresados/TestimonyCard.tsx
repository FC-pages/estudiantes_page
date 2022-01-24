import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from './styles/main';
let { testimonios } = require("../../data/data-testimonios.js");

type CardProps = {
  name: string,
  image: string,
  testimony: string,
  fotoCompleta: string
}

function TestimonyCard({ name, image, testimony, fotoCompleta } : CardProps) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let displayedText = "";
    let numCharacter = 200;

    if (testimony.length > numCharacter) {
        displayedText = testimony.substring(0, numCharacter) + "...";
    }
    else {
      displayedText = testimony;
    }

  return (
      <S.TCard >
            <Card style={{ width: '30rem' }} >
              <Card.Body className = "card-testimony">
                <div className = "card-header">
                  <img src= {image} alt="" className="rounded-circle" width="80" height="80"/>
                  <Card.Title className = "card-title">{name}</Card.Title>
                </div>
                <Card.Text className = "card-text">
                  {displayedText}
                </Card.Text>
                <Card.Link  onClick={handleShow} href="#">Ver más</Card.Link>
              </Card.Body>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{testimony} <img src = {fotoCompleta}></img></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



            </Card>


    </S.TCard>

  );
}

export default TestimonyCard;
