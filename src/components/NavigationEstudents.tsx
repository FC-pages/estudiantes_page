import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";

export default function NavigationEstudents() {
  return (
    <Container>
      <Container className="pt-5" />
      <Navbar style={{ backgroundColor: "#1D3557" }} variant="dark">
        <Container>
          <Navbar.Collapse>
            <Nav className="mx-auto px-3">
              <Nav.Link as={NavLink} to={routes.page1}>
                Planes y mallas
              </Nav.Link>
              <Nav.Link as={NavLink} to={routes.page2}>
                Perfil de egreso
              </Nav.Link>
              <Nav.Link as={NavLink} to={routes.page3}>
                Enlaces de interés
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
