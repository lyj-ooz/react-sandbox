import React, { useEffect, useState } from "react";
import "./Ranking.css";

const sortArr = (arr) => {
  console.log("sortArr !!!");
  return arr.sort((a, c) => c.score - a.score);
};

const Ranking = ({ updateRanking }) => {
  console.log("Ranking 컴포넌트!!!");

  const [scores, setScores] = useState([]);

  const getScores = async () => {
    console.log("getScores!!!");

    try {
      const res = await fetch("/api/scores");
      const data = await res.json();
      setScores(sortArr(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getScores();
  }, [updateRanking]);

  return (
    <div className="ranking-container">
      <div className="outline">
        <div className="ranking-title">RANKING</div>
        <ul className="ranking-list">
          {scores.map(({ score, username, _id }) => {
            return (
              <li key={_id}>
                <span className="ranking-person">{username}</span>
                <span className="ranking-score">{score}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Ranking;
