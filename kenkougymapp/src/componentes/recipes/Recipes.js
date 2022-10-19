import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cub2 from '../imagenes/menu/cubo2.jpg';
import React, { useState } from "react";
import recipesData from "../recipes/dataRecipes";
import ModelTiming from "../recipes/modalTiming";

const SignUp = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);

    const getData = (nombre, img, desc) => {
        let tempData = [nombre, img, desc];
        setTempData(item => [1, ...tempData]);
        return setModel(true);
    }

    return (
        <Container fluid='lg'>
            <Row>
                <div id="cubo1" className="justify-content-center text-center">
                    <img src={cub2} width='250px' height='150px' alt="..." />
                </div>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table striped bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th className="col-4">Imagen</th>
                                <th className="col-7">Descripción</th>
                                <th scope="col">Tiempos de Comida</th>
                            </tr>
                        </thead>
                        {recipesData.cardRecipes.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td> {item.nombre} </td>
                                        <td>
                                            <img src={item.img} alt="vegetarianos" class="img-thumbnail"
                                                width="70%" />
                                        </td>
                                        <td> {item.desc} </td>
                                        <td><button className="btn btn-secondary"
                                            onClick={() => getData(item.nombre, item.img, item.desc)}
                                        >Ver Tiempos</button></td>
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

export default SignUp;