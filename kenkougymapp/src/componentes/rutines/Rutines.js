import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cub1 from '../imagenes/menu/cubo1.jpg';
import React, { useState } from "react";
import excercisesxmusclesData from '../excercises/dataExcercisesxMuscle';
import recipesData from "../rutines/dataRutines";
import rutinesData from '../rutines/dataRutines';

const Rutines = () => {

    return (
        <Container fluid='lg'>
            <Row>
                <div id="cubo1" className="justify-content-center text-center">
                    <img src={cub1} width='250px' height='150px' alt="..." />
                </div>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table striped bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Rutina</th>
                                <th className="col-4">Imagen</th>
                                <th className="col">Objetivo</th>
                                <th scope="col">Dificultado</th>
                                <th scope="col-7">Descripción</th>
                                <th scope="col" >Video Tutorial</th>
                                <th scope="col" >Instrucciones</th>
                            </tr>
                        </thead>

                        {rutinesData.cardRutines.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td> {item.nombre} </td>
                                        <td>
                                            <img src={item.img} alt="Ejercicio" class="img-thumbnail"
                                                width="70%" />
                                        </td>
                                        <td> {item.objetivo} </td>
                                        <td> {item.dificultad} </td>
                                        <td> {item.desc} </td>
                                        <td>
                                            <button className="btn btn-secondary">
                                                Ver 
                                            </button>
                                        </td>
                                        <td>
                                           <a href={item.link} target="_blank"> <button className="btn btn-secondary">
                                                Ver
                                            </button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}     
                    </Table>
                </Row>
            </Container>

            
            <Container fluid='lg'>
                <Row>
                    <Table striped bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Ejercicio</th>
                                <th className="col-4">Imagen</th>
                                <th className="col">Músculo</th>
                                
                            </tr>
                        </thead>

                        {excercisesxmusclesData.cardExcercisesxMuscles.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td> {item.idmusculo} </td>
                                        <td>
                                            <img src={item.idimagen} alt="Ejercicio" class="img-thumbnail"
                                                width="70%" />
                                        </td>
                                       
                                        <td> {item.idejercicio} </td>
                                        
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