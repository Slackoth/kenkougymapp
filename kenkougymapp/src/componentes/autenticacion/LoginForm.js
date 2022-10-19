import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExJpg from '../imagenes/loginForm/ex.jpg';
import KettleBellPng from '../imagenes/loginForm/kettlebell.png';

const LoginForm = () => {
    return (
        <Container fluid='lg'>
          <Row>
            <Col lg='6' className='d-none d-lg-block'>
              <div className='text-center'><img src={ExJpg} alt='Dos personas estirando' width='100%'></img></div>
            </Col>
            <Col lg='6'>
              <h2 className='text-center'>Bienvenido</h2>
              <div className='text-center'><img src={KettleBellPng} alt='Dos personas estirando' width='15%'></img></div>
              <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Usuario / Correo</Form.Label>
                    <Form.Control type='text' placeholder='Ingrese el usuario o correo'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type='password' placeholder='Ingresa la contraseña'></Form.Control>
                </Form.Group>
                
                <Form.Group className='mb-3'>
                  <Button type='submit' variant='primary' href="/menu">Login</Button>
                </Form.Group>
                <Form.Text>¿No tienes cuenta? <Link to="/signup">Registrate</Link></Form.Text>
              </Form>
            </Col>
          </Row>  
        </Container>
    );
};

export default LoginForm;