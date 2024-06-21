import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';

export default function Register({errores, onSubmitCallback}) {

  const [text, setText] = useState("");
  const [nombre, setnombre] =useState("");
  const [perfil, setPerfil] = useState("")


  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ text, nombre});

  }



  const handled = () =>{



  }


  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-2">
      <Form.Label> Ingrese su nombre y apellido</Form.Label>
      <Form.Control type='name' value={nombre} onChange={e => setnombre(e.target.value)} placeholder='Nombre y apellido' isInvalid={errores.nombre}></Form.Control>
      </Form.Group>


    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control as="textarea" rows={3} value={text} onChange={e => setText(e.target.value)} placeholder='Deja tu comentario' isInvalid={errores.text}/>
        <Form.Control.Feedback className="control Feedback" type='invalid'>{errores.text}</Form.Control.Feedback>
      </Form.Group>

    

    <Button className='mt-3' variant='primary' type='submit'>Enviar</Button>
  </Form>
  )
}
