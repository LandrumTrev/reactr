// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React from "react";
import "./style.css";

function Jumbo(props) {
  return (
    <header className="jumbotron">
      <div className="container">
        <h1 className="display-4">Reactr</h1>
        <h4 className="font-weight-light">Test your memory. Click on each element only once.</h4>
      </div>
    </header>
  );
}

export default Jumbo;
