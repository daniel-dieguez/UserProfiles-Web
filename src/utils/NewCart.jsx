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
  <div>
    <div>
      <Container className="mb-4">
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            {perfil.map((item, index) => 
              <div key={index} className="mb-4">
                <Card border="light" style={{ width: '18rem' }} bg={'dark'} text='white'>
                  <Card.Img variant="top" src={item.data} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.id}</Card.Text>
                    <ModalProfile id={item.id} fotoPefil={item.name}/>
                    <Button variant="danger" onClick={() => deleteCart(index, item.id)}>Eliminar datos</Button>
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
