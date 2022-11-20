import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Axios from "axios";
import { Link } from 'react-router-dom';
import breakData from '../recipes/data/breakfastData';
import React, { useState, useEffect, Component } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;





const Progreso = () => {

  const [tempData, setTempData] = useState([]);

  var user 

  useEffect(() => {
      //Axios.get()
      const getData = async () => {

          const url = "http://147.182.214.93:8080/kenkou-gym-api/usuario/obtenerUsuario?username=00082318";
          const { data } = await Axios.get(url);
          console.log(data);
          user=data
          setTempData(data);
      }
      getData();
      
  }, []);
  user=tempData


const [progressdata, setprogressdata] = useState([]);
var dataprogress 
  useEffect(() => {
    //Axios.get()
    const getDataprogreso = async () => {

        const url = "http://147.182.214.93:8080/kenkou-gym-api/usuario/obtenerProgreso?username=00082318&fechaActual=05%2F09%2F2022&fechaInicial=01%2F01%2F2022";
        const { data } = await Axios.get(url);
        console.log(data);
        dataprogress=data;
        setprogressdata(data);
    }
    getDataprogreso();
    
}, []);
dataprogress=progressdata
var datalenght= dataprogress.length

//brazo derecho
var dtabrazoder=[]
for (let i = 0; i < dataprogress.length; i++) {
  dtabrazoder.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].medida_brazo_der_inicial
  })
}
//brazo izq
var dtabrazoizq=[]
for (let i = 0; i < dataprogress.length; i++) {
  dtabrazoizq.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].medida_brazo_izq_inicial
  })
  
}
//pecho
var dtapecho=[]
for (let i = 0; i < dataprogress.length; i++) {
  dtapecho.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].medida_pecho_inicial
  })
  
}
//pierna izq
var dtapiernaizq=[]
for (let i = 0; i < dataprogress.length; i++) {
  dtapiernaizq.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].medida_pierna_izq_inicial
  })
  
}
// pierna der
var dtapiernader=[]
for (let i = 0; i < dataprogress.length; i++) {
  dtapiernader.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].medida_pierna_der_inicial
  })
  
}
//cuello LOL\
var dtacuello=[]
for (let i = 0; i < dataprogress.length; i++) {
  dtacuello.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].medida_cuello_inicial
  })
  
}

const options = {
  animationEnabled: true,	
  title:{
    text: "Progreso muscular"
  },
  axisY : {
    title: "cm"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "spline",
    name: "Brazo Der",
    showInLegend: true,
    dataPoints: dtabrazoder
  },
  {
    type: "spline",
    name: "Brazo Izq",
    showInLegend: true,
    dataPoints: dtabrazoizq
  },
  {
    type: "spline",
    name: "Pecho",
    showInLegend: true,
    dataPoints: dtapecho
  },
  {
    type: "spline",
    name: "Cuello",
    showInLegend: true,
    dataPoints: dtacuello
  },
  {
    type: "spline",
    name: "Pierna Izq",
    showInLegend: true,
    dataPoints: dtapiernaizq
  },
  {
    type: "spline",
    name: "Pierna Der",
    showInLegend: true,
    dataPoints: dtabrazoder
  }
  ]
}


//segudno esquema
//brazo derecho
var ptebrazoder=[]
for (let i = 0; i < dataprogress.length; i++) {
  ptebrazoder.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].aumento_brazo_der
  })
}
//brazo izq
var ptebrazoizq=[]
for (let i = 0; i < dataprogress.length; i++) {
  ptebrazoizq.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].aumento_brazo_izq
  })
  
}
//pecho
var ptepecho=[]
for (let i = 0; i < dataprogress.length; i++) {
  ptepecho.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].aumento_pecho
  })
  
}
//pierna izq
var ptepiernaizq=[]
for (let i = 0; i < dataprogress.length; i++) {
  ptepiernaizq.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].aumento_pierna_izq
  })
  
}
// pierna der
var ptepiernader=[]
for (let i = 0; i < dataprogress.length; i++) {
  dtapiernader.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].aumento_pierna_der
  })
  
}
//cuello LOL\
var ptecuello=[]
for (let i = 0; i < dataprogress.length; i++) {
  ptecuello.push({
    x: new Date(dataprogress[i].fecha_inicial).getMonth(),
    y: dataprogress[i].aumento_cuello
  })
  
}

const options2 = {
  animationEnabled: true,	
  title:{
    text: "Aumento de circunferencia"
  },
  axisY : {
    title: "cm"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "spline",
    name: "Brazo Der",
    showInLegend: true,
    dataPoints: ptebrazoder
  },
  {
    type: "spline",
    name: "Brazo Izq",
    showInLegend: true,
    dataPoints: ptebrazoizq
  },
  {
    type: "spline",
    name: "Pecho",
    showInLegend: true,
    dataPoints: ptepecho
  },
  {
    type: "spline",
    name: "Cuello",
    showInLegend: true,
    dataPoints: ptecuello
  },
  {
    type: "spline",
    name: "Pierna Izq",
    showInLegend: true,
    dataPoints: ptepiernaizq
  },
  {
    type: "spline",
    name: "Pierna Der",
    showInLegend: true,
    dataPoints: ptepiernader
  }
  ]
}




    return (
        <Container fluid='lg'>
            <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
    

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{user.username}</p>
                <p className="text-muted mb-4">{user.firstName} {user.lastname}</p>
                <div className="d-flex justify-content-center mb-2">
                  
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon=" fa-lg text-warning" />
                    <MDBCardText>{user.medidaAltura} m </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon=" fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>Peso 160lbs       </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon=" fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>{user.sexo}</MDBCardText>
                  </MDBListGroupItem>

                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Nombre Completo</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.firstName} {user.lastname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Premium</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Premium</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fecha de Expiración</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.credentialsExpiration}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
                
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"> </MDBCardText>
                    <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			              />


                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    {/* <MDBCardText className="mb-4"><span className="text-primary font-italic me-1"></span> Progreso de masa muscular en los ultimos {datalenght} meses</MDBCardText> */}
                    <MDBCardText className="mb-4"> </MDBCardText>
                    <CanvasJSChart options = {options2}
				/* onRef={ref => this.chart = ref} */
			              />
                    {/* <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Aumento Brazos</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Aumento Pecho</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Aumento Piernas</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress> */}



                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
        </Container>
    );
};

export default Progreso;