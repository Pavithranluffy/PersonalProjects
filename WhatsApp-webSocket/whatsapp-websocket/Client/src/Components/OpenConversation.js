import { useEffect, useState,useRef, useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversation } from "./context/ConversationProvider";

export function OpenConversation(){
    const [text,setText] = useState('');
    const setRef = useCallback((node)=>{
        if(node){
            node.scrollIntoView({smooth:true});
        }
    },[])
    const {sendmessage,currentConversation} = useConversation();
    console.log("the CurrentConversation is "+JSON.stringify(currentConversation.recipients));
    
    function handleSubmit(e){
        e.preventDefault();
        
        sendmessage(
        currentConversation.recipients.map(r =>r.id)
        ,text
      )
        console.log(text);
        
        setText('');
    }
    return(
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">
            <div className="d-flex flex-column align-items-start justify-content-end px-3">
                {currentConversation.messages.map((message,index)=>{
                    const lastmessage = currentConversation.messages.length -1 === index; 
                    return(
                        <div ref={lastmessage ? setRef : null} key={index} className={`1my-1 d-flex flex-column ${message.fromMe ? 'align-self-end' : ''}`}>
                            <div className={`rounded px-2 py-2 ${message.fromMe ? 'bg-primary text-white': 'border'}`}>
                                {message.text}
                            </div>
                            <div className={`text-muted small ${message.fromMe ? 'text-right':''}`}>
                                {message.fromMe ? "Me":message.senderName}
                            </div>

                        </div>
                    )
                })}

            </div>

            </div>
            <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <InputGroup>
                    <Form.Control
                    as="textarea"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                    style={{height:"75px",resize:"none"}}
                    />

                    <Button type="submit">
                        send
                    </Button>
       
                  
          
                    </InputGroup>
                </Form.Group>
            </Form>
            </div>
            
 
        </div>
    )
}