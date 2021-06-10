import React from "react";

const Ranking = () => {
  return (
    <div
      className="ranking-container"
      style={{ backgroundColor: "lightgreen" }}
    >
      <div className="ranking-title">RANKING</div>
      <div className="ranking-list">
        <div className="ranking-people">
          <div className="ranking-person">noname</div>
          <div className="ranking-person">yello123</div>
          <div className="ranking-person">whale000</div>
        </div>
        <div className="ranking-scores">
          <div className="ranking-score">100</div>
          <div className="ranking-score">150</div>
          <div className="ranking-score">783</div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
