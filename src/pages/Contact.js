import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent"
import { Input, TextArea, FormBtn } from "../components/Form";
import "./style.css";

function Contact() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.message) {
            //   API.saveBook({
            //     title: formObject.title,
            //     author: formObject.author,
            //     synopsis: formObject.synopsis
            //   })
            //     .then(res => loadBooks())
            //     .catch(err => console.log(err));
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
                        <form>
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
                                Send
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Maincontent>
        </Container>);
}

export default Contact;

/*
 <Row>
                            <Col size="md-12">
                                <Input />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <Input />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <TextArea />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <FormBtn>Submit</FormBtn>
                            </Col>
                        </Row>

 */