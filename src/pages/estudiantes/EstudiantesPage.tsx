import { Tab, Container, Nav } from "react-bootstrap";
import PlanesMallasPage from "./PlanesMallasPage";
import PerfilEgresoPage from "./PerfilEgresoPage";
import EnlacesInteresPage from "./EnlacesInteresPage";
import "../../styles/estudiantes/estudiantes.css";
import TestimoniosPage from "./TestimoniosPage";
import LaboratoriosPage from "./LaboratoriosPage";
import GruposEstPage from "./GruposEstPage";

export default function EstudiantesPage() {
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
            <Nav.Link eventKey="Perfil de egreso">Perfil de egreso</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Enlaces de interes">
              Enlaces de interes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Testimonios">Testimonios</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Laboratorios">Laboratorios</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Grupos estudiantiles">
              Grupos estudiantiles
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Planes y mallas">
              <PlanesMallasPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Perfil de egreso">
              <PerfilEgresoPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Enlaces de interes">
              <EnlacesInteresPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Testimonios">
              <TestimoniosPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Laboratorios">
              <LaboratoriosPage />
            </Tab.Pane>
            <Tab.Pane eventKey="Grupos estudiantiles">
              <GruposEstPage />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
