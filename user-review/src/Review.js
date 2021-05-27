import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function showNext() {
    let newIndex = index;

    // newIndex === people.length - 1 ? (newIndex = 0) : (newIndex += 1);

    // setIndex(newIndex);
    setIndex(checkNum(newIndex++));
  }

  function showPrev() {
    let newIndex = index;

    // newIndex === 0 ? (newIndex = people.length - 1) : (newIndex -= 1);

    // setIndex(newIndex);
    setIndex(checkNum(newIndex--));
  }

  function getRandom() {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum -= 1;
    }
    setIndex(checkNum(randomNum));
  }

  function checkNum(num) {
    if (num < 0) {
      return people.length - 1;
    }

    if (num > people.length - 1) {
      return 0;
    }

    return num;
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={showPrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={showNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandom}>
        Get Random
      </button>
    </article>
  );
};

export default Review;
