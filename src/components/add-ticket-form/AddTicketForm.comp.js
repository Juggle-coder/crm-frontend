import React from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";

export const AddTicketForm= (handleOnSubmit, handleOnChange ) =>{
    return(
        <Jumbotron>
            <h1 className="text-info text-center">Add New Ticket</h1>
            <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                        name="subject"
                        // value= {email}
                        onChange={handleOnChange}
                        placeholder="Subject"
                        required
    
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>IssueDate</Form.Label>
                        <Form.Control
                        type="date"
                        name="issueDate"
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                        as="textarea"
                        name="details"
                        rows="5"
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>

                    <Button type="submit" variant="info" block>Login</Button>
                </Form>
        </Jumbotron>
    )

}