// NavStatus component renders info message about correct/incorrect guess
// Imported into and rendered by NavBar component

// import React.Component with React in order to use local state data
import React, { Component } from "react";
import "./style.css";

// NavStatus renders a message to user about correct/incorrect guess.
// Props score and highScore from Master state are passed into NavStatus
// when NavStatus is rendered by NavBar:
// <NavStatus score={props.score} highScore={props.highScore} />
class NavStatus extends Component {
  // ==================================================

  state = {
    message: "",
    animating: false
  };

  // ==================================================

  // React documentation:
  // componentDidUpdate(prevProps, prevState, snapshot)

  // Typical usage (don't forget to compare props):
  // componentDidUpdate(prevProps) {
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  // ==================================================

  // this component updates when Master's score and/or highScore update,
  // which causes NavBar to update, which then causes NavStatus to update.
  // So, on NavStatus update, pass in score and highScore props that are
  // passed down from Master > NavBar > NavStatus, as (prevProps)

  // pass in prevProps: score and highScore from Master > NavBar > NavStatus
  componentDidUpdate({ score, highScore }) {
    // create an object to hold all new state values to be set, and
    // give it an initial property that changes animating: from false to true
    // since we will always CSS animate it on any/all state changes
    const newState = { animating: true };

    // if no game play at all has occured,
    if (score === 0 && highScore === 0) {
      // then set a message: state value of '' (which will print a message)
      // message: is not the actual message displayed, but instead
      // are values used by a switch/case below to create the message text
      newState.message = "";
      // OR, if beginning of a new game, but previous game(s) have been played,
    } else if (score === 0 && highScore > 0) {
      // this means the user chose incorrectly and the game has been reset
      // so set message: value to 'incorrect' to show the corresponding message
      newState.message = "incorrect";
      // otherwise the user must have chosen correctly if score !== 0
    } else {
      // so show set message: to 'correct' to show the corresponding text
      newState.message = "correct";
    }

    // then, after composing new state values to set based on conditions above,
    // IF score (prevProps) does not match the current value of props.score,
    // OR IF the current value of state.message doesn't match the newState.message
    // just set above, THEN tell React to update this component's state with
    // the new animating: and message: values set in the newState object above
    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }
  // ==================================================

  // renderMessage() determines message text displayed by this component
  // based on the value of this.state.message set by componentDidUpdate()
  renderMessage = () => {
    // create a switch/case conditional to determine the output text
    // the switch to test is the value of this.state.message
    switch (this.state.message) {
      case "correct":
        return "You guessed wisely.";
      case "incorrect":
        return "You guessed incorrectly.";
      default:
        return "Click a glyph to begin.";
    }
  };

  // ==================================================

  render() {
    return (
      <li
        // IF animating: true, then className="correct" OR className="correct",
        // otherwise if animating: false, then className=""
        // .correct and .incorrect trigger discreet CSS animation effects
        className={this.state.animating ? this.state.message : ""}
        // and when the CSS animation ends, reset state.animating: to false
        onAnimationEnd={() => this.setState({ animating: false })}
      >
        {/* immediately invoke renderMessage() to display its message output */}
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavStatus;
