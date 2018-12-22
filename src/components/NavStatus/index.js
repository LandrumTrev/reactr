// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React, { Component } from "react";
import "./style.css";

class NavStatus extends Component {
  state = {
    status: "",
    animation: false
  };

  render() {
    return (
      <li className="brand">
        Burly Status Message Here
      </li>
    );
  }
}

export default NavStatus;
