// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer className="footer fixed-bottom">
      <a className="github-link" href="https://github.com/LandrumTrev/reactr" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <div className="credits">
        <a className="reset-link" href="/">
          <span className="subcredit">reactr</span> :: reset 
        </a>
      </div>
    </footer>
  );
}

export default Footer;
