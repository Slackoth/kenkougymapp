import { Container, Row, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import cub1 from "../imagenes/menu/cubo1.jpg";
import React, { useState, useEffect } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import Axios from "axios";
import "../layout/navbar/nav.css";

const Rutines = () => {
  const [tempData, setTempData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    //Axios.get()
    const getData = async () => {
      const url =
        "http://localhost:8080/kenkou-gym-api/ejercicios/rutinaPorNombreEn?nombre=Rutina";
      const { data } = await Axios.get(url);
      console.log(data);

      setTempData(data);
    };
    getData();
  }, []);

  return (
    <Container fluid="lg">
      <Row>
        <div id="cubo1" className="justify-content-center text-center">
          <img src={cub1} width="250px" height="150px" alt="..." />
        </div>
      </Row>
      <Container fluid="lg">
        <Row>
          <MDBInput
            placeholder="Buscar"
            id="typeText"
            type="text"
            style={{ marginTop: 50, marginBottom: 20, width: "30%" }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <table className="table table-bordered responsive">
            <thead className="thead-dark">
              <tr>
                <th scope="col-4">Rutina</th>
                <th className="col-4">Imagen</th>
                <th className="col-2">Dificultad</th>
                <th scope="col">Objetivo</th>
                <th scope="col-4">Músculo a trabajar</th>
                <th scope="col">Instrucciones</th>
              </tr>
            </thead>
            <tbody>
              {tempData
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.musculo_a_trabajar
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.nombre
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.dificultad
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.objetivo
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.nombre}</td>
                      <td>
                        <img
                          src={item.imagen}
                          alt="Ejercicio"
                          className="img-thumbnail"
                          width="70%"
                        />
                      </td>
                      <td>{item.dificultad}</td>

                      <td>{item.objetivo}</td>
                      <td>{item.musculo_a_trabajar}</td>

                      <td>
                        {/*Crear boton que me dirija a RutineSearch.js*/}
                        <NavLink to={item.instrucciones}>
                          <Button variant="primary">Instrucciones</Button>
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Row>
      </Container>
    </Container>
  );
};

export default Rutines;
