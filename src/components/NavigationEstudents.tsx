import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";

export default function NavigationEstudents() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto px-3">
            <Nav.Link as={NavLink} to={routes.page1}>
              Planes y mallas
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.page2}>
              Perfil de egreso
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.page3}>
              Reglamentos y aranceles
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.page4}>
              Calendario de docencia
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.page5}>
              Documentos
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.page6}>
              Representantes estudiantiles
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.page7}>
              Enlaces de interés
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.page8}>
              Prácticas Profesionales
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
