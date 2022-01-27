import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMaps from "simple-react-google-maps";
import { FaYoutube, FaFacebookSquare, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

export default function ContactoPage() {
  return (
    <Container className="text-start pt-5">
      <Row>
        <GoogleMaps
          apiKey="AIzaSyAl604-0W-alm6jtAPd9Bh0LR1PPZKhmDg"
          style={{ height: "500px", width: "100%" }}
          zoom={19}
          center={{ lat: -12.017411204346917, lng: -77.05072943150438 }}
          markers={{ lat: -12.017411204346917, lng: -77.05072943150438 }} //optional
        />
      </Row>
      <Row className="mt-5">
        <Col>
          <p className="text-center fw-bold fs-5">Información</p>
          <p>
            <FaMapMarkerAlt size={25} title="ubicación" /> Puerta #5 – Av. Tupac
            Amaru N° 210 Rimac (Lima – Perú)
          </p>
          <p>
            <BsTelephoneFill size={25} title="telefono" /> (51-1) 381-3868
          </p>
          <p>
            <MdEmail size={25} title="email" />{" "}
            <a className="a-link" href="mailto:fc@fcuni.edu.pe">
              fc@fcuni.edu.pe
            </a>
          </p>
        </Col>
        <Col>
          <p className=" text-center fw-bold fs-5">Redes Sociales</p>
          <p>
            <FaFacebookSquare size={25} title="facebook" />{" "}
            <a
              className="a-link"
              href="https://www.facebook.com/Facultad-de-Ciencias-UNI-183409708573/"
            >
              Facultad de Ciencias - UNI
            </a>
          </p>
          <p>
            <FaYoutube size={25} title="youtube" />{" "}
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
