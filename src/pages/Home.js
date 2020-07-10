import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent";
import ContactInfo from "../components/ContactInfo";
import "./style.css";
import aliPicUrl from "../assets/images/ali-portfolio-website.png";

function Home() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Pageheader>Home</Pageheader>
                </Col>
            </Row>
            <Maincontent>
                <Row>
                    <Col size="md-6">
                        <Row>
                            <div className="image-text">
                                <div className="image-holder">
                                    <img src={aliPicUrl} alt="Ali Bahrami" />
                                </div>
                                <div>
                                    <h4 className="cool-link">About Me</h4>
                                    <p>
                                        Full Stack Web Developer with experience in Digital Design and Animation.
                                    </p>
                                    <p>
                                        I have gained a master's degree in Information Technology including a Software Development major and recently graduated from Monash University Coding Bootcamp and earned a full-stack web development certificate, with newly developed skills in bootstrap, React.js, Node.js in addition to previous skills in HTML, CSS, JavaScript and responsive web design.
                                    </p>
                                    <p>
                                        Strong leadership and teamwork skills demonstrated by successfully leading a team of five resulting in a high distinction grade. I am motivated to confront any challenges independently or as part of a team in my future career.
                                    </p>
                                    <p>
                                        Passionate about solving web and software challenges and collaborating with others to build new web and software solutions.
                                    </p>
                                    <p>
                                        My technical competence in cutting edge web technologies in addition to believing in life-long learning make me a strong addition to any in a web development team.
                                    </p>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-4">
                                <fieldset>
                                    <legend className="legend">
                                        <h4>Skills</h4>
                                    </legend>
                                    <ul>
                                        <li className="cool-link">HTML</li>
                                        <li className="cool-link">CSS</li>
                                        <li className="cool-link">JavaScript</li>
                                        <li className="cool-link">Bootstrap</li>
                                        <li className="cool-link">AJAX</li>
                                        <li className="cool-link">JSON</li>
                                        <li className="cool-link">jQuery</li>
                                        <li className="cool-link">Node.js</li>
                                        <li className="cool-link">React.js</li>
                                        <li className="cool-link">MongoDB</li>
                                        <li className="cool-link">MySQL</li>
                                        <li className="cool-link">Wordpress</li>
                                        <li className="cool-link">PHP</li>
                                    </ul>
                                </fieldset>
                            </Col>
                            <Col size="md-4">
                                <fieldset>
                                    <legend className="legend">
                                        <h4>Interests</h4>
                                    </legend>
                                    <ul>
                                        <li className="cool-link">Photograpgy</li>
                                        <li className="cool-link">Music</li>
                                        <li className="cool-link">Basketball</li>
                                        <li className="cool-link">Gaming</li>
                                        <li className="cool-link">Family</li>
                                        <li className="cool-link">Movie</li>
                                        <li className="cool-link">Hiking</li>
                                    </ul>
                                </fieldset>
                            </Col>
                            <Col size="md-4">
                                <ContactInfo />
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Maincontent>
        </Container >
    );
}

export default Home;