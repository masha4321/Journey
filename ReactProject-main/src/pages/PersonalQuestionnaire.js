import React from "react";
import DbData from "../components/DbData";
import LoginForm from "../components/LoginForm";
import Main from "../components/Main";
import RegisterForm from "../components/RegisterForm";
import Header from "components/Header";
import "./Questionnaire.css";
import { Link } from "react-router-dom";
import Quiz from "components/Quiz/PersonalQuiz";

function PersonalQuestionnaire() {
  return (
    <>
      <div className="homePage">
        <Quiz />
      </div>
    </>
  );
}

export default PersonalQuestionnaire;
