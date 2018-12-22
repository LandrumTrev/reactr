// Master component collects and render all sub-components
// Master is imported into and rendered by App.js

// include React.Component on import to use a class with state
import React, { Component } from "react";

// import all sub-components
import NavBar from "../NavBar";
import Jumbo from "../Jumbo";
import GameBox from "../GameBox";
import GamePiece from "../GamePiece";
import Footer from "../Footer";

// import GamePiece data objects array JSON
import data from "../../data.json";

// ==========================================

// Master component is a class with state data
class Master extends Component {
  // ==========================================

  state = {
    data,
    score: 0,
    highScore: 0
  };

  // ==========================================

  // event handler attached to GamePiece handleClick listener
  // id of the GamePiece clicked passed in as the arg to the param id here
  handleGamePieceClick = id => {
    // set guessCorrect false by default, only change if guess if correct
    let guessCorrect = false;
    // .map the current state of the "data" array of GamePiece objects
    const dataArrayCopy = this.state.data.map(item => {
      // use object spread operator to clone each item in map loop
      const newItem = { ...item };
      // if (when) the cloned array item id matches the id passed in by click,
      if (newItem.id === id) {
        // AND IF the matching cloned item's clicked: value is false (unclicked)
        if (!newItem.clicked) {
          // then set the cloned item's clicked value to true (false by default)
          newItem.clicked = true;
          // and change the above guessCorrect value
          guessCorrect = true;
          // these conditions let game play continue
        }
      }
      // then RETURN newItem into the new dataArrayCopy being built by .map()
      return newItem;
    });
    // if a clicked item changed guessCorrect to true, game play will continue
    // otherwise handleWrongGuess will stop the current game and reset
    // pass in dataArrayCopy to either function to update state of data array
    guessCorrect ? this.handleCorrectGuess(dataArrayCopy) : this.handleWrongGuess(dataArrayCopy);
  };

  // ==========================================

  // called by handleGamePieceClick when user clicks an unclicked GamePiece
  handleCorrectGuess = dataArrayCopy => {
    // code
  }



  // ==========================================



  // ==========================================



  // ==========================================

  render() {
    return (
      <div>
        {/* pass score + highScore state as props to NavBar to display */}
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        <Jumbo />
        <GameBox>
          {this.state.data.map(item => (
            <GamePiece
              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.highScore}
              handleClick={this.handleGamePieceClick}
              image={item.image}
            />
          ))}
        </GameBox>
        <Footer />
      </div>
    );
  }
}

// ==========================================

export default Master;
