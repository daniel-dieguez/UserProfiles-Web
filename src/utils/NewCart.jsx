import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { apiGet } from '../api/Get'
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



/*/<Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{item.nombre_usuario}</Card.Title>
            <Card.Text>{item.comentario_usuario}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
         */

  return (
    <div>
      <div>
      {Array.isArray(perfil) && perfil.map((item, index) => (
        <div key={index}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{item.nombre_usuario}</Card.Title>
            <Card.Text>{item.comentario_usuario}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
         ))}
      </div>

      <ul>
      {Array.isArray(perfil) && perfil.map((item, index) => (
          <div key={index}>
            <li>{item.nombre_usuario}</li>
            <li>{item.comentario_usuario}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}
