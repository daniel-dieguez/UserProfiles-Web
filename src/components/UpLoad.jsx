/*import React from 'react'
import Card from 'react-bootstrap/Card';
import Imagen from '../img/imagen1.jpg';
import { useRef, useState } from 'react';


export default function UpLoad() {

  const inputRef = useRef (null);
  const [ima,setIma] = useState("")

  const handleIma = () =>{
    inputRef.current.click();
  }

  const hanleImageChange = (event) =>{
    const file = event.target.files[0];
    console.log(file);
    setIma(event.target.files[0]);

  }


  return (
    <div onClick={handleIma}>
    <Card  style={{ width: '18rem' }}>
    {ima ?(
        <Card.Img variant="top" src={URL.createObjectURL(ima)} />
      ):(
        <Card.Img variant="top" src={Imagen} />
      )}      
      <input type="file" ref={inputRef} onChange={hanleImageChange} style={{display: "none"}} />
    <Card.Body>
      <Card.Title>queso Card Title</Card.Title>
    </Card.Body>
  </Card>
  </div>
  )
}*/
