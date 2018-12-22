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

  // called on page load / reload when entire Master component first mounts
  componentDidMount() {
    // run current "data" array through shuffleGamePieces() and reset state
    this.setState({ data: this.shuffleGamePieces(this.state.data) });
  }

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

  //
  handleCorrectGuess = dataArrayCopy => {
    // create score and highScore variables by deconstructing this.state
    const { score, highScore } = this.state;
    // create a variable representing new score value (old score + 1)
    const newScore = score + 1;
    // var for newHighScore, checks for highest of newScore vs current highScore
    const newHighScore = Math.max(newScore, highScore);

    // then reset all current state values with updated correct-guess values
    this.setState({
      // after each correct guess, shuffle the position of all GamePieces
      data: this.shuffleGamePieces(dataArrayCopy),
      // and set the new score (score + 1)
      score: newScore,
      // and set the newHighScore, whether changed or not
      highScore: newHighScore
    });
  };

  // -----------
  // helper function:

  // called on componentDidMount(), and afterwards by handleCorrectGuess()
  shuffleGamePieces = data => {
    // set iterator to length of data array minus one
    let i = data.length - 1;
    // a while loop that randomly swaps positions of data array object elements
    while (i > 0) {
      // set j as random number between 1 and iterator i+1
      const j = Math.floor(Math.random() * (i + 1));
      // save the value of the object currently at index data[i]
      const temp = data[i];
      // then replace the object at index data[i] with object at data[j]
      data[i] = data[j];
      // then replace the object at index data[j] with saved data[i] value
      data[j] = temp;
      // now data[i] and data[j] values have been swapped
      // then decrement the iterator to cycle through the array
      i--;
      // NOTE: this cycles through all but the last element of the array,
      // but since j random CAN generate the index of the last array element,
      // it will most likely also be swapped on any given shuffle.
    }
    // then RETURN the new shuffled "data" array as the value of shuffleGamePieces
    return data;
  };

  // ==========================================

  // called by an incorrect guess from handleGamePieceClick()
  // resets and shuffles the data array, resets score to 0
  handleWrongGuess = dataArrayCopy => {
    // tell React to change values of this.state data
    this.setState({
      // run the passed in data array through resetGame()
      // which sets all array items clicked: value to false
      // and also shuffles the index position of all array objects
      // and set reset and shuffled array as the new value of this.state.data
      data: this.resetGame(dataArrayCopy),
      // and also reset the value of this.state.score to 0
      score: 0
    });
  };

  // -----------
  // helper function:

  // called by handleWrongGuess() to reset all GamePieces to clicked: false
  resetGame = data => {
    // create a .map() copy of the data array,
    // callback destructures each array item to isolate it,
    // and sets each array item object's clicked: value to false
    const resetDataArray = data.map(item => ({ ...item, clicked: false }));
    // then pass the reset array through the shuffleGamePieces() function
    // and return the new resetDataArray as the value of this resetGame()
    return this.shuffleGamePieces(resetDataArray);
  };

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
