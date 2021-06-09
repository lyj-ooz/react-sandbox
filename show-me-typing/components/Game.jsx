import React from "react";

const Game = () => {
  return (
    <div className="game-container">
      <div className="time">10</div>
      <div className="word">Apple</div>
      <input type="text" />
      <button>Start Game</button>
      <div className="score">
        Score: <span>300</span>
      </div>
    </div>
  );
};

export default Game;
