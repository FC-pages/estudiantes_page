import { Tab, Container, Nav } from "react-bootstrap";
import PlanesMallasPage from "./PlanesMallasPage";
import PerfilEgresoPage from "./PerfilEgresoPage";
import EnlacesInteresPage from "./EnlacesInteresPage";

export default function EstudiantesPage() {
  return (
    <Container className="mt-5">
      <Tab.Container defaultActiveKey="Planes y mallas">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-2"
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
        </Nav>
        <Tab.Content
          style={{ borderColor: "#1D3557" }}
          className="border-end border-bottom border-start border-2 rounded-bottom"
        >
          <Tab.Pane eventKey="Planes y mallas">
            <PlanesMallasPage />
          </Tab.Pane>
          <Tab.Pane eventKey="Perfil de egreso">
            <PerfilEgresoPage />
          </Tab.Pane>
          <Tab.Pane eventKey="Enlaces de interes">
            <EnlacesInteresPage />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
