import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
export default function ContactModal({closemodal}){
    const idref = useRef();
    const nameref = useRef();
   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Contact Created");
   // createContact(idref.current.value,nameref.current.value);
closemodal();
    
   }
    return(
        <>
        <Modal.Header closeButton>
            Create Button
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        Enter Your ID
                    </Form.Label>
                    <Form.Control type="text"  ref={idref} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type="text" ref={nameref} required>

                    </Form.Control>
                </Form.Group>
                <Button className="mt-2" type="submit">
Create
                </Button>
            </Form>
        </Modal.Body>
        
        </>
    )
}