import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import cub2 from '../imagenes/menu/cubo1.jpg';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import cub3 from "../imagenes/rutines/predicador.jpg";


const RutinesSearch = () => {

    const [tempData, setTempData] = useState([]);

    useEffect(() => {
        //Axios.get()
        const getData = async () => {

            const url = "http://localhost:8080/kenkou-gym-api/ejercicios/ejercicioPorMusculoAll";
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
                    <img src="https://drive.google.com/uc?export=view&id=1ah7hvtjuZ6XB-iHLIzR59HEN4BOlJTGr"  width='250px' height='150px'  />
                </Col>
            </Row>

            <Container fluid='lg'>
                <Row>
                    

                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Músculo</th>
                                <th scope="col">Ejercicio</th>
                                <th className="col-4">Imagen</th>
                                <th className="col">Series</th>
                                <th className="col">Repeticiones</th>
                                <th className="col">Video Tutorial</th>
                                
                            </tr>
                        </thead>
                        {tempData.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>
                                            {item.musculo?.nombre}
                                        </td>
                                        <td>
                                            {item.ejercicio?.nombre}
                                        </td>
                                        <td> 
                                            <img src={item.imagenEjercicio?.imagen} alt="Ejercicio" class="img-thumbnail"
                                                width="70%"/>

                                        </td>
                                               
                                        <td>
                                            {item.series}
                                        </td>
                                        <td>
                                            {item.repeticiones}
                                        </td>
                                        <td>
                                            {item.url}
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

export default RutinesSearch;