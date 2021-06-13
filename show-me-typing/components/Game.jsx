import React from "react";
import "./Game.css";

const Game = () => {
  return (
    <div className="game-container">
      <div className="game-time">10</div>
      <div className="game-word">Apple</div>
      <input type="text" />
      <button>Start Game</button>
      <div className="game-score">
        Score: <span>300</span>
      </div>
    </div>
  );
};

export default Game;
