import React, { useState } from "react";

export default function Question({ title, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="question">
      <h2>{title}</h2>
      {showAnswer && <p className="answer">{answer}</p>}
      <button
        className="btn"
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        {showAnswer ? "-" : "+"}
      </button>
    </article>
  );
}
