import { Button, Col, Container, Row, Table } from "react-bootstrap";
import cub2 from "../imagenes/menu/cubo2.jpg";
import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import recipesData from "../recipes/data/dataRecipes";
import ModelTiming from "../recipes/modalTiming";
import ban4 from '../imagenes/banner/banner7.jpg';
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
      <Row>
        <div id="cubo1" className="justify-content-center text-center pb-4" >
          <img src={ban4} width="100%" height="380px" alt="..." />
        </div>
        <p className='text-center fs-1 pb-1 pt-2 pr-4 pl-4'>
                <strong>Recetas</strong>
            </p>

            <p className='text-center fs-5 pb-0 pt-1 pr-4 pl-4'>
                Aquí se te presentan diferentes recetas para  preparar en casa, logrando complementar tu dieta y estar más cerca de tus objetivos
            </p>
      </Row>
        <Col md={3} className="text-center text-md">
          <NavLink to="/Ingredients">
          <Button variant="primary" size="sm" >
            Alimentos Cotidianos
          </Button>
          </NavLink>
          <NavLink to="/searchRecpe">
          <Button variant="primary" size="sm" >
            Ingredientes de Nuestras Recetas
          </Button></NavLink>
          <NavLink to ="/recipesKenkou">
          <Button variant="primary" size="sm" >
            Ver Recetario
          </Button>
          </NavLink>
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
