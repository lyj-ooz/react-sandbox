import React, { useState, useEffect, useRef, useMemo, memo } from "react";
import "./Game.css";
import Timer from "./Timer";
import data from "./data";

const shuffleWords = (words) => {
  console.log("shuffleWords !!!");
  const shuffle = [];
  while (words.length > 0) {
    shuffle.push(words.splice(Math.floor(Math.random() * words.length), 1)[0]);
  }
  return shuffle;
};

const Game = memo(() => {
  console.log("Game 컴포넌트 !!");
  const [score, setScore] = useState(0);
  const [isplaying, setIsplaying] = useState(false);
  const [start, setStart] = useState(false);
  const wordlist = useRef(shuffleWords(data));
  const [word, setWord] = useState(wordlist.current[0]);
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    // effect
    // setWordlist(shuffleWords(data));
    // return
  }, []);

  console.log("yay!!", wordlist.current, word);

  const onClickStartBtn = (e) => {
    console.log("start!");
    // 스타트 버튼 누르기 전에는 input에 입력할 수 없음

    // 스타트 버튼 누르면 게임 시작해야 함
    // 스타트 버튼 누르면,
    // 인풋 입력가능(v), 시간 줄어들기(setinterval)(v), 단어 보이기
    setStart(true);

    // 입력한 단어와 보이는 단어가 일치하면
    //   다음 단어, 시간 다시 줄어들기
    // 일치하지 않으면
    //   여태까지의 점수와 유저이름 저장하는 모달? 띄우기

    // 단어는 셔플하고 계속 pop 하기, 다하면 일등이지 뭐
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("onSubmit..!!!");
    if (word === inputValue) {
      console.log("일치합니다");
      showNextWord();
      setInputValue("");
      setRefresh((prev) => prev + 1);
    } else {
      console.log("불일치합니다");
      setStart(false);
      setInputValue("");
    }
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const showNextWord = () => {
    setWord(wordlist.current.pop());
  };

  return (
    <div className="game-container">
      {start && <Timer refresh={refresh} />}
      <div className="game-word">{start ? word : "?????"}</div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          disabled={!start}
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      <button onClick={onClickStartBtn}>Start Game</button>
      <div className="game-score">
        Score: <span>{score}</span>
      </div>
    </div>
  );
});

export default Game;
