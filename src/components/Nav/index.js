import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../Grid";
import "./style.css";
import aliImageUrl from "../../images/pic-ali.jpg";

function Nav() {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <div className="navbar-header">
          <img src={aliImageUrl} alt="Ali Bahrami" />
          <a href="/home" className="navbar-brand">Ali Bahrami</a>
        </div>
        <div>
          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link"
                  activeClassName="nav-link active"
                >
                  Home
            </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className="nav-link"
                  activeClassName="nav-link active"
                >
                  Portfolio
            </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
            </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
