import React from "react";
import "./style.css";

function Pageheader(props) {
    return (
        <div className="page-header">
            <h3>{props.children}</h3>
        </div>
    );
}

export default Pageheader;

