import React, { useState, useRef } from "react";
import "./ExerciseList.css";
import stretching from "./gifs/Stretching.jpg";

function StretchExercise() {
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
    if (timer >= 120) {
      clearInterval(increment.current);
      setIsPaused(true);
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
      <h2>Practice the following stretches for 2 minutes</h2>

      {!isCompleted ? (
        <div>
          <br />
          {isActive ? (
            <>
              <img src={stretching} alt="cardio" className="centered" />
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
              Finished stretching!
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

export default StretchExercise;
