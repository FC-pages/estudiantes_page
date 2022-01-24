import { Container, Tab, Nav } from "react-bootstrap";

export default function GruposEstPage() {
  return (
    <Container className="text-start p-3">
      <Tab.Container defaultActiveKey="Grupo 1">
        <Nav
          variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="fw-bold fs-6"
        >
          <Nav.Item>
            <Nav.Link eventKey="Grupo 1">Grupo 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Grupo 2">Grupo 2</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="Grupo 1"></Tab.Pane>
            <Tab.Pane eventKey="Grupo 2"></Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
