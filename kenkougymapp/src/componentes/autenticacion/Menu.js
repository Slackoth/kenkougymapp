import { Button, Col, Container, Form, Row, Carousel } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import ban1 from '../imagenes/banner/banner4.jpg';
import ban2 from '../imagenes/banner/banner5.jpg';
import ban3 from '../imagenes/banner/banner6.jpg';
import ban4 from '../imagenes/banner/banner7.jpg';
import cub1 from '../imagenes/menu/cubo1.jpg';
import cub2 from '../imagenes/menu/cubo2.jpg';
import cub3 from '../imagenes/menu/cubo3.jpg';
import basic from '../imagenes/Suscripcion/basic.jpg';
import gold from '../imagenes/Suscripcion/gold2.jpg';

const Menu = () => {
    return (
        <Container fluid='lg'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={ban1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={ban2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={ban3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 rounded"
                        src={ban4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <p className='text-center fs-1 pb-2 pt-4 pr-4 pl-4'>
                <strong>Empieza ahora con nuevas rutinas y recetas para lograr tus objetivos</strong>
            </p>

            <p className='text-center fs-5 pb-4 pt-1 pr-4 pl-4'>
               En Kenkou Gym App, podrás encontrar diversas recetas y rutinas que te ayudarán no solamente a empezar, sino
               a mantenerte en un mundo más saludable y activo.
            </p>

            <Container fluid='lg' className="pb-2">
                <Row className="justify-content-center">
                    <Col md={4} className="text-center text-md">
                        <img src={cub1} height='200px' className='rounded pl-2 pr-2 pb-2 '/>
                        <NavLink to='/rutines'>
                          <Button variant="primary">Rutinas</Button>
                        </NavLink>
                    </Col>
                    <Col md={4} className="text-center text-md">
                        <img src={cub2} height='200px' className='rounded pl-2 pr-2 pb-2'/>
                        <NavLink to='/recipes'>
                          <Button variant="primary">Recetas</Button>
                        </NavLink>
                    </Col>
                    <Col md={4} className="text-center text-md ">
                        <img src={cub3} height='200px' className='rounded pl-2 pr-2 pb-2'/>
                        <NavLink to='/perfil'>
                          <Button variant="primary">Objetivos Personales</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>

            <p className="text-center fs-2 pb-4 pt-1 "><br/>Suscripciones</p>

            <Container fluid='lg'>
                <Row className="justify-content-center">
                    <Col md={5} className="text-center text-md">
                        <img src={basic} height='250px' max-width='20px'  className='card-img-top rounded'/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Suscripción Plan Basic</strong></h5>
                            <p className="card-text">100% Totalmente Gratis</p>
                            <p className="card-text">Rutinas</p>
                            <p className="card-text">Recetas</p>
                            <p className="card-text">Objetivos Personales</p>
                            <a href="#" className="btn btn-success">Suscribirse</a>
                        </div>
                    </Col>
                    <Col md={5} className="text-center text-md">
                        <img src={gold} height='250px' max-width='20px' className='card-img-top rounded'/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Suscripción Plan Gold</strong></h5>
                            <p className="card-text">Mensualidad de $4.00</p>
                            <p className="card-text">Rutinas Avanzadas y Personalizadas</p>
                            <p className="card-text">Recetas Avanzadas y Personalizadas</p>
                            <p className="card-text">Objetivos Personales</p>
                            <a href="#" class="btn btn-success">Suscribirse</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
};

export default Menu;