import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export function OpenConversation(){
    const [text,setText] = useState('');
    return(
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

            </div>
            <Form>
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
    )
}