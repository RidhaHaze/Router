import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function AddMovie({addMovie}) {
  const [show, setShow] = useState(false);
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [rate,setRate]=useState('');
  const [posterUrl,setPosterUrl]=useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=()=>{
    addMovie({title,description,rate,posterUrl});
  setTitle("");
  setDescription("");
  setRate("");
  setPosterUrl("");
    handleClose()
  }

  return (

    <>
      <Button variant="primary" onClick={handleShow}>
      Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add new  Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder='enter a title' value={title} onChange={e=>setTitle(e.target.value)}/>
          <br />
          <Form.Control type="text" placeholder='enter a description'value={description} onChange={e=>setDescription(e.target.value) }/>
          <br />
          <Form.Control type="text" placeholder='enter a rate' value={rate} onChange={e=>setRate(e.target.value)}/>
          <br/>
          <Form.Control type="text" placeholder='enter image URL' value={posterUrl} onChange={e=>setPosterUrl(e.target.value)}/>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie