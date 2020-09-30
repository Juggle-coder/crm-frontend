import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {
    return (
    <div>
        <Container>
            <Row>

                <Col>
                <h1>Client Login</h1>
                <hr/>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value= {email}
                        onChange={handleOnChange}
                        placeholder="Enter email"
                        required
    
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="Password"
                        name="Password"
                        value={pass}
                        onChange={handleOnChange}
                        placeholder="Password"
                        required
                    
                        />
                    </Form.Group>

                    <Button type="submit">Login</Button>
                </Form>
                <hr/>

                </Col>
            </Row>

            <Row>
                <Col>
                <a href="#!" onClick={() => formSwitcher("reset")}>Forget Password?</a>
                
                </Col>
            </Row>
        </Container>
    </div>
    )
};


LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};