import { useState } from 'react';
import { Table } from 'react-bootstrap';
import * as S from '../AlumnosYTesistasTab/styles/main';
import { titulados } from '../../../../data/data-alumnos.js';
import { Modal, Card } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';

function Titulado(props: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };

  return (
    <>
      <tr >
        <td>{props.index}</td>
        <td className = "text-start">
          <a className="a-link" onClick={handleShow} href="#">
            {props.titulado.nombre}
          </a>
        </td>
        <td className = "text-start">{props.titulado.tituloDeTesis}</td>
        <td className = "text-start">{props.titulado.fechaSustentacionTesis}</td>
        <td className = "text-start">{props.titulado.actividadActual}</td>
        <td className = "correo-oculto text-start">{reverse(props.titulado.contacto).replace(/\s+/g, '')}</td>
                       
      </tr>
      <Modal show={show} onHide={handleClose}>
        <S.ModalContainer>
          <Modal.Header closeButton>
            <div>
              {props.titulado.nombre ? (
                <Modal.Title>{props.titulado.nombre}</Modal.Title>
              ) : (
                <div />
              )}
              {props.titulado.gradoAc ? (
                <Card.Subtitle className="mb-2 text-muted modal-subtitle">
                  {props.titulado.gradoAc}
                </Card.Subtitle>
              ) : (
                <div />
              )}
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="img-right">
              <div>
                {props.titulado.tituloDeTesis ? (
                  <>
                    <span className="modal-tag-titulo">
                      Título de tésis{' '}
                      <a href={props.titulado.tesisLink}>
                        <FaFilePdf />
                      </a>
                    </span>
                    <span className="modal-titulo">
                      {props.titulado.tituloDeTesis}
                    </span>
                  </>
                ) : (
                  <div />
                )}
                <br />
                <br />
                {props.titulado.asesor.nombre ? (
                  <>
                    <span className="modal-tag-titulo">Asesor</span>
                    <span className="modal-titulo">
                      {props.titulado.asesor.nombre} -{' '}
                      <span className = "correo-oculto">{reverse(props.titulado.asesor.email).replace(/\s+/g, '')} </span>
                    </span>
                  </>
                ) : (
                  <div />
                )}
              </div>
              <img
                alt=""
                width="110px"
                height="140px"
                src={props.titulado.imgPerfil}
              ></img>
            </div>
          </Modal.Body>
          <Modal.Footer>© Escuela Profesional de Matemática</Modal.Footer>
        </S.ModalContainer>
      </Modal>
    </>
  );
}

function Titulados() {
  return (
    <S.TabContent>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Título de Tesis</th>
            <th>Fecha de sustentación de tesis</th>
            <th>Actividad Actual</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          {titulados.map((t: any, i: any) => {
            return <Titulado index={i + 1} titulado={t} />;
          })}
        </tbody>
      </Table>
    </S.TabContent>
  );
}

export default Titulados;
