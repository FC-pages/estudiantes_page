/* // import Tabs from "./Tabs";
import React from "react";
// import "./styles.css";
import { Tab, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandPointRight,
  faPaperclip,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/estudiantes/estudiantes.css";
import Titulados from "../Egresados/Titulados";
import Tesistas from "../Egresados/Tesistas"; */
import React from "react";
import { Tab, Container, Nav } from "react-bootstrap";
import PlanesMallasPage from "../estudiantes/PlanesMallasPage";
import "../../styles/estudiantes/estudiantes.css";
import GruposEstPage from "../estudiantes/GruposEstPage";
import Titulados from "../Egresados/Titulados";
import Tesistas from "../Egresados/Tesistas";
import TestimoniosPage from "../estudiantes/TestimoniosPage";
function Descripcion() {
  return (
    /* <img src={fotomunguia} />
                        <img src="./fotomunguia.jpeg" /> */
    // <div>
      /* <div className="App-grid">
        <Tabs>
          <div label="Perfil" className="App-cuerpo">
            pagina Perfil
          </div>
          <div label="Reseña historica" className="App-cuerpo">
            Pagina rese;a historica
          </div>
          <div label="Plan de estudios" className="App-cuerpo">
            Pagina pland estudio9s
          </div>
          <div label="Directivos" className="App-cuerpo">
            pagina directivos
          </div>
        </Tabs>
      </div> */
        <Container
            style={{
              borderStyle: "solid",
              borderColor: "#1D3557",
              paddingLeft: "0",
              paddingRight: "0",
              paddingTop:"5"
            }}
            //fondo
            className="mt-3"> 
            <Tab.Container defaultActiveKey="Testimonios" transition={true}>
              <Nav
                // variant="tabs"   variant="pills"
                style={{ backgroundColor: "#1D3557"}}
                // nav-justified
                className= "justify-content-center pt-1 fs-6 col"
                // fw-bold
              >
                <Nav.Item>
                  <Nav.Link eventKey="Testimonios">Testimonios</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item className="nav-item">
                  <Nav.Link eventKey="Grupos estudiantiles" className="nav-link">Grupos estudiantiles</Nav.Link>
                </Nav.Item >| */}
                <Nav.Item >
                  <Nav.Link eventKey="Grupos estudiantiles">Grupos estudiantiles</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey="Titulados">Titulados</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey="Tesistas">Tesistas</Nav.Link>
                </Nav.Item>
              </Nav>

              <Container className="p-3">
                <Tab.Content>
                  <Tab.Pane eventKey="Testimonios">
                    <TestimoniosPage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Grupos estudiantiles">
                    <GruposEstPage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Tesistas">
                    <Tesistas />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Titulados">
                    <Titulados />
                  </Tab.Pane>
                </Tab.Content>
              </Container>
            </Tab.Container>
        </Container>
    // <footer className="App-footer">FINAL DE LA PAGINA</footer>
    // </div>
  );
}

export default Descripcion;
