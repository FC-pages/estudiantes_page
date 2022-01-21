import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as S from './styles/main';
let { testimonios } = require("../../data/data-testimonios.js");

type CardProps = {
  name: string,
  image: string,
  testimony: string
}

function TestimonyCard({ name, image, testimony } : CardProps) {

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
      <S.TCard  className="col-sm-5 col-md-6 col-12 pb-4">
          <div className="comment mt-4 text-justify float-left"> 
            <blockquote className="blockquote mb-0">
                  <div className = "header">
                    <img src= {image} alt="" className="rounded-circle" width="80" height="80"/>
                    <h4>{name}</h4>
                  </div>
                    <p>
                        
                      {displayedText}
                    </p>
            </blockquote>
            <a onClick={handleShow}>
              ver más
            </a>
          </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{testimony} <img src = "./foto.jpeg"></img></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    </S.TCard>

  );
}

export default TestimonyCard;
