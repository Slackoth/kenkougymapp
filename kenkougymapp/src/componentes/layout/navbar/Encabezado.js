import { Container, Navbar } from 'react-bootstrap';

const Encabezado = () => {
    return(
        <Navbar bg="dark" variant='dark' expand="lg" className='mb-3'>
            <Container>
                <Navbar.Brand>Kenkou Gym</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Encabezado;