import { Container, Navbar, Nav } from 'react-bootstrap';

const Encabezado = () => {

    return(
        <Navbar bg="dark" variant='dark' expand="lg">

            <Container>
                <Navbar.Brand>Kenkou Gym</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/menu">Inicio</Nav.Link>
                        <Nav.Link href="/recipes">Recetas</Nav.Link>
                        <Nav.Link href="/rutines">Rutinas</Nav.Link>
                        <Nav.Link href="/">Objetivos Personales</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Encabezado;