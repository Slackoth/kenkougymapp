import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import cub2 from '../imagenes/menu/cubo2.jpg';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import ModelTiming from "../recipes/modalTiming";

const RecipesSearch = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);
    const [tempName, setName] = useState([]);

    useEffect(() => {
        //Axios.get()
        const getData = async () => {

            const url = "http://localhost:8080/kenkou-gym-api/nutricion/ingredientes";
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
                                <th scope="col">Nombre</th>
                                <th className="col">Calorias</th>
                                <th className="col">Proteinas</th>
                                <th className="col">Grasa Saturada</th>
                                <th className="col">Fibra</th>
                                <th className="col">Carbohidratos</th>
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
                                            {item.nombreAlimento}
                                        </td>
                                        <td> {item.calorias} </td>
                                        <td>
                                            {item.proteinas}
                                        </td>
                                        <td>
                                            {item.grasaSaturada}
                                        </td>
                                        <td>
                                            {item.fibra}
                                        </td>
                                        <td>
                                            {item.carbohidratos}
                                        </td>
                                    </tr>
                                </tbody>

                            )
                        })}
                    </Table>

                </Row>
            </Container>

            {
                model === true ? <ModelTiming img={tempData[1]} nombre={tempData[2]} desc={tempData[3]} hide={() => setModel(false)} /> : ''
            }
        </Container>
    );
};

export default RecipesSearch;