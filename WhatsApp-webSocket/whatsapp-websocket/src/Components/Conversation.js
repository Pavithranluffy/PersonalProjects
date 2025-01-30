import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversation } from "./context/ConversationProvider";
export default function Conversation(){
    const {conversation,selectConversationIndex} = useConversation();
    console.log(conversation);
    
    return(
        <ListGroup >
           {conversation.map((conversations,index) =>(
            <ListGroup.Item key={index} action active={conversations.selected} onClick={()=>selectConversationIndex(index)}>
                 {conversations.recipients.map(r => r.name).join(' ,')}
            </ListGroup.Item>
           ))}
        </ListGroup>
    )
}