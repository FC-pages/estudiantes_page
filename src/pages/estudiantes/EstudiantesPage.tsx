import { Tab, Container, Nav } from "react-bootstrap";
import PlanesMallasPage from "./PlanesMallasPage";
import PerfilEgresoPage from "./PerfilEgresoPage";
import EnlacesInteresPage from "./EnlacesInteresPage";
import "../../styles/estudiantes/estudiantes.css";
import TestimoniosPage from "./TestimoniosPage";

export default function EstudiantesPage() {
  return (
    <Container className="mt-5">
      <Tab.Container defaultActiveKey="Planes y mallas">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-2 fw-bold fs-6"
          activeKey="Planes y mallas"
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
        <Tab.Content className="border-end border-bottom border-start border-2 rounded-bottom">
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
            <TestimoniosPage />
          </Tab.Pane>
          <Tab.Pane eventKey="Grupos estudiantiles">
            <TestimoniosPage />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
