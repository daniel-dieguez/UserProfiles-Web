import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ModalProfile from '../utils/ModalProfile'





export default function NewProfile() {


  const [perfil, setPerfil] = useState([]);

  
  const url = "http://localhost:9000/file/view";
  

  
  useEffect(() => {
    axios.get(url).then(response => {
      console.log(response.data);
      const datos = response.data.map(item => ({
        ...item,
        data: `data:image/png;base64,${item.data}`
      }));
      setPerfil(datos);
    }).catch(error => {
      console.error("Error en la petición", error);
      // setError("Error en la petición");
    });
  }, []);


  const deleteCart = async (index, id) => {

    const urlDelete = 'http://localhost:9000/file/deliteImages';
    
    try {
      const response = await fetch(`${urlDelete}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      console.log("Se ha borrado:", id);
      const updateImages = perfil.filter((_, i) => i !== index);
      setPerfil(updateImages);

    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };


return (
  <Container className="mb-4">
  <Row className="justify-content-md-center">
    {perfil.map((item, index) => (
      <Col key={index} xs={12} sm={6} md={4} className="mb-4">
        <Card border="light" bg={'dark'} text='white' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={item.data} />
          <Card.Body>
            <Card.Title>{item.nombre_Completo}</Card.Title>
            <Card.Text>{item.comentario_user}</Card.Text>
            <ModalProfile id={item.id} fotoPerfil={item.name} />
            <Button variant="danger" onClick={() => deleteCart(index, item.id)}>Eliminar datos</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
);
}
