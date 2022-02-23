import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import { FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { miembros, juntaDirectiva } from '../../../data/data-gem';
import React from 'react';
import Miembro from './GEM/Miembro';
import '../../Docentes/styles.css';
import JuntaDirectiva from './GEM/JuntaDirectiva';

export default function GruposEstPage() {
  let eliminarDiacriticos = (texto: any) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };
  return (
    <Container>
      <Tab.Container defaultActiveKey="Acerca de">
        <Nav style={{ textAlign: 'left' }} className="nav2">
          <Nav.Item>
            <Nav.Link eventKey="Acerca de">Acerca del grupo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Miembros">Miembros</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Actividades">Actividades</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="text-start">
          <Tab.Content>
            <Tab.Pane eventKey="Acerca de">
              <Row>
                <Col>
                  <p className="fs-2 fw-bold text-center">
                    Grupo de estudiantes de matemática (GEM)
                  </p>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '20%',
                      marginInline: 'auto',
                    }}
                    alt="Logo GEM"
                    src="./gem/Gem.png"
                  />
                  <p style={{ textAlign: 'justify' }}>
                    La Asociación Estudiantil de Matemática, se forma gracias a
                    la iniciativa de un grupo de estudiantes de Matemática
                    interesados en crear canales de comunicación entre todos los
                    matemáticos de la Facultad de Ciencias. En este sentido, La
                    Asociación Estudiantil de Matemática tiene por objetivo
                    fundamental confraternizar con la comunidad matemática para
                    contribuir con el crecimiento profesional y personal del
                    matemático.
                  </p>
                </Col>
              </Row>
              <Row>
                <p className="fs-4 fw-bold">
                  Información de contacto y redes sociales
                </p>
                <p className="ps-4">
                  <FaYoutube size={25} title="youtube" />{' '}
                  <a
                    className="a-link"
                    href="https://www.youtube.com/channel/UCyALMJPXSZBnJ7DlF5yEOvw"
                  >
                    Grupo Estudiantil de Matemática - FC
                  </a>
                </p>
                <p className="ps-4">
                  <MdEmail size={25} title="email" />{' '}
                  <a className="a-link correo-oculto" href="mailto:gem@uni.edu.pe">
{reverse("gem@uni.edu.pe").replace(/\s+/g, '')}
                    
                  </a>
                </p>
                <p className="ps-4">
                  <FaFacebookSquare size={25} title="facebook" />{' '}
                  <a
                    className="a-link"
                    href="https://www.facebook.com/GEMFCUNI/"
                  >
                    GEMFCUNI
                  </a>
                </p>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Miembros">
              <p className="fs-4 fw-bold">Junta Directiva</p>
              <div className="App-center">
                {juntaDirectiva
                  .sort(function (a: any, b: any) {
                    let valueA = a.nombre;
                    let valueB = b.nombre;
                    valueA = eliminarDiacriticos(valueA);
                    valueB = eliminarDiacriticos(valueB);

                    let av = valueA.trim().toLowerCase();
                    let bv = valueB.trim().toLowerCase();
                    let r = av > bv ? 1 : av < bv ? -1 : 0;
                    if (r === 0) {
                      r =
                        typeof a.key !== 'undefined' &&
                        typeof b.key !== 'undefined'
                          ? a.key - b.key
                          : 0;
                    }
                    return r;
                  })
                  .map((d: any) => {
                    return (
                      <JuntaDirectiva
                        nombre={d.nombre}
                        codigo={d.codigo}
                        cargo={d.cargo}
                        ciclo={d.ciclo}
                        correo={d.correo}
                        cel={d.cel}
                      />
                    );
                  })}
              </div>

              <p className="fs-4 fw-bold pt-3">Miembros</p>
              <div className="App-center">
                {miembros
                  .sort(function (a: any, b: any) {
                    let valueA = a.nombre;
                    let valueB = b.nombre;
                    valueA = eliminarDiacriticos(valueA);
                    valueB = eliminarDiacriticos(valueB);

                    let av = valueA.trim().toLowerCase();
                    let bv = valueB.trim().toLowerCase();
                    let r = av > bv ? 1 : av < bv ? -1 : 0;
                    if (r === 0) {
                      r =
                        typeof a.key !== 'undefined' &&
                        typeof b.key !== 'undefined'
                          ? a.key - b.key
                          : 0;
                    }
                    return r;
                  })
                  .map((d: any) => {
                    return (
                      <Miembro
                        nombre={d.nombre}
                        codigo={d.codigo}
                        cargo={d.cargo}
                      />
                    );
                  })}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Actividades">
              <p className="fs-4 fw-bold">
                Seminarios de Divulgación Matemática
              </p>
              <Row>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '50%',
                      marginInline: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/charla2.jpg"
                  />
                </Col>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      margin: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/charla3.jpg"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      marginInline: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/charla5.PNG"
                  />
                </Col>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      margin: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/charla_zoom.PNG"
                  />
                </Col>
              </Row>
              <p className="fs-4 fw-bold pt-3">
                Primera Jornada Universitaria de Matemáticas
              </p>
              <Row>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      marginInline: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/evento1.PNG"
                  />
                </Col>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      margin: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/evento2.PNG"
                  />
                </Col>
              </Row>
              <p className="fs-4 fw-bold pt-3">Talleres</p>
              <Row>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      marginInline: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/Taller1.PNG"
                  />
                </Col>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      margin: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/taller2.PNG"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      marginInline: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/taller3.PNG"
                  />
                </Col>
                <Col md={6}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '70%',
                      margin: 'auto',
                      padding: '10px',
                    }}
                    alt=""
                    src="./gem/taller4.PNG"
                  />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </Container>
  );
}
