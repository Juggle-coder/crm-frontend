import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";

const ticket = tickets[0]
export const Ticket=()=>{
    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">Subject:{ticket.subject}</div>
                    <div className="date">Subject:{ticket.addedAt} </div>
                    <div className="status">Subject:{ticket.status} </div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col className="mt-4">
                <MessageHistory msg={ticket.history} />
                </Col>
            </Row>
            <hr/>

            <Row>
                <Col className="mt-4">
                    <UpdateTicket/>
                </Col>
            </Row>

        </Container>
    )
}