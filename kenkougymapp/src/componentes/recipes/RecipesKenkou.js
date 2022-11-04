import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import cub2 from '../imagenes/menu/cubo2.jpg';
import React, { useState, useEffect } from "react";
import Axios from "axios";

const RecipesKenkou = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);
    const [tempName, setName] = useState([]);

    useEffect(() => {
        //Axios.get()
        const getData = async () => {

            const url = "http://localhost:8080/kenkou-gym-api/nutricion/recetas";
            const { data } = await Axios.get(url);
            console.log(data);

            setTempData(data);
        }
        getData();

    }, []);



    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={cub2} width='250px' height='150px' alt="..." />
                </Col>
            </Row>

            <Container fluid='lg'>
                <Row>


                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th className="col">Nombre</th>
                                <th className="co">Tutorial</th>
                                <th className="col-8">Instrucciones</th>
                                <th className='col-2'>Objetivo</th>
                                <th className='col-2'>Tiempo</th>
                                <th className='col'>Ingredientes</th>
                                <th className='col'>Calorias</th>
                            </tr>
                        </thead>
                        {tempData.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.nombre}
                                        </td>
                                        <td>
                                            <Button
                                                variant='outline-success'
                                                size='sm'
                                                href={item.linkVideo}>
                                                Video
                                            </Button>
                                        </td>
                                        <td>
                                            {item.instrucciones}
                                        </td>
                                        <td>
                                            {item.objetivo.nombre}
                                        </td>
                                        <td>
                                            {item.tiempoComida.nombre}
                                        </td>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            {item.tablanutricional.calorias}
                                        </td>
                                    </tr>
                                </tbody>

                            )
                        })}
                    </Table>

                </Row>
            </Container>

        </Container>
    );
};

export default RecipesKenkou;