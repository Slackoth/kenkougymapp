import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import breakfast from '../imagenes/timing/desayuno.png';
import lunch from '../imagenes/timing/almuerzo.jpg';
import dinner from '../imagenes/timing/cena.jpg';

export default class ModelTiming extends Component {
    render() {
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)'
        }
        return (
            <div>
                <div className="modal show fade" style={modelStyle}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.Nombre}</h5>
                                <button type="button" className="btn-close" onClick={this.props.hide}></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-center fs-2 pb-4 pt-0 pr-4 pl-4"> Inicia un buen día, fortalece tu cuerpo y mantén un balance </p>


                                <div className="container" align="center">
                                    <div className="row">
                                        <div id="cubo1" className="col pb-4">
                                            <img src={breakfast} alt="desayuno" height='150px' width='200px' />
                                            <div className="card-body">
                                                <a href="Breakfast" type="button" className="btn btn-outline-success">Desayunos</a>
                                            </div>
                                        </div>
                                        <div id="cubo1" className="col pb-4">
                                            <img src={lunch} alt="almuerzo" height='150px' width='200px' />
                                            <div className="card-body">
                                                <a href="Lunch" type="button" className="btn btn-outline-success">Almuerzos</a>
                                            </div>
                                        </div>
                                        <div id="cubo1" className="col pb-4">
                                            <img src={dinner} alt="cena" height='150px' width='200px' />
                                            <div className="card-body">
                                                <a href="Dinner" type="button" className="btn btn-outline-success">Cenas</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}