
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';



function ModalProfile({ id_listado }) {


  const [nota, setNota] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleSave = async  (e) => {

    e.preventDefault();
    console.log("first")
    try{
      const response = await axios.put(`http://localhost:9000/lista/tareas/${id_listado}`,{
        notas: nota,
      },{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log('Resultado:', response.data);
    // Aquí puedes añadir lógica adicional como cerrar el modal o actualizar la UI
} catch (error) {
    console.error('Error:', error);
}
   
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="mb-4">
        Actualizar datos
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cambio de datos</Modal.Title>
          <Modal.Title></Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>NOTA</Form.Label>
              <Form.Control
                type='text'
                placeholder='Cambia nota'
                value={nota}
                onChange={e => setNota(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalProfile;