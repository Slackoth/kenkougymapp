import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, NavLink, HashRouter } from "react-router-dom";

import "./nav.css";

const Encabezado = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="/login">Kenkou Gym</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <NavLink className="blanco" to="/menu">
                Inicio
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="blanco" to="/rutines">
                Rutinas
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="blanco" to="/recipes">
                Recetas
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="blanco" to="/perfil">
                Progreso
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Encabezado;
