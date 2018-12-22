// GameBox component holds GamePiece children components
// Imported into and rendered by Master component

import React from "react";
import "./style.css";

function GameBox(props) {
  return <main className="container">{props.children}</main>;
}

export default GameBox;
