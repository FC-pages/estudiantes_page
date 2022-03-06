import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GoogleMaps from 'simple-react-google-maps';
import { FaYoutube, FaFacebookSquare, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import './styles.css';

export default function ContactoPage() {
  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };
  const API_KEY = process.env.REACT_APP_GMAPS_API_KEY;
  return (
    <Container className="text-start pt-5">
      <Row className="mt-5">
        <Col>
          <p className=" text-center fw-bold fs-5">
            Área de Estadística y Registros Académicos
          </p>
          <p>
            <span className="fw-bold">Jefe: </span> Dr. Helmuth Villavicencio Fernandez
          </p>
          <p className="fw-bold">Secretarias:</p>
          <p>
            <ul>
              <li> Mabel Rosales Ramirez</li>
              {/*<li> Mabel Carmen Rosales Ramirez</li>*/}
              <li> Elizabeth Almonacid García</li>
              {/*<li> Elizabeth Roxana Almonacid García</li>*/}
            </ul>
          </p>
          <p>
            <span className="fw-bold">E-mail: </span>{' '}
            <span className = "correo-oculto">
              {reverse('es t a d i s t i c a _ f c @ u n i . e d u.pe').replace(
                /\s+/g,
                ''
              )}
            </span>
          </p>
          <p>
            <span className="fw-bold">Teléfono: </span> 481-1070 anexos 5011 /
            5023
          </p>
        </Col>

        <Col>
          <p className=" text-center fw-bold fs-5">
            Escuela Profesional de Matemática
          </p>
          <p>
            {/*<span className="fw-bold">Director: </span>Dr. Eladio Teófilo Ocaña Anaya*/}
            <span className="fw-bold">Director: </span>Dr. Eladio Ocaña Anaya
          </p>
          <p className="fw-bold">Secretarias:</p>
          <p>
            <ul>
              <li>Andrea Hidalgo Salomé</li>
              {/*<li>Andrea Milagros Hidalgo Salomé</li>*/}
            </ul>
          </p>
          <p>
            <span className="fw-bold">E-mail: </span>{' '}
            <span className = "correo-oculto">
              {reverse('e s c u e l a s _ f c @ u n i . e d u .p e').replace(
                /\s+/g,
                ''
              )}
            </span>
          </p>
          <p>
            <span className="fw-bold">Teléfono: </span> 481-1070 anexo 5033
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <GoogleMaps
          apiKey={API_KEY}
          style={{ height: '500px', width: '100%' }}
          zoom={19}
          center={{ lat: -12.017411204346917, lng: -77.05072943150438 }}
          markers={{ lat: -12.017411204346917, lng: -77.05072943150438 }}
        />
      </Row>
      <Row className="mt-5">
        <Col>
          <p className="text-center fw-bold fs-5">Información</p>
          <p>
            <FaMapMarkerAlt size={25} title="ubicación" /> Puerta #5 {'-'} Av.
            Tupac Amaru N° 210 Rimac (Lima {'-'} Perú)
          </p>
          <p>
            <BsTelephoneFill size={25} title="telefono" /> (51-1) 381-3868
          </p>
          <p>
            <MdEmail size={25} title="email" />{' '}
            <a className="a-link" href="mailto:fc@fcuni.edu.pe">
              <span className = "correo-oculto">
                {reverse('f c @ u n i . e d u . p e').replace(/\s+/g, '')}
              </span>
            </a>
          </p>
        </Col>
        <Col>
          <p className=" text-center fw-bold fs-5">Redes Sociales</p>
          <p>
            <FaFacebookSquare size={25} title="facebook" />{' '}
            <a
              className="a-link"
              href="https://www.facebook.com/Facultad-de-Ciencias-UNI-183409708573/"
            >
              Facultad de Ciencias - UNI
            </a>
          </p>
          <p>
            <FaYoutube size={25} title="youtube" />{' '}
            <a
              className="a-link"
              href="https://www.youtube.com/channel/UCZza82v4Mb5W2M6QrMJrECw"
            >
              Facultad de Ciencias - UNI FC
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
