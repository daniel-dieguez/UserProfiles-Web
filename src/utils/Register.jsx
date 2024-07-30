import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';
import { convertidor } from '../helpers/Convertor';

export default function Register({errores, onSubmitCallback}) {

  const [perfil, setPerfil] = useState(null);
  const [error, setErrores] = useState({});

  
  

  const submitForm = async (e) => {
    e.preventDefault();

    if (!perfil) {
      setErrores({ perfil: 'Please select a file' });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', perfil);

      const urlPost = 'http://localhost:9000/file/Upfile';
      const response = await fetch(urlPost, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

    
  

  


  return (
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentarios</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setPerfil(e.target.files[0])}
            isInvalid={errores.perfil}
          />
          <Form.Control.Feedback className="control-feedback" type="invalid">
            {errores.perfil}
          </Form.Control.Feedback>
        </Form.Group>
  
        <Button className="mt-3" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    );
  };
