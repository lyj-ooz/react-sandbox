import React from "react";
import Title from "./components/Title";
import Game from "./components/Game";
import Ranking from "./components/Ranking";
import "./TypingGame.css";

const TypingGame = () => {
  return (
    <div id="container">
      <Title />
      <div id="content-container">
        <Ranking />
        <Game />
      </div>
    </div>
  );
};

export default TypingGame;
