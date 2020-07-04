import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="fixed-bottom box-shadow-style">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-align">
            <div className="icon-anchor inline-block">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/alibahrami633/" target="_blank" rel="noopener noreferrer">
                LinkedIn
                        </a>
            </div>
            <div className="icon-anchor inline-block">
              <i className="fab fa-github"></i>
              <a href="https://github.com/alibahrami633" target="_blank" rel="noopener noreferrer">
                Github
                        </a>
            </div>
            <div className="icon-anchor inline-block">
              <i className="fab fa-facebook"></i>
              <a href="https://www.facebook.com/ali.bahrami633" target="_blank" rel="noopener noreferrer">
                Facebook
                        </a>
            </div>
            <div className="icon-anchor inline-block">
              <i className="fab fa-twitter"></i>
              <a href="https://twitter.com/AliBahr32339771" target="_blank" rel="noopener noreferrer">
                Twitter
                        </a>
            </div>
          </div>
          <div className="col-md-6 right-align">
            <span>&copy; All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
