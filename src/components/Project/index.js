import React from "react";
import "./style.css";

function Project({ projectInfo }) {
    console.log(projectInfo)
    return (
        <>
            <div className="window-mode">
                <h5>{projectInfo.headTitle}</h5>
                <img className="portfolio-image" src={projectInfo.imageUrl} alt={projectInfo.alt} />
                <div className="project-links">
                    <a href={projectInfo.demoUrl} target="_blank">Demo | </a>
                    <a href={projectInfo.repoUrl} target="_blank">Github</a>
                </div>
            </div>
        </>
    );
}

export default Project;