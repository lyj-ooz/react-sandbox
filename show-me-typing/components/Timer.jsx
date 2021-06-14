import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState("10");
  const intervalRef = useRef(null);

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);

    return {
      total,
      seconds,
    };
  }

  function startTimer(deadline) {
    let { total, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(seconds);
    } else if (total < 0) {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime) {
    setTimer("10");

    if (intervalRef.current) clearInterval(intervalRef.current);

    const interval = setInterval(() => {
      startTimer(endtime);
    }, 1000);

    intervalRef.current = interval;
  }

  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function onClickResetBtn() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    clearTimer(getDeadlineTime());
  }

  return <div className="game-time">{timer}</div>;
};

export default Timer;
