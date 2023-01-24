import { useState } from 'react';
import { Modal, Col, Card, Table } from 'react-bootstrap';
import { FaPaperclip } from 'react-icons/fa';

let fecha_apertura = '12-01-2023'
let fecha_cierre = '27-01-2023'

type CardProps = {
    marca: string;
    correo: string; 
    apellidos:string;
    nombres: string;
    curso: string;
    codigo_curso: string;
    prerrequisitos: string;
    silabo: string;
    preinscripcion: string;
};

function CursosElectivosCards(e:any){

    // Inicializacion de variables
    const [show, setShow] = useState(false);
    
    // Click listener para LinkCard
    const handleClickLink = () =>{
        if(show){
            setShow(false);
        }
        else{
            setShow(true);
        }
    }

    return(
        <Col>
        <Card>
            <Card.Body className="card-testimony">
                <Card.Title className="card-title">{e.curso} - {e.codigo_curso}</Card.Title>
                <Card.Text className="card-text">
                    Profesor: {e.nombres} {e.apellidos}<br></br>
                    Prerequisito: {e.prerrequisitos}<br></br>
                    Silabo: <a target= "_blank" href={e.silabo}><FaPaperclip size={20}  /></a><br></br>
                    E-mail: {e.correo} <br></br>
                    Fecha de apertura de inscripción: {fecha_apertura}<br></br>
                    Fecha de cierre de inscripción: {fecha_cierre}
                </Card.Text>
                <Card.Link target="_blank" className="btn btn-outline-secondary btn-sm" href={e.preinscripcion}>
                    Preinscripción
                </Card.Link>
                <Card.Link className="btn btn-outline-secondary btn-sm" onClick={handleClickLink} href="#">
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
                            </tr>
                        </thead>
                        <tbody>
                            {e.inscritos.map((e:any) => {
                            return (
                            <tr>
                            <td>
                            {e.codigo}
                            </td>
                            <td>
                            {e.nombres} {e.apellidos}
                            </td>
                            </tr>
                            )
                            })}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </Card>
        </Col>
    );
}

export default CursosElectivosCards;