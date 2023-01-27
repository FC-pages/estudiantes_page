import { useState } from "react";
import { Modal, Button, Card, Table } from "react-bootstrap";
import { FaPaperclip } from 'react-icons/fa';

import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";

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

function ProyectoTesisCard(p:any) {

  const [show, setShow] = useState(false);

  const handleClickLink = () =>{
    if(show){
        setShow(false);
    }
    else{
        setShow(true);
    }
}

  return (
    <S.TCard3>
      <Card >
        <Card.Body className="card-testimony">
          <Card.Title className="card-title">{p.nombres_docente} {p.apellidos_docente}</Card.Title>
          <Card.Text className="card-text">
            Temas: <a target= "_blank" href={p.descripcion}><FaPaperclip size={20}  /></a><br></br>
            E-mail: {p.correo}<br></br>
            Fecha de apertura : {fecha_apertura}<br></br>
            Fecha de cierre: {fecha_cierre}
          </Card.Text>            
          <Card.Link target="_blank" href = {p.preinscripcion} className=" btn btn-sm ver-mas">
            Preinscripción
          </Card.Link>
          <Card.Link className=" btn btn-sm ver-mas" onClick={handleClickLink} href="#">
            Lista de pre-inscritos
          </Card.Link>
        </Card.Body>
        <Modal show={show} onHide={handleClickLink}>
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
            {/*{p.inscritos.map((e:any, index:number) => {
              return (
              <tr key={index}>
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
            })}*/}
            </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClickLink}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal> 
      </Card>
    </S.TCard3>
  );
}

export default ProyectoTesisCard;
