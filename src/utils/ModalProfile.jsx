
import {  useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import { convertidor } from '../helpers/Convertor';



function ModalProfile({ id }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [comentario, setComentario]  = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a file to upload!",
      });
      return;
    }

    /*const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('nombre_completo',nombreUsuario);
    formData.append('comentario_user', comentario)
    */

    try {                                                                      //abajo de esta coma se agrega el formData de arriba     
      const response = await axios.put(`http://localhost:9000/file/UpFile/${id}`, {
        file:selectedFile,
        nombre_completo:nombreUsuario,
        comentario_user:comentario
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log("Resultado:", response.data);
      Swal.fire({
        icon: "success",
        title: "Cambio de imagen",
        text: "Recarga la página",
      });
      handleClose();  // Cierra el modal después de guardar
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
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
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>cambia la imagen</Form.Label>
              <Form.Control
                type='file'
                placeholder='cambia imagen'
                onChange={e => setSelectedFile(e.target.files[0])}
              />
            </Form.Group >
            <Form.Group className="mb-2">
              <Form.Label>Actualiza tu nombre</Form.Label>
                <Form.Control 
                type='text'
                placeholder='Agrega el nombre nuevo'
                onChange={e => setNombreUsuario(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Actualiza tu nombre</Form.Label>
                <Form.Control 
                as="textarea"
                placeholder='Agrega tu comentario'
                onChange={e => setComentario(e.target.value)}
                rows={3}/>
            </Form.Group >
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