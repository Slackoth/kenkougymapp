import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cub1 from '../imagenes/menu/cubo1.jpg';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import RutinesSearch from './RutinesSearch';

import rutinesData from '../rutines/dataRutines';


const Rutines = () => {

    const [tempData, setTempData] = useState([]);

    useEffect(() => {
        //Axios.get()
        const getData = async () => {

            const url = "http://localhost:8080/kenkou-gym-api/ejercicios/rutinaPorNombreEn?nombre=Rutina";
            const { data } = await Axios.get(url);
            console.log(data);

            setTempData(data);
        }
        getData();
        
    }, []);

    return (
        <Container fluid='lg'>
            <Row>
                <div id="cubo1" className="justify-content-center text-center">
                    <img src={cub1} width='250px' height='150px' alt="..." />
                </div>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table striped bordered hover responsiver>
                        <thead >
                            <tr>
                                <th scope="col">Rutina</th>
                                <th className="col-4">Imagen</th>
                                <th className="col">Objetivo</th>
                                <th scope="col">Dificultad</th>
                                <th scope="col-7">Músculo a trabajar</th>
                                <th scope="col" >Instrucciones</th>
                            </tr>
                        </thead>
                        {tempData.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>
                                            {item.nombre}
                                        </td>
                                        <td> 
                                            <img src={item.imagen} alt="Ejercicio" class="img-thumbnail"
                                                width="70%"/>

                                        </td>
                                        <td>
                                            {item.dificultad}
                                        </td>
                                        
                                               
                                        <td>
                                            {item.objetivo}
                                        </td>
                                        <td>
                                            {item.musculo_a_trabajar}
                                        </td>
                                        
                                        <td>
                                            {/*Crear boton que me dirija a RutineSearch.js*/}
                                            <a href={item.instrucciones} target="_blank" rel="noreferrer" class="btn btn-primary">Instrucciones</a>
                                           
                                            
                                            
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

export default Rutines;