import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Project from "../components/Project";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent";
import "./style.css";

import url1 from "../assets/images/evch-finder.png";
import url2 from "../assets/images/workdayScheduler.png";
import url3 from "../assets/images/weatherDashboard.png";
import url4 from "../assets/images/fitness-tracker.png";
import url5 from "../assets/images/employee-directory.png";
import url6 from "../assets/images/cryptofolio.png";

function Portfolio() {
    const projects = [
        {
            headTitle: "Electric Vehicle Charging Station Finder",
            imageUrl: url1,
            alt: "EVCH Finder",
            demoUrl: "https://alibahrami633.github.io/EVCS-Finder/",
            repoUrl: "https://github.com/alibahrami633/EVCS-Finder",
            description: "Using this application, the user can find the nearest electric vehicle charging station. It is simply implemented with HTML, CSS, JavaScript."
        },
        {
            headTitle: "Workday Scheduler",
            imageUrl: url2,
            alt: "Workday Scheduler",
            demoUrl: "https://alibahrami633.github.io/WorkdayScheduler/",
            repoUrl: "https://github.com/alibahrami633/WorkdayScheduler",
            description: "Workday Scheduler is a front- end application the can be used as a daily task / note taker.The user can add their notes for each day of the week.The application can be extended to cover all days of a year."
        },
        {
            headTitle: "Weather Dashboard",
            imageUrl: url3,
            alt: "Weather Dashboard",
            demoUrl: "https://alibahrami633.github.io/WeatherDashboard/",
            repoUrl: "https://github.com/alibahrami633/WeatherDashboard",
            description: "Weather Dashboard is a front-end application that uses a RESTful API to show the weather forecast for a few days to the user based on their searched city name. It also saves the user search on local storage of the user."
        },
        {
            headTitle: "Fitness Tracker",
            imageUrl: url4,
            alt: "Fitness Tracker",
            demoUrl: "https://fitness-memo.herokuapp.com/",
            repoUrl: "https://github.com/alibahrami633/Fitness-Tracker",
            description: "This application lets users to track their daily workouts and exercises. It also shows the statistics of the workouts using charts in stats page."
        },
        {
            headTitle: "Employee Directory",
            imageUrl: url5,
            alt: "Employee Directory",
            demoUrl: "https://alibahrami633.github.io/employee-directory/",
            repoUrl: "https://github.com/alibahrami633/employee-directory",
            description: "Employee Directory Access created by ReactJS. The user can have access to the list of employees and filter/change the order of the list by typing their name letters."
        },
        {
            headTitle: "Cryptofolio",
            imageUrl: url6,
            alt: "Cryptofolio",
            demoUrl: "https://cryptofolio-project.herokuapp.com/",
            repoUrl: "https://github.com/mohamedzakigithub/cryptofolio",
            description: "A full stack cryptocurrency market place where users can signup, login, and use the dashboard to manage their posts to the main page."
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
                        <Project projectInfo={projects[4]} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Project projectInfo={projects[1]} />
                    </Col>
                    <Col size="md-6">
                        <Project projectInfo={projects[2]} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Project projectInfo={projects[3]} />
                    </Col>
                    <Col size="md-6">
                        <Project projectInfo={projects[5]} />
                    </Col>
                </Row>
            </Maincontent>
        </Container>
    );
}

export default Portfolio;