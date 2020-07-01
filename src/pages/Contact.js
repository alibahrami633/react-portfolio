import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Modal from "../components/Modal";
import Maincontent from "../components/Maincontent"
import { Input, TextArea, FormBtn } from "../components/Form";
import Utilities from "../utils/API";
import "./style.css";

function Contact() {
    const [formObject, setFormObject] = useState({})

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
                        <form id="contact-form">
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
                                disabled={!(formObject.name && formObject.email && formObject.message)}
                                onClick={handleFormSubmit}
                            >
                                Send Message
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Maincontent>
        </Container>);
}

export default Contact;