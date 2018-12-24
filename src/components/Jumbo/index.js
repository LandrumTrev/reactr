// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React from "react";
import "./style.css";

function Jumbo(props) {
  return (
    <header className="jumbotron">
      <div className="container pb-0">
        <h1 className="font-weight-light mb-0">reactr</h1>
      </div>
      <div className="container pb-0">
        <h4 className="font-weight-light">Test&nbsp;your&nbsp;memory. Click&nbsp;on&nbsp;each&nbsp;element&nbsp;only&nbsp;once.</h4>
      </div>
    </header>
  );
}

export default Jumbo;
