import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import { Table } from 'react-bootstrap';
import { FaPaperclip } from 'react-icons/fa';

/*Profesor
  Temas
  email
  fecha apertura
  fecha cierre
*/
let fecha_apertura = '12-01-2023'
let fecha_cierre = '27-01-2023'

type CardProps = {
  marca: string;
  tema: string;
  correo: string;
  apellidos_docente:string;
  nombres_docente:string;
  descripcion: string;
  preinscripcion: string;
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
          Temas: <a target= "_blank" href={p.descripcion}><FaPaperclip size={20}  /></a><br></br>
          E-mail: {p.correo}<br></br>
          Fecha de apertura : {fecha_apertura}<br></br>
          Fecha de cierre: {fecha_cierre}
          </Card.Text>            
            <Card.Link target="_blank" href = {p.preinscripcion} className=" btn btn-sm ver-mas">
                Preinscripción
            </Card.Link>
            <Card.Link className=" btn btn-sm ver-mas" onClick={handleShow} href="#">
                Lista de pre-inscritos
            </Card.Link>
            {/*<Card.Link target="_blank" className=" btn btn-sm ver-mas" href="https://forms.gle/zQqDB1ZECn8uJe6V7">
               Cancelar jojopre-inscripción 
  </Card.Link>*/}
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
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
            {p.inscritos.map((e:any) => {
              return (
              <tr>
                <td>
                  {e.codigo}
                </td>
                <td>
                  {e.nombres} {e.apellidos}
                </td>
                <td>
                  {e.num_proy}
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
    </S.TCard2>
  );
}

export default ProyTesisCard;
