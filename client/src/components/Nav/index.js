import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav className="nav justify-content-end">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/projects">
        Projects
      </Link>
    </nav>
  );
}

export default Nav;
