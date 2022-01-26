import "./App.css";
import Header from "./components/Header";
import * as S from "./styles/styles";
import RightNav from "./components/RightNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [open, setOpen] = useState(false);
  const [home, setHome] = useState(true);
  return (
    <>
      <div className="App mb-5 pb-5">
        <Header />
        <S.StyledBurger open={open} onClick={() => setOpen(!open)} home={home}>
          <div />
          <div />
          <div />
        </S.StyledBurger>
        <RightNav open={open} home={true} />
      </div>
      <div className="pt-5 text-start">
        <footer
          style={{
            backgroundColor: "#1D3557",
            position: "absolute",
            height: 110,
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
    </>
  );
}

export default App;
