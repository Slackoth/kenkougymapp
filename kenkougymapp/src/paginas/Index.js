import { Fragment } from "react";
import { Card, Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
import Banner1Jpg from './imagenes/banner1.jpg';
import Banner2Jpg from './imagenes/banner2.jpg';
import Banner3Jpg from './imagenes/banner3.jpg';
import Banner4Jpg from './imagenes/banner4.jpg';
import Cubo1 from './imagenes/cubo1.jpg';
import Cubo2 from './imagenes/cubo2.jpg';
import Cubo3 from './imagenes/cubo3.jpg';
import Basic from './imagenes/basic.jpg';
import Gold from './imagenes/gold.jpg';

const Index = () => {
    return(
        <Fragment>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner1Jpg} alt='Banner 1'/>
                    <Carousel.Caption><h3>Ejercicios</h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner2Jpg} alt='Banner 2'/>
                    <Carousel.Caption><h3>Recetas</h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner3Jpg} alt='Banner 3'/>
                    <Carousel.Caption><h3>Plan de Rutinas</h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner4Jpg} alt='Banner 4'/>
                    <Carousel.Caption><h3>Planes Alimenticios</h3></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="mt-3">
                <Row className="mt-3">
                   <Col className="mb-3">
                    <Card style={{width: '375px'}}>
                        <Card.Img variant="top" src={Cubo1} style={{height: '250px'}}/>
                        <Card.Body className="text-center">
                            <a href="#" className="btn btn-outline-success">Rutinas</a>
                        </Card.Body>
                    </Card>
                   </Col>
                   <Col className="mb-3">
                    <Card style={{width: '375px'}}>
                        <Card.Img variant="top" src={Cubo2} style={{height: '250px'}}/>
                        <Card.Body className="text-center">
                            <a href="#" className="btn btn-outline-success">Recetas</a>
                        </Card.Body>
                    </Card>
                   </Col>
                   <Col className="mb-3">
                    <Card style={{width: '375px'}}>
                        <Card.Img variant="top" src={Cubo3} style={{height: '250px'}}/>
                        <Card.Body className="text-center">\
                            <a href="#" className="btn btn-outline-success">Objetivos</a>
                        </Card.Body>
                    </Card>
                   </Col> 
                </Row>
                <Row><Col><h2 className="text-center mb-3">Suscripciones</h2></Col></Row>
                <Row>
                    <Col className="mb-3">
                        <Card style={{width: '630px'}}>
                            <Card.Img variant="top" src={Basic} style={{height: '375px'}}/>
                            <Card.Body className="text-center">
                                <Card.Title>Plan Basico</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item variant="success">Gratis</ListGroup.Item>
                                    <ListGroup.Item variant="light">Recetas</ListGroup.Item>
                                    <ListGroup.Item variant="light">Rutinas</ListGroup.Item>
                                    <ListGroup.Item variant="light">Objetivos Personales</ListGroup.Item>
                                </ListGroup>
                                <a href="#" className="btn btn-outline-primary mt-3">Suscribirse</a>
                            </Card.Body>
                        </Card>
                   </Col> 
                    <Col className="mb-3">
                        <Card style={{width: '630px'}}>
                            <Card.Img variant="top" src={Gold} style={{height: '375px'}}/>
                            <Card.Body className="text-center">
                                <Card.Title>Plan Gold</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item variant="warning">Mensualidad $4.00</ListGroup.Item>
                                    <ListGroup.Item variant="light">Planes de Rutinas</ListGroup.Item>
                                    <ListGroup.Item variant="light">Planes Alimenticios</ListGroup.Item>
                                    <ListGroup.Item variant="light">Objetivos Personales</ListGroup.Item>
                                </ListGroup>
                                <a href="#" className="btn btn-outline-primary mt-3">Suscribirse</a>
                            </Card.Body>
                        </Card>
                   </Col> 
                </Row>
            </Container>
        </Fragment>
    );
};

export default Index;