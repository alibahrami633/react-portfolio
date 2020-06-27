import React from "react";
import { Row, Col } from "../Grid";

function Project({ projectInfo }) {
    console.log(projectInfo)
    return (
        <>
            <div className="col-md-5 window-mode">
                <h5>{projectInfo.headTitle}</h5>
                <img className="porfolio-image" src={projectInfo.imageUrl} alt={projectInfo.alt} />
                <div className="project-links">
                    <a href={projectInfo.demoUrl} target="_blank">Demo | </a>
                    <a href={projectInfo.repoUrl} target="_blank">Github</a>
                </div>
            </div>
            <div className="col-md-1"></div>
        </>
    );
}

export default Project;