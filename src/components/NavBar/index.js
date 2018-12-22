// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React from "react";
// import NavStatus to display the correct/incorrect answer message
// NavStatus only called from NavBar (here), not directly from Master
import NavStatus from "../NavStatus";
import "./style.css";

// Master passes in props: score and highScore
function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Reactr</a>
        </li>
        {/* pass NavStatus props from Master: score and highScore */}
        <NavStatus score={props.score} highScore={props.highScore} />
        <li>
          {/* also use props: score and highScore here for direct display */}
          score: {props.score} :: high score: {props.highScore}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
