import React, { use, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setId } from "./Slice/IdSlice";
import { useSelector } from "react-redux";

export default function Login() {
    const inputRef = useRef();
    const dispatch = useDispatch(); // Call useDispatch here at the top level.
    const userId = useSelector((state) => state.userID);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch the value directly
        dispatch(setId(inputRef.current.value));
        console.log("The new state value is "+userId);
        inputRef.current.value = "";
        
    };

    return (
        <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
            
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={inputRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" className="me-2">Login IN</Button>
                <Button variant="secondary">Create ID</Button>
            </Form>
        </Container>
    );
}
