import React, { useState, useRef } from "react";
import "./ExerciseList.css";

function CardioExercise() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleFinish = () => {
    if (timer >= 1200) {
      clearInterval(increment.current);
      setIsPaused(true);
      setIsActive(true);
      setIsCompleted(true);
    } else {
      alert("You haven't finished yet!");
    }
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const displayTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  return (
    <div>
      <br />
      <h2>Go outside and walk for 20 minutes</h2>
      <br />
      {!isCompleted ? (
        <div>
          {isActive ? (
            <>
              <img
                src={
                  "https://c.tenor.com/tW1WPdFzctAAAAAi/lets-go-outside-exercise.gif"
                }
                alt="cardio"
                className="centered"
              />
              <br />
              <p className="centered">{displayTime()}</p>
            </>
          ) : (
            <p>
              <br />
            </p>
          )}
          <div>
            {!isActive && !isPaused ? (
              <button className={"btn1"} onClick={handleStart}>
                Start
              </button>
            ) : isPaused ? (
              <button className={"btn1"} onClick={handlePause}>
                Pause
              </button>
            ) : (
              <button className={"btn1"} onClick={handleResume}>
                Resume
              </button>
            )}
            <button
              className={"btn1"}
              onClick={handleReset}
              disabled={!isActive}
            >
              Reset
            </button>
            <button
              className={"btn1"}
              onClick={handleFinish}
              disabled={!isActive}
            >
              Finish Exercise
            </button>
          </div>
          <br />
        </div>
      ) : (
        <>
          <br />
          <p className="completed">Exercise completed ✓</p>
        </>
      )}
    </div>
  );
}

export default CardioExercise;
