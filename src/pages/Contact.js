import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent"
import "./style.css";

function Contact() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Pageheader>Contact</Pageheader>
                </Col>
            </Row>
            <Maincontent>
            </Maincontent>
        </Container>);
}

export default Contact;