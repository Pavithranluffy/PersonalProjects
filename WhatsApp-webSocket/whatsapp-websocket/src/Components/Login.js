import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "./Slice/IdSlice";
import { v4 as uuidV4 } from "uuid";

export default function Login() {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userID); // Ensure correct slice key

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredId = inputRef.current.value;
        dispatch(setId(enteredId)); // Update Redux state
        localStorage.setItem("login-user-id", enteredId); // Store in localStorage
        console.log("Login ID stored in Redux and LocalStorage:", enteredId);
        inputRef.current.value = ""; // Clear input
    };

    const createID = () => {
        const newId = uuidV4(); // Generate new UUID
        dispatch(setId(newId)); // Update Redux state
        localStorage.setItem("created-user-id", newId); // Store in localStorage
        console.log("Created ID stored in Redux and LocalStorage:", newId);
    };

    return (
        <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={inputRef} required />
                </Form.Group>
                <Button type="submit" className="me-2">Login IN</Button>
                <Button variant="secondary" onClick={createID}>Create ID</Button>
            </Form>
        </Container>
    );
}
