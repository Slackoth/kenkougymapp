import { Button, Col, Container, Row, Table } from "react-bootstrap";
import cub2 from "../imagenes/menu/cubo2.jpg";
import React, { useState } from "react";
import recipesData from "../recipes/data/dataRecipes";
import ModelTiming from "../recipes/modalTiming";
import { MDBInput } from "mdb-react-ui-kit";

const Recipes = () => {
  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = (nombre, img, desc) => {
    let tempData = [nombre, img, desc];
    setTempData((item) => [1, ...tempData]);
    return setModel(true);
  };

  return (
    <Container fluid="lg">
      <Row className="justify-content-center">
        <Col md={3} className="text-center text-md">
          <img src={cub2} width="250px" height="150px" alt="..." />
          <Button variant="outline-warning" size="sm" href="Ingredients">
            Alimentos Cotidianos
          </Button>
          <Button variant="outline-danger" size="sm" href="/searchRecipe">
            Ingredientes de Nuestras Recetas
          </Button>
          <Button variant="outline-success" size="sm" href="/recipesKenkou">
            Ver Recetario
          </Button>
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
                <th scope="col">Nombre</th>
                <th className="col-4">Imagen</th>
                <th className="col-7">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {recipesData.cardRecipes
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td> {item.nombre} </td>
                      <td>
                        <img
                          src={item.img}
                          alt="vegetarianos"
                          className="img-thumbnail"
                          width="70%"
                        />
                      </td>
                      <td> {item.desc} </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Row>
      </Container>

      {model === true ? (
        <ModelTiming
          img={tempData[1]}
          nombre={tempData[2]}
          desc={tempData[3]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Recipes;
