import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
    return (
    <div>
        <Container>
            <Row>

                <Col>
                <h1>Reset Password</h1>
                <hr/>
                <Form onSubmit={handleOnResetSubmit}>
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

                    <Button type="submit">Reset Password</Button>
                </Form>
                <hr/>

                </Col>
            </Row>

            <Row>
                <Col>
                <a href="#!" onClick={() => formSwitcher("login")}>Loggin Now</a>
                
                </Col>
            </Row>
        </Container>
    </div>
    )
};


ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    
};