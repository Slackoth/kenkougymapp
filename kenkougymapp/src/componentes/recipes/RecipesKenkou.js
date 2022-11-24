import { Col, Container, Row, Table, Button } from "react-bootstrap";
import cub2 from "../imagenes/menu/cubo2.jpg";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
const RecipesKenkou = () => {
  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [tempName, setName] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    //Axios.get()
    const getData = async () => {
      const url = "http://localhost:8080/kenkou-gym-api/nutricion/recetas";
      const { data } = await Axios.get(url);
      console.log(data);

      setTempData(data);
    };
    getData();
  }, []);

  //const item = tempData.map(i => console.log(i))

  return (
    <Container fluid="lg">
      <Row className="justify-content-center">
        <Col md={3} className="text-center text-md">
          <img src={cub2} width="250px" height="150px" alt="..." />
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
                <th scope="col-1">ID</th>
                <th className="col-1">Nombre</th>
                <th className="col-1">Tutorial</th>
                <th className="col-7">Instrucciones</th>
                <th className="col-2">Objetivo</th>
                <th className="col-1">Tiempo</th>
                <th className="col-3">Ingredientes</th>
                <th className="col-3">Tabla Nutricional</th>
              </tr>
            </thead>
            <tbody>
              {tempData
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.nombre
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.instrucciones
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.objetivo.nombre
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.tiempoComida.nombre
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase)
                  ) {
                    return val;
                  }
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.nombre}</td>
                      <td>
                        <Button
                          variant="outline-success"
                          size="sm"
                          href={item.linkVideo}
                        >
                          Video
                        </Button>
                      </td>
                      <td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.instrucciones,
                          }}
                        />
                        {/* {item.instrucciones} */}
                      </td>
                      <td>{item.objetivo.nombre}</td>
                      <td>{item.tiempoComida.nombre}</td>
                      <td>
                        {item.cantidadDeIngrediente.map((n) => {
                          return <li> {n.ingrediente.nombreAlimento} </li>;
                        })}
                      </td>
                      <td>
                        <li>Calorias: {item.tablanutricional.calorias}</li>
                        <li>Proteinas: {item.tablanutricional.proteinas}</li>
                        <li>
                          Carbohidratos: {item.tablanutricional.carbohidratos}
                        </li>
                        <li>Fibra: {item.tablanutricional.fibra}</li>
                        <li>Grasas: {item.tablanutricional.grasas}</li>
                        <li>
                          Grasa Saturada: {item.tablanutricional.grasaSaturada}
                        </li>
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

export default RecipesKenkou;
