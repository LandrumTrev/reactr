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
    <nav className="navbar fixed-top">
      {/* <div className="container pb-0"> */}
        <ul>
          <li className="display-message">
            {/* pass NavStatus props from Master: score and highScore */}
            <NavStatus score={props.score} highScore={props.highScore} />
          </li>
          <li className="display-score">
            {/* also use props: score and highScore here for direct display */}
            <span class="high-score">{props.highScore} HIGH SCORE </span> • <span class="current-score"> CURRENT SCORE  {props.score}</span>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
