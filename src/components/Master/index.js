// Master component collects and render all sub-components
// Master is imported into and rendered by App.js

import React, { Component } from "react";

// import all subcomponents
import NavBar from "../NavBar";
import Jumbo from "../Jumbo";
import GameBox from "../GameBox";
import Footer from "../Footer";

// import data objects array JSON
import data from "../../data.json";
import GamePiece from "../GamePiece";

// ==========================================

class Master extends Component {
  state = {
    data,
    score: 0,
    highScore: 0
  };

  render() {
    return (
      <div>
        <NavBar />
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
