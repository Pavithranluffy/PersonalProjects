import React, { useState } from 'react';
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { useContact } from './context/ContactsProvider';
import { useConversation } from './context/ConversationProvider';
export default function ConversationModal({closeModal}){
    const [selectedcontactsid , setSelectedContactsids] = useState([]);
    const {contact} = useContact();
    const {createConversation} = useConversation();
    function handleSubmit(e){
        e.preventDefault();
        createConversation(selectedcontactsid)
        closeModal();

    }
    function handleCheckchange(contactid){
        setSelectedContactsids(prevselectedcontactids =>{
            //First We are Checking that the contacts is already in the list 
            if(prevselectedcontactids.includes(contactid)){
                //if already there means we need to return the list by filtering it out which is already there 
                return prevselectedcontactids.filter(previd => {
                    return contactid !== previd })

                
            }
            else{
                return [...prevselectedcontactids,contactid]
            }
        })

    }
    return(
        <>
        <Modal.Header closeButton>
            Create Button
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>{
                contact.map(item =>(
                    <Form.Group controlId={item.id} key={item.id}>
                        <Form.Check
                        type='checkbox'
                        value={selectedcontactsid.includes(item.id)}
                        onChange={() => handleCheckchange(item.id)}
                        label={item.name}
                        >

                        </Form.Check>

                    </Form.Group>
                ))
                }
           
                <Button className="mt-2" type="submit">
                     Create
                </Button>
            </Form>
        </Modal.Body>
        
        </>
    )
}