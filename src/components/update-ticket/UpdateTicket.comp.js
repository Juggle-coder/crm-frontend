import React from "react";
import {Form, Button} from "react-bootstrap";

export const UpdateTicket =() =>{
    return(
        <Form>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control  as="textarea"
            row="5"
            name="detail" />
            <div className="text-right">
            <Button variant="info mt-2 mb-3" type="submit">Reply</Button>
            </div>
        </Form>

    )
}