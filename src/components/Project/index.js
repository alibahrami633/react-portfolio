import React from "react";
import "./style.css";

function Project({ projectInfo }) {
    return (
        <>
            <div className="window-mode">
                <h5>{projectInfo.headTitle}</h5>
                <div className="portfolio">
                    <img className="portfolio-image" src={projectInfo.imageUrl} alt={projectInfo.alt} />
                </div>
                <div className="project-links">
                    <h6>Project Description</h6>
                    <p>{projectInfo.description}</p>
                    <h6>Project Links</h6>
                    <a href={projectInfo.demoUrl} target="_blank" rel="noopener noreferrer">Demo </a>|
                    <a href={projectInfo.repoUrl} target="_blank" rel="noopener noreferrer"> Github</a>
                </div>
            </div>
        </>
    );
}

export default Project;