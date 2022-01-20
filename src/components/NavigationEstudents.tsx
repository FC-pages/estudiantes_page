import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";

export default function NavigationEstudents() {
  return (
    <Container style={{ backgroundColor: "#1D3557" }}>
      <Navbar variant="dark" className="mt-5">
        <Nav variant="tabs" className="mx-auto px-3">
          <Nav.Link as={NavLink} to={routes.page1} style={{ color: "white" }}>
            Planes y mallas
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.page2} style={{ color: "white" }}>
            Perfil de egreso
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.page3} style={{ color: "white" }}>
            Enlaces de interés
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}
