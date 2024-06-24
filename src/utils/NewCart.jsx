import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function NewProfile() {


  const [perfil, setPerfil] = useState([]);
  const [error, setError] = useState('');

  const URL = "http://localhost:9000/registro/v1/cv";



  useEffect(() => {
    axios.get(URL).then(response => {
      console.log(response.data);
      setPerfil(response.data); // Asegúrate de establecer response.data
    }).catch(error => {
      console.error("error en la peticion", error);
      setError("Error en la petición");
    });
  }, []);


  const deleteCart = async (index, id_listado) => {
    
   
    if (!id_listado) {
      console.error("Error: El id_listado de la tarea es undefined");
      return;
  }

  try {
      const response = await fetch(`${URL}/${id_listado}`, {
          method: 'DELETE',
      });

      if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
      }

      console.log("Se ha borrado:", id_listado);
      const updatePerfil = perfil.filter((_, i) => i !== index);
      perfil(updatePerfil);
  } catch (error) {
      console.error("Error al eliminar la nota:", error);
  }
  };







return (
  <div>
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            {perfil.map((item, index) => 
              <div key={index} className="mb-4">
                <Card style={{ width: '18rem' }} bg={'dark'} text='white'>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{item.nombre_usuario}</Card.Title>
                    <Card.Text>{item.comentario_usuario}</Card.Text>
                    <Button variant="primary" className="mb-4" >Actualizar datos</Button>
                    <Button variant="danger" onClick={() => deleteCart(index, item.id_listado)}>Eliminar datos</Button>
                  </Card.Body>
                </Card>
              </div>
            )}
          </Col>
        </Row>
      </Container>

    </div>
  </div>
)
}
