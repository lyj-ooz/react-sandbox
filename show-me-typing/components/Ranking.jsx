import React from "react";
import "./Ranking.css";

const Ranking = () => {
  return (
    <div className="ranking-container">
      <div className="outline">
        <div className="ranking-title">RANKING</div>
        <ul className="ranking-list">
          <li>
            <span className="ranking-person">happy123</span>
            <span className="ranking-score">34500</span>
          </li>
          <li>
            <span className="ranking-person">test11</span>
            <span className="ranking-score">10000</span>
          </li>
          <li>
            <span className="ranking-person">chocolate1</span>
            <span className="ranking-score">9000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ranking;
