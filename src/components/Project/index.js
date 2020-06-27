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
                    <a href={projectInfo.demoUrl} target="_blank" rel="noopener noreferrer">Demo </a>|
                    <a href={projectInfo.repoUrl} target="_blank" rel="noopener noreferrer"> Github</a>
                </div>
            </div>
        </>
    );
}

export default Project;