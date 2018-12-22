// GamePiece is the template for individual click items
// Imported into and rendered by Master component
// but held inside GameBox component as {props.children}

import React from "react";
import "./style.css";

function GamePiece(props) {
  return (
    <div 
      // accessibility properties
      role='img' 
      aria-label='game piece' 
      onClick={() => console.log('I was clicked!')}
      style={{ backgroundImage: `url('${props.image}')` }} 
      // className={`game-piece ${props.shake ? "shake" : ""}`}
      className='game-piece shake'
    />
  );
}

export default GamePiece;
