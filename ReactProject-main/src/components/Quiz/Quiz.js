import React, { useState, useRef } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

function Quiz() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const questions = [
    {
      questionText: "Do you feel tired and lacking energy?",
      answerOptions: [
        { answerText: "Yes", cardioExercise: true },
        { answerText: "No", cardioExercise: false },
      ],
    },
    {
      questionText: "Do you often find your stress to be overwhelming?",
      answerOptions: [
        { answerText: "Yes", relaxationExercise: true },
        { answerText: "No", relaxationExercise: false },
      ],
    },
    {
      questionText: "Do you wish to be physically stronger?",
      answerOptions: [
        { answerText: "Yes", strengthExercise: true },
        { answerText: "No", strengthExercise: false },
      ],
    },
    {
      questionText: "Does your body often feels stiff?",
      answerOptions: [
        { answerText: "Yes", stretchingExercise: true },
        { answerText: "No", stretchingExercise: false },
      ],
    },
    {
      questionText: "Do you wish to have more joy in your life?",
      answerOptions: [
        { answerText: "Yes", memeExercise: true },
        { answerText: "No", memeExercise: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);

  const handleAnswerOptionClick = (
    cardioExercise,
    relaxationExercise,
    strengthExercise,
    stretchingExercise,
    memeExercise
  ) => {
    if (cardioExercise) {
      sessionStorage.setItem("cardioExercise", "true");
    } else {
      sessionStorage.setItem("cardioExercise", "false");
    }
    if (relaxationExercise) {
      sessionStorage.setItem("relaxationExercise", "true");
    } else {
      sessionStorage.setItem("relaxationExercise", "false");
    }
    if (strengthExercise) {
      sessionStorage.setItem("strengthExercise", "true");
    } else {
      sessionStorage.setItem("strengthExercise", "false");
    }
    if (stretchingExercise) {
      sessionStorage.setItem("stretchingExercise", "true");
    } else {
      sessionStorage.setItem("stretchingExercise", "false");
    }
    if (memeExercise) {
      sessionStorage.setItem("memeExercise", "true");
    } else {
      sessionStorage.setItem("memeExercise", "false");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url + "/users/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        cardioExercise: sessionStorage.getItem("cardioExercise"),
        relaxationExercise: sessionStorage.getItem("relaxationExercise"),
        strengthExercise: sessionStorage.getItem("strengthExercise"),
        stretchingExercise: sessionStorage.getItem("stretchingExercise"),
        memeExercise: sessionStorage.getItem("memeExercise"),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) =>
        json.success
          ? alert("You've been registered successfully.")
          : alert(JSON.stringify(json.msg))
      );
  };

  return (
    <div className="quiz">
      {showResult ? (
        <>
          <div className="homePage">
            <Container
              component="main"
              className="registrationForm"
              maxWidth="xs"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(90, 83, 115,0.25)",
                  backdropFilter: "blur(10px)",
                  borderColor: "secondary.main",
                  borderRadius: "16px",
                }}
              >
                <Typography
                  align="center"
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    fontFamily: "Satisfy",
                    textAlign: "center",
                    fontWeight: "semi-bold",
                    fontFamily: "Satisfy",
                    color: "white",
                    m: 3,
                  }}
                >
                  Register
                </Typography>
                <Grid
                  container
                  spacing={1}
                  sx={{ p: 1, m: 1, textAlign: "center" }}
                >
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        ref={firstName}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        ref={lastName}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <input
                        id="email"
                        type="text"
                        placeholder="email"
                        ref={email}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <input
                        id="password"
                        type="password"
                        placeholder="password"
                        ref={password}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        ref={confirmPassword}
                        required
                      />
                    </Grid>
                    <button id="signInBtn" type="submit">
                      Submit
                    </button>
                  </form>
                </Grid>
              </Box>
            </Container>
          </div>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(90, 83, 115,0.25)",
              backdropFilter: "blur(10px)",
              borderColor: "secondary.main",
              borderRadius: "16px",
            }}
          >
            <Typography
              align="center"
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                fontFamily: "Satisfy",
                textAlign: "center",
                fontWeight: "semi-bold",
                fontFamily: "Satisfy",
                color: "white",
                m: 3,
              }}
            >
              Please answer the following questions:
            </Typography>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  id="yesNoBtn"
                  onClick={() =>
                    handleAnswerOptionClick(
                      answerOption.cardioExercise,
                      answerOption.relaxationExercise,
                      answerOption.strengthExercise,
                      answerOption.stretchingExercise,
                      answerOption.memeExercise
                    )
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </Box>
        </>
      )}
    </div>
  );
}

export default Quiz;
