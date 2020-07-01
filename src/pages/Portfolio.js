import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Project from "../components/Project";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent"
import "./style.css";

import project1Url from "../assets/images/evch-finder.png";
import project2Url from "../assets/images/workdayScheduler.png";
import project3Url from "../assets/images/weatherDashboard.png";
import project4Url from "../assets/images/randomPasswordGenrator.png";

function Portfolio() {
    const projects = [
        {
            headTitle: "Electric Vehicle Charging Station Finder",
            imageUrl: project1Url,
            alt: "EVCH Finder",
            demoUrl: "https://alibahrami633.github.io/EVCS-Finder/",
            repoUrl: "https://github.com/alibahrami633/EVCS-Finder"
        },
        {
            headTitle: "Workday Scheduler",
            imageUrl: project2Url,
            alt: "Workday Scheduler",
            demoUrl: "https://alibahrami633.github.io/WorkdayScheduler/",
            repoUrl: "https://github.com/alibahrami633/WorkdayScheduler"
        },
        {
            headTitle: "Weather Dashboard",
            imageUrl: project3Url,
            alt: "Weather Dashboard",
            demoUrl: "https://alibahrami633.github.io/WeatherDashboard/",
            repoUrl: "https://github.com/alibahrami633/WeatherDashboard"
        },
        {
            headTitle: "Random Password Generator",
            imageUrl: project4Url,
            alt: "Random Password Generator",
            demoUrl: "https://alibahrami633.github.io/RandomPasswordGenerator/Develop/",
            repoUrl: "https://github.com/alibahrami633/RandomPasswordGenerator"
        }
    ];

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Pageheader>Portfolio</Pageheader>
                </Col>
            </Row>
            <Maincontent>
                <Row>
                    <Col size="md-6">
                        <Project projectInfo={projects[0]} />
                    </Col>
                    <Col size="md-6">
                        <Project projectInfo={projects[1]} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Project projectInfo={projects[2]} />
                    </Col>
                    <Col size="md-6">
                        <Project projectInfo={projects[3]} />
                    </Col>
                </Row>
            </Maincontent>
        </Container>
    );
}

export default Portfolio;