import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
// import Modal from "../components/Modal";
import Maincontent from "../components/Maincontent"
import { Form, Input, TextArea, FormBtn } from "../components/Form";
import Map from "../components/Map";
import Utilities from "../utils/API";
import ContactInfo from "../components/ContactInfo";
import "./style.css";

function Contact() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    async function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.message) {
            let name = formObject.name.trim();
            let email = formObject.email.trim();
            let message = formObject.message.trim();
            let emailMessage = `Ali Bahrami Contact Form Submission | Name: ${name} | Email: ${email} | Message: ${message}`;

            document.getElementById("submit-btn").disabled = true;

            try {
                const result = await Utilities.sendMail(emailMessage);
                if (result) {
                    document.getElementById("contact-form").reset();
                    alert("Success!");
                }
            } catch (error) {
                console.log(error)
                alert("Failure!");
            }
        }
    };

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Pageheader>Contact</Pageheader>
                </Col>
            </Row>
            <Maincontent>
                <Row>
                    <Col size="md-6">
                        <Form id="contact-form">
                            <Input
                                onChange={handleInputChange}
                                name="name"
                                placeholder="Name (required)"
                            />
                            <Input
                                onChange={handleInputChange}
                                name="email"
                                placeholder="Email (required)"
                            />
                            <TextArea
                                onChange={handleInputChange}
                                name="message"
                                placeholder="Message (Optional)"
                            />
                            <FormBtn
                                id="submit-btn"
                                disabled={!(formObject.name && formObject.email && formObject.message)}
                                onClick={handleFormSubmit}
                            >
                                Send Message
                            </FormBtn>
                        </Form>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <Col size="xl-6 md-12">
                                <Map />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xl-6 md-12">
                                <ContactInfo />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Maincontent>
        </Container>);
}

export default Contact;