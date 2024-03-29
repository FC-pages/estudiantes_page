import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import { FaPaperclip } from 'react-icons/fa';
import { Table } from 'react-bootstrap';

type CardProps = {
  marca: string;
  correo: string;   
  nombres: string; 
  apellidos:string; 
  codigo_alumno: string;
  celular: string;
  supervisor: string;
  actividad: string;
  institucion: string;
};

function PreprofCards(e:any) {
   const [show, setShow] = useState(false);
   console.log(e)
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  // let displayedText = "";
  // let numCharacter = 210;
  // let lista = "";
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
            <Card.Title className="card-title">{e.nombres} {e.apellidos}</Card.Title>
          </div>
          <Card.Text className="card-text">
          Supervisor: {e.supervisor}<br></br>
          Actividad: {e.actividad}<br></br>
          Institución: {e.institucion}<br></br>
          </Card.Text>
        </Card.Body>

      </Card>
    </S.TCard3>
  );
}

export default PreprofCards;
