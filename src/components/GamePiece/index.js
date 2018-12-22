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
      // event handler with value of an anon arrow function
      // which passes in this GamePiece's id as the arg to
      // the handleGamePieceClick() function of Master component
      // assigned as handleClick={this.handleGamePieceClick} to each GamePiece 
      onClick={() => props.handleClick(props.id)}
      // each GamePiece pulls it's bkgd image from the image: property
      // of it's map()ped data array element, which is a path
      // to a public/assets/images/gp-number.jpg
      style={{ backgroundImage: `url('${props.image}')` }} 
      className={`game-piece${props.shake ? " shake" : ""}`}
      // className='game-piece shake'
    />
  );
}

export default GamePiece;
