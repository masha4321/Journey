import React, { useState } from "react";
import { Link } from "react-router-dom";

function PersonalQuiz() {
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

  const valueTrue = "true";
  const valueFalse = "false";
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
      localStorage.setItem("cardioExercise", JSON.stringify(valueTrue));
    }
    if (relaxationExercise) {
      localStorage.setItem("relaxationExercise", JSON.stringify(valueTrue));
    }
    if (strengthExercise) {
      localStorage.setItem("strengthExercise", JSON.stringify(valueTrue));
    }
    if (stretchingExercise) {
      localStorage.setItem("stretchingExercise", JSON.stringify(valueTrue));
    }
    if (memeExercise) {
      localStorage.setItem("memeExercise", JSON.stringify(valueTrue));
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };
  return (
    <div className="quiz">
      {showResult ? (
        <>
          <div className="result-section">Thank you very much!</div>
          <button className="complete-registration">
            <Link to="/dashboard"> Back to dashboard </Link>{" "}
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default PersonalQuiz;
