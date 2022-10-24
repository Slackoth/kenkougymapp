import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import data from './data/dataIngredients';

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { alignPropType } from 'react-bootstrap/esm/types';




const Ingredientes = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);

    return (
        <Container fluid='lg'>
            <Row>
                <div className="row justify-content-center align-item-center">
                    {data.cardIngredients.map((item, index) => {
                        return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                                <div className="card p-0 overflow-hidden h-100 shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <img src={item.img} className="card-img-top" alt="..." width="100px" height="150px" />
                                        <p className="card-text"> Calorias en 100gr: <strong>{item.cal}</strong></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Row>
        </Container>
    );
};

export default Ingredientes;