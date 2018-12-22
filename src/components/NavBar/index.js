// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React from "react";
import NavStatus from "../NavStatus";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Reactr</a>
        </li>
        <NavStatus />
        <li>Score + highScore</li>
      </ul>
    </nav>
  );
}

export default NavBar;
