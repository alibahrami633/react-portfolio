import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="fixed-bottom box-shadow-style">
      <div class="container">
        <div class="row">
          <div class="col-md-6 left-align">
            <div class="icon-anchor inline-block">
              <i class="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/ali-bahrami-baa87325/" target="_blank">
                LinkedIn
                        </a>
            </div>
            <div class="icon-anchor inline-block">
              <i class="fab fa-github"></i>
              <a href="https://github.com/alibahrami633" target="_blank">
                Github
                        </a>
            </div>
            <div class="icon-anchor inline-block">
              <i class="fab fa-facebook"></i>
              <a href="https://www.facebook.com/ali.bahrami633" target="_blank">
                Facebook
                        </a>
            </div>
            <div class="icon-anchor inline-block">
              <i class="fab fa-twitter"></i>
              <a href="https://twitter.com/AliBahr32339771" target="_blank">
                Twitter
                        </a>
            </div>
          </div>
          <div class="col-md-6 right-align">
            <span>&copy; All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
