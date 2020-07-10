import React from "react";
import resumeUrl from "../../assets/documents/AliBahrami-Resume.pdf";
import "./style.css";

function ContactInfo() {
    return (
        <fieldset>
            <legend className="legend">
                <h4>Links</h4>
            </legend>
            <div className="icon-anchor">
                <i className="fas fa-file-pdf"></i>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
            <div className="icon-anchor">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/alibahrami633/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
            <div className="icon-anchor">
                <i className="fab fa-github"></i>
                <a href="https://github.com/alibahrami633" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </div>
            <div className="icon-anchor">
                <i className="fab fa-facebook"></i>
                <a href="https://www.facebook.com/ali.bahrami633" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
            </div>
            <div className="icon-anchor">
                <i className="fab fa-twitter"></i>
                <a href="https://twitter.com/AliBahr32339771" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </div>
            <div className="icon-anchor">
                <i className="fa fa-envelope"></i>
                <a href="mailto: ali.bahrami633@yahoo.com" target="_blank" rel="noopener noreferrer">
                    Email
                </a>
            </div>
        </fieldset>
    );
}

export default ContactInfo;