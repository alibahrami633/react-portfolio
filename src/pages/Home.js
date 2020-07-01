import React from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";

function Home() {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <Row>
                        <Col size="md-12 xl-5"></Col>
                        <Col size="md-12 xl-7"></Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <h4 className="cool-link">About Me</h4>
                            <p>
                                Full Stack Web Developer with experience in Digital Design and Animation.
                                <br />
                                I have gained a Master's degree in Information Technology including a Software
                                Development major and
                                recently graduated from Monash University Coding Bootcamp and earned a Full-Stack Web
                                development certificate, with newly developed skills in bootstrap, React.js, Node.js in
                                addition to previous skills in HTML, CSS, JavaScript and responsive web design.
                                <br />
                                Strong leadership and teamwork skills demonstrated by successfully leading a team of
                                five
                                resulting in a High Distinction grade motivates me to confront any challenges
                                independently or as part of a team in my future professional career.
                                <br />
                                Passionate about solving web and software challenges and collaborating with others to
                                build new web and
                                software solutions.
                                <br />
                                My technical competence in cutting edge web technologies in addition
                                to self-learning skills make me a strong addition to any web stack position in a web
                                development team.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col size="md-6">
                    <Row>
                        <Col size="md-6">
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
                        <Col size="md-6">
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
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <fieldset>
                                <legend className="legend">
                                    <h4>Links</h4>
                                </legend>
                                <div className="icon-anchor">
                                    <i className="fas fa-file-pdf"></i>
                                    <a href="assets/documents/resume.pdf" target="_blank">
                                        Resume
                                    </a>
                                </div>
                                <div className="icon-anchor">
                                    <i className="fab fa-linkedin"></i>
                                    <a href="https://www.linkedin.com/in/ali-bahrami-baa87325/" target="_blank">
                                        LinkedIn
                                    </a>
                                </div>
                                <div className="icon-anchor">
                                    <i className="fab fa-github"></i>
                                    <a href="https://github.com/alibahrami633" target="_blank">
                                        Github
                                    </a>
                                </div>
                                <div className="icon-anchor">
                                    <i className="fab fa-facebook"></i>
                                    <a href="https://www.facebook.com/ali.bahrami633" target="_blank">
                                        Facebook
                                    </a>
                                </div>
                                <div className="icon-anchor">
                                    <i className="fab fa-twitter"></i>
                                    <a href="https://twitter.com/AliBahr32339771" target="_blank">
                                        Twitter
                                    </a>
                                </div>
                            </fieldset>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;