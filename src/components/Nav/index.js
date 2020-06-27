import React from "react";

function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Ali Bahrami
      </a>

      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nave-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nave-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="nave-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Nav;
