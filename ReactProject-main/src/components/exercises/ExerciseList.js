import React, { useState } from "react";
import { Box } from "@mui/material";
import RelaxationExercise from "./RelaxationExercise";
import CardioExercise from "./CardioExercise";
import MemeExercise from "./MemeExercise";
import "./ExerciseList.css";
import StrengthExercise from "./StrengthExercise";
import StretchExercise from "./StretchExercise";
import { display } from "@mui/system";
import Quiz from "components/Quiz/RegistrationQuiz";
import PersonalQuiz from "components/Quiz/PersonalQuiz";
import { Link } from "react-router-dom";

function ExerciseList() {
  const [displayQuiz, setDisplayQuiz] = useState(false);
  const [displayCardio, setDisplayCardio] = useState(false);
  const [displayStrength, setDisplayStrength] = useState(false);
  const [displayStretch, setDisplayStretch] = useState(false);
  const [displayRelaxation, setDisplayRelaxation] = useState(false);
  const [displayMeme, setDisplayMeme] = useState(false);

  const dailyActivities = () => {
    if (JSON.parse(localStorage.getItem("memeExercise")) === "true") {
      setDisplayMeme(true);
    }
    if (JSON.parse(localStorage.getItem("strengthExercise")) === "true") {
      setDisplayStrength(true);
    }
    if (JSON.parse(localStorage.getItem("cardioExercise")) === "true") {
      setDisplayCardio(true);
    }
    if (JSON.parse(localStorage.getItem("stretchingExercise")) === "true") {
      setDisplayStretch(true);
    }
    if (JSON.parse(localStorage.getItem("relaxationExercise")) === "true") {
      setDisplayRelaxation(true);
    }
  };

  const handleQuiz = () => {
    localStorage.setItem("cardioExercise", "false");
    localStorage.setItem("relaxationExercise", "false");
    localStorage.setItem("strengthExercise", "false");
    localStorage.setItem("memeExercise", "false");
    localStorage.setItem("stretchingExercise", "false");
    setDisplayQuiz(true);
  };

  return (
    <>
      <Box
        className="box"
        bgcolor="#f8d6c5"
        color="black"
        flex={4}
        p={2}
        sx={{
          borderRadius: "16px",
        }}
      >
        {displayQuiz ? (
          <>
            <br />
            <br />
            <br />
            <Link
              to="/personalQuestionnaire"
              className="personalQuizLink"
              style={{
                textAlign: "center",
                fontFamily: "Satisfy",
                fontSize: "50px",
                color: "black",
                fontSize: "40px",
                color: "white",
                margin: "5px",
                width: "100%",
                border: "3px solid white",
                border: "none",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(90, 83, 115,0)",
              }}
            >
              Click here to redo the quiz!
            </Link>
          </>
        ) : (
          <>
            <br />
            <br />
            <br />
            <button
              className="daily-header"
              style={{
                textAlign: "center",
                fontFamily: "Satisfy",
                fontSize: "50px",
                color: "white",
                margin: "5px",
                width: "100%",
                border: "0px solid white",
                padding: "10px",
                backgroundColor: "rgba(90, 83, 115,0)",
              }}
              onClick={dailyActivities}
            >
              Daily Tasks
            </button>
            {displayMeme ? (
              <>
                <MemeExercise />
                <br />
                <br />
              </>
            ) : (
              <></>
            )}
            {displayStrength ? (
              <>
                <StrengthExercise />
                <br />
                <br />
              </>
            ) : (
              <></>
            )}
            {displayCardio ? (
              <>
                <CardioExercise />
                <br />
                <br />
              </>
            ) : (
              <></>
            )}
            {displayRelaxation ? (
              <>
                <RelaxationExercise />
                <br />
                <br />
              </>
            ) : (
              <></>
            )}
            {displayStretch ? (
              <>
                <StretchExercise />
                <br />
                <br />
              </>
            ) : (
              <></>
            )}
          </>
        )}
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <button
          onClick={handleQuiz}
          className="redoQuizBtn"
          style={{
            textAlign: "center",
            fontFamily: "Satisfy",

            color: "white",
            margin: "5px",
            width: "100%",
            border: "none",
            fontSize: "35px",
            backgroundColor: "rgba(90, 83, 115,0)",
          }}
        >
          Reset activities
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
}

export default ExerciseList;
