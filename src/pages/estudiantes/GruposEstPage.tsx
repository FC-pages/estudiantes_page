import { Container, Tab, Nav } from "react-bootstrap";

export default function GruposEstPage() {
  return (
    <Container className="text-start p-3">
      <Tab.Container defaultActiveKey="GEM">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="fw-bold fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="GEM">GEM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Grupo 2">Grupo 2</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="GEM">
              <p className="fs-4 fw-bold">Grupo de estudiantes de matemática</p>
              <p>Descripción del grupo estudiantil</p>
            </Tab.Pane>
            <Tab.Pane eventKey="Grupo 2"></Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
