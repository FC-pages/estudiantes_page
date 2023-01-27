import React from 'react';
import ReactPlayer from 'react-player';

import { Row, Card } from 'react-bootstrap';
import * as S from '../../../../styles/styles';

import { FaPaperclip } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
function PlanEstudios() {
  let videos = [
    {
      href: 'https://www.youtube.com/watch?v=dxVKquza40Y&t',
      name: 'Un análisis completo acerca del plan de estudios de la carrera de Matemática FC-UNI',
      Description:
        '',
    },
  ];
  return (
    <div className="App-cuerpo">
      <p></p>
      <p>
      En el plan de estudios podemos encontrar cursos con una fuerte dosis de análisis para 
      que el alumno incursione tempranamente en la investigación científica. En la malla 
      curricular se consideran seis líneas de investigación que se desarrollan en la escuela,
       todas ellas compartiendo los cursos básicos que se desarrollan en los seis primeros 
       semestres de la carrera. 
      </p>
      <p></p>
      <h6>
      Total de créditos para egresar: 210 
      </h6>
      <p></p>
      <table className="creditos" cellPadding={4}>
        {/* <tr>
                <th> Item </th>
                <th>Créditos</th>
                <th>Especificación</th>
              </tr> */}
        <tr>
          <td> Item </td>
          <td>Créditos</td>
          <td className='text-left'>Especificación</td>
        </tr>
        <tr>
          <td>01</td>
          <td> 192</td>
          <td className='text-left'> Créditos de cursos obligatorios</td>
        </tr>
        <tr>
          <td> 02</td>
          <td> 14</td>
          <td className='text-left'> Total de créditos de cursos electivos o complementarios</td>
        </tr>
        <tr>
          <td>03</td>
          <td>1</td>
          <td className='text-left'>Créditos por actividades extracurriculares (BAE01)</td>
        </tr>
        <tr>
          <td>04</td>
          <td>2</td>
          <td className='text-left'>Créditos por prácticas pre-profesionales </td>
        </tr>
        <tr>
          <td>05</td>
          <td>1</td>
          <td className='text-left'>Ayudantia Académica o de Investigación</td>
        </tr>
        <tr>
          <td>
            <b>Total</b>
          </td>
          <td>210</td>
          <td className='text-left'>TOTAL PARA EGRESAR RESPECTO AL PLAN 2018</td>
        </tr>
      </table>
      <p></p>
      <h5 className="t-stroke-shadow-h5">Descargar:</h5>
      <div className='vineta'>
        <ul>
          <li>
            <FaAngleRight size={17}/>Plan de estudios 2018.{' '}
            <a className="a-link" href="https://drive.google.com/file/d/1r0_Tn370ih28mp8I_G5o051GyJjtWEe-/view?usp=sharing">
              
              <FaPaperclip size={20} />
            </a>
          </li>
          {/*<li>
            <FaAngleRight size={17}/>
            Malla curricular y cursos electivos.{' '} 
            <a className="a-link" href="mallacurricular.pdf">
            <FaPaperclip size={20} />
            </a>
            </li>*/}
          {/*<li>
            <FaAngleRight size={17}/>
            Malla comparativo de los cursos.{' '} 
            <a className="a-link" href="https://drive.google.com/file/d/1kWswWX8qCLayr70cKB9v4Skwg07ZT67b/view?usp=sharing">
            <FaPaperclip size={20} />
            </a>
            </li>*/}
          {/*<li>
            <FaAngleRight size={17}/>Tabla de convalidaciones.{' '}
            <a className="a-link" href="https://drive.google.com/file/d/19DAXyDGx6Lt03Uu3VVM_Inw74gzTjyjR/view?usp=sharing">
              <FaPaperclip size={20} />
            </a>
            </li>*/}
          {/*<li>
            <FaAngleRight size={17}/>Silabos de los cursos.{' '}
            <a className="a-link" href="https://drive.google.com/file/d/11pFPQ3-AbK6SkjP-1Tj4kiATeaxfV_82/view?usp=sharing">
              <FaPaperclip size={20} />
            </a>
            </li>*/}
          
        </ul>
      </div>
      {/*
      <div className='vineta'>
        <ul>
          <li>
            <FaAngleRight size={17}/>Plan de estudios completo.{' '}
            <a className="a-link" href="plancompleto.pdf">
              
              <FaPaperclip size={20} />
            </a>
          </li>
          <li>
            <FaAngleRight size={17}/>
            Tabla de convalidaciones.{' '} <FaPaperclip size={20} />
          </li>
          <li>
            <FaAngleRight size={17}/>
            Malla curricular con electivos 2018-1.{' '} <FaPaperclip size={20} />
          </li>
          <li>
            <FaAngleRight size={17}/>Malla curricular sin electivos 2018-1.{' '}
            <a className="a-link" href="mallacurricular.pdf">
              <FaPaperclip size={20} />
            </a>
          </li>
          <li>
            <FaAngleRight size={17}/>
            Sumillas de asignaturas electivas del plan de estudios 2018-1.{' '}
            <FaPaperclip size={20} />
          </li>
          <li>
            <FaAngleRight size={17}/>
            Sumillas de asignaturas obligatorias del plan de estudios 2018-1.{' '}
            <FaPaperclip size={20} />
          </li>
        </ul>
      </div>
      */}
      {/*
      <Row xs={1} md={1} className="g-4">
        <S.ContainerVideos className="containerTabOne">
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
        </S.ContainerVideos>
      </Row>
      */}
    </div>
  );
}
export default PlanEstudios;


{/*
import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import PlanEstudios from './PlanesYMallas/PlanEstudios';
import MallasPage from './PlanesYMallas/MallasEstudio';

export default function PlanesYMallas() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="Planes">
        <Nav
          style={{ textAlign:"left" }}
          className="nav2"
        >
          <Nav.Item>
            <Nav.Link eventKey="Planes">Planes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Mallas">Mallas</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Planes">
              <PlanEstudios/>
            </Tab.Pane>
            <Tab.Pane eventKey="Mallas">
              <MallasPage/>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}*/}
