import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContact } from "./context/ContactsProvider";
export default function Contacts() {
    const {contact} = useContact();
    return(
        <ListGroup variant="flush">

        {contact.map( item => (
            <ListGroup.Item id={item.id}>{item.name}</ListGroup.Item>
        ))}
        </ListGroup>
    )
}