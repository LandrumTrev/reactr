// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="credits">
        Reactr :: a memory game built with React
      </div>
    </footer>
  );
}

export default Footer;
