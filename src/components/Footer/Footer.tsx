import { Col, Container, Row } from "react-bootstrap";
import './footer.css';

export default function Footer() {
  return <div className="pt-5 text-start">
        <footer className = "footer-"
          style={{
            minHeight: 110,
            bottom: 0,
            width: "100%",
            color: "white",
          }}
        >
          <Container>
            <Row className="py-2 fw-bold fs-5">
              <Col>Universidad Nacional de Ingeniería</Col>
            </Row>
            <Row>
              <Col>
                <p className="mb-0">
                  Ubicación: Av. Túpac Amaru 210 - Rímac. Apartado 1301
                </p>
                <p className="mb-0">
                  Contacto: Central Telefónica (01) 4811070 Lima - Perú
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
}
