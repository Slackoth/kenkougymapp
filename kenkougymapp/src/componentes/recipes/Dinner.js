import { Container, Row } from 'react-bootstrap';
import dinnerData from '../recipes/data/dinnerData';

const Dinner = () => {
    return (
        <Container fluid='lg'>
            <Row>
                <div className="row justify-content-center align-item-center">
                    {dinnerData.dinner.map((item, index) => {
                        return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                                <div className="card p-0 overflow-hidden h-100 shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <img src={item.img} className="card-img-top" alt="..." width="100px" height="150px" />
                                        <p className="card-text"> Ingredientes <strong>{item.ingredientes}</strong></p>
                                        <p className="card-text"> Receta <strong>{item.receta}</strong></p>
                                        <p className="card-text"> Valor Nutricional <strong>{item.valor}</strong></p>
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

export default Dinner;