import {  Container,  Row  } from 'react-bootstrap';

import cub1 from '../imagenes/menu/cubo1.jpg';
import React, { useState, useEffect } from "react";
import Axios from "axios";


const Rutines = () => {

    const [tempData, setTempData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        //Axios.get()
        const getData = async () => {

            const url = "http://147.182.214.93:8080/kenkou-gym-api/ejercicios/rutinaPorNombreEn?nombre=Rutina";
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
                    {/*Crear un formulario con un botón */}


                    <input type="text" clasName="form-control" style={{marginTop:50, marginBottom:20, width:"40%"}} placeholder="Buscar..."  onChange= {(e) =>{
                        setSearchTerm(e.target.value);
                    }} />
                    <table className="table table-bordered responsive" >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col-4">Rutina</th>
                                <th className="col-4">Imagen</th>
                                <th className="col-2">Dificultad</th>
                                <th scope="col">Objetivo</th>
                                <th scope="col-4">Músculo a trabajar</th>
                                <th scope="col" >Instrucciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tempData.filter((val)=>{
                            if(searchTerm === ""){
                                return val;
                            }
                            else if(
                                val.musculo_a_trabajar.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                val.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.dificultad.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                val.objetivo.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                            {
                                return val;
                            }
                        }).map((item, index) => {
                            return (
                                
                                    <tr key={index}>
                                        <td>
                                            {item.nombre}
                                        </td>
                                        <td> 
                                            <img src={item.imagen} alt="Ejercicio" className="img-thumbnail"
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
                                            <a href={item.instrucciones} target="_blank" rel="noreferrer" className="btn btn-primary">Instrucciones</a>
                                           
                                            
                                            
                                        </td>
                                        
                                    </tr>
                                

                            )
                        })}
                        </tbody>
                    </table>
                </Row>
            </Container>

            
            
        </Container>
    );
};

export default Rutines;