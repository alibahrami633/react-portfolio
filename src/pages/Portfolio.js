import React from "react";
import { Container, Row } from "../components/Grid";
import Project from "../components/Project";
import project1Url from "../images/evch-finder.png"

function Portfolio() {
    let project1 = {
        headTitle: "Electric Vehicle Charging Station Finder",
        imageUrl: project1Url,
        alt: "EVCH Finder",
        demoUrl: "https://alibahrami633.github.io/EVCS-Finder/",
        repoUrl: "https://github.com/alibahrami633/EVCS-Finder"
    };
    return (
        <Container>
            <Row>
                <Project projectInfo={project1} />
            </Row>
        </Container>);
}

export default Portfolio;