import { Tab, Container, Nav } from "react-bootstrap";
import PlanesMallasPage from "./PlanesMallasPage";
import "../../styles/estudiantes/estudiantes.css";
import TestimoniosEstudiantesPage from "./TestimoniosEstudiantesPage";
import LaboratoriosPage from "./LaboratoriosPage";
import GruposEstPage from "./GruposEstPage";
import Tesistas from "../Egresados/Tesistas";
import Titulados from "../Egresados/Titulados";
import Testimonios from "../Egresados/Testimonios";

export default function EstudiantesEgresadosPage() {
  return (
    <Container
      style={{
        borderStyle: "solid",
        borderColor: "#1D3557",
        paddingLeft: "0",
        paddingRight: "0",
        borderRadius: "10px",
      }}
      className="mt-5"
    >
      <Tab.Container defaultActiveKey="Planes y mallas">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-2 fw-bold fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Planes y mallas">Planes y mallas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Testimonios estudiantes">
              Testimonios de estudiantes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Grupos estudiantiles">
              Grupos estudiantiles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Titulados">Titulados</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Tesistas">Tesistas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Testimonios egresados">
              Testimonios egresados
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Planes y mallas">
              <PlanesMallasPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Testimonios estudiantes">
              <TestimoniosEstudiantesPage />
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
            <Tab.Pane eventKey="Testimonios egresados">
              <Testimonios />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
