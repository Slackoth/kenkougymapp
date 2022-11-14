import { Col, Container, Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import Axios from "axios";

const RutinesSearch2 = () => {
  const [tempData, setTempData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    //Axios.get()
    const getData = async () => {
      const url =
        "http://localhost:8080/kenkou-gym-api/ejercicios/ejercicioPorRutinaPorId?idRutina=2";
      const { data } = await Axios.get(url);
      console.log(data);

      setTempData(data);
    };
    getData();
  }, []);

  return (
    <Container fluid="lg">
      <Row className="justify-content-center">
        <Col md={3} className="text-center text-md">
          <img
            src="https://drive.google.com/uc?export=view&id=1ah7hvtjuZ6XB-iHLIzR59HEN4BOlJTGr"
            alt=""
            width="250px"
            height="150px"
          />
        </Col>
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
                <th scope="col">Músculo</th>
                <th scope="col-4">Ejercicio</th>
                <th className="col-6">Imagen</th>
                <th className="col-2">Series</th>
                <th className="col-2">Repeticiones</th>
                <th className="col">Tiempo recomendado</th>
                <th className="col">Video Tutorial</th>
              </tr>
            </thead>
            <tbody>
              {tempData
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.ejercicioPorMusculo.musculo.nombre
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.ejercicioPorMusculo.ejercicio.nombre
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.ejercicioPorMusculo.musculo?.nombre}</td>
                      <td>{item.ejercicioPorMusculo.ejercicio?.nombre}</td>
                      <td>
                        <img
                          src={item.ejercicioPorMusculo.imagenEjercicio?.imagen}
                          alt="Ejercicio"
                          className="img-thumbnail"
                          width="70%"
                        />
                      </td>

                      <td>{item.ejercicioPorMusculo.series}</td>
                      <td>{item.ejercicioPorMusculo.repeticiones}</td>
                      <td>
                        <p>{item.ejercicioPorMusculo.tiempo_recomendado}</p>
                      </td>
                      <td>
                        <a
                          href={item.ejercicioPorMusculo.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button type="button" className="btn btn-primary">
                            Ver
                          </button>
                        </a>
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

export default RutinesSearch2;
