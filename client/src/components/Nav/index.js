import React from "react";
import { useHistory } from "react-router-dom";
import './index.css';

function Nav() {

  const history = useHistory();

  return (
    <ul className="nav justify-content-center">
      <li>
        <Link className="nav-link" onClick={() => {
          history.push("/")
          }}>
          About
      </Link>
      </li>
      <li>
      <Link className="nav-link" onClick={() => {
          history.push("/projects")
          }}>
          Projects
      </Link>
      </li>
    </ul>
  );
}

export default Nav;
