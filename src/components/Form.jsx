import React, {useState} from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Register from '../utils/Register';

export default function Form() {


    const [errores, setErrores] = useState("");

    const create = ({images}) =>{


  const errores = {};
  setErrores(errores);


}


  return (
    <div>
    <Container className='mt-5' >
      <Row >
        <Col ms="12" md={4} className="mb-4" >
          <Card body >
            <h3>
           Ingrese imagen 
            </h3>
            <hr></hr>
            <Register errores={errores} onSubmitCallback={create}></Register>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
