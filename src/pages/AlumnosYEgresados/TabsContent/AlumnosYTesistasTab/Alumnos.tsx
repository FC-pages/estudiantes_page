import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import * as S from './styles/main';
import ReactPlayer from 'react-player';

import { Row, Card } from 'react-bootstrap';
import * as S2 from '../../../../styles/styles';



let { alumnos } = require('../../../../data/data-alumnos.js');

function Alumnos() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let videos = [
    {
      href: 'https://youtu.be/SakEDBDrZEc',
      name: 'Tutorial para buscar alumnos en Orce',
      Description:
        '',
    },
  ];


  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };

  return (
    <S.TabContent>
    Para buscar alumnos ingresar al link: <a href = "https://www.orce.uni.edu.pe/buscaalu.php?op=buscaalu">https://www.orce.uni.edu.pe/buscaalu.php?op=buscaalu</a>
    {/*
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Ciclo relativo</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((a: any, index: any) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <a className="a-link" onClick={handleShow} href="#">
                      {a.nombre}
                    </a>
                  </td>
                  <td >{a.ciclo}</td>
                  <td className = "correo-oculto">{reverse(a.contacto).replace(/\s+/g, '')}</td>
                </tr>
                <Modal show={show} onHide={handleClose}>
                  <S.ModalContainer>
                    <Modal.Header closeButton>
                      <div>
                        {a.nombre ? (
                          <Modal.Title>{a.nombre}</Modal.Title>
                        ) : (
                          <div />
                        )}
                      </div>
                    </Modal.Header>
                    <Modal.Body>
                      <img src={a.imgOrce}></img>
                    </Modal.Body>
                    <Modal.Footer>
                      © Escuela Profesional de Matemática
                    </Modal.Footer>
                  </S.ModalContainer>
                </Modal>
              </>
            );
          })}
        </tbody>
      </Table>
      */}
<Row xs={1} md={1} className="g-4">
        <S2.ContainerVideos className="containerTabOne">
          <div className="video">
            {videos.map((video: any) => {
              return (
                <Card bg="dark" text="white">
                  <ReactPlayer controls width="100%" url={video.href} />
                  <Card.Body>
                    <Card.Title>{video.name}</Card.Title>
                    <Card.Text>
                      <div className="quote">
                        <cite>{video.Description}</cite>
                      </div>
                      <div></div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </S2.ContainerVideos>
      </Row>

    </S.TabContent>
  );
}

export default Alumnos;
