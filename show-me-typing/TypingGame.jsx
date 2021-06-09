import React from "react";
import Game from "./components/Game";
import Ranking from "./components/Ranking";

const TypingGame = () => {
  return (
    <div>
      <h1>SHOW ME YOUR TYPING!</h1>
      <Ranking />
      <Game />
    </div>
  );
};

export default TypingGame;
