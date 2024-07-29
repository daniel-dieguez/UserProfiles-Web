import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function PruebaCart() {

    const [image, setImage] = useState ([]);
   
    const url = "http://localhost:9000/file/view";
  useEffect(() => {
    axios.get(url).then(response => {
      console.log(response.data);
      const datos = response.data.map(item => ({
        ...item,
        data: `data:image/png;base64,${item.data}`
      }));
      setImage(datos);
    }).catch(error => {
      console.error("Error en la petición", error);
      // setError("Error en la petición");
    });
  }, []);
    



  return (
    <div>
    {image.map((item, index) => (
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={item.data} alt="Fetched from API" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
);
}
