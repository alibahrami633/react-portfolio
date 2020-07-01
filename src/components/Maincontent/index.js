import React from "react";
import "./style.css";

function Maincontent(props) {
    return (
        <div className="page-header col-md-12">
            {props.children}
        </div>
    );
}

export default Maincontent;