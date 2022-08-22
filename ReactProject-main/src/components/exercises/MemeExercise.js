import React, { useState } from "react";
import "./ExerciseList.css";

function MemeExercise() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStart = () => {
    setIsActive(true);

    setCounter((counter) => counter + 1);
  };

  const handleFinish = () => {
    if (counter >= 1) {
      setIsActive(false);
      setIsCompleted(true);
    } else {
      alert("You haven't finished yet!");
    }
  };

  return (
    <div>
      <br />
      <h2>Look at a funny meme to brighten your day!</h2>
      <br />
      <div>
        {isActive ? (
          <p>
            <img
              src={require("./memes/" +
                Math.floor(Math.random() * 20) +
                ".jpg")}
              alt="meme"
              className="centered"
            />
          </p>
        ) : (
          <p></p>
        )}
        {!isCompleted ? (
          <div>
            <br />
            <button className={"btn1"} onClick={handleStart}>
              Next meme
            </button>
            <button
              className={"btn1"}
              onClick={handleFinish}
              disabled={!isActive}
            >
              Finish Exercise
            </button>
          </div>
        ) : (
          <p className="completed">Exercise completed ✓</p>
        )}
        <br />
      </div>
    </div>
  );
}

export default MemeExercise;
