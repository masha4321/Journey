import React from "react";
import DbData from "../components/DbData";
import LoginForm from "../components/LoginForm";
import Main from "../components/Main";
import RegisterForm from "../components/RegisterForm";
import Header from "components/Header";
import "./home.css";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../App";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  return (
    <>
      <div className="homePage">
        {isLoggedIn ? (
          <>
            <h1>Welcome back to your Journey!</h1>
            <div className="startJourney">
              <button id="startJourneyButton">
                <Link to="/dashboard"> Continue your Journey </Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>Discover The Benefits Of Our Wellness Planner</h1>
            <div className="startJourney">
              <button id="startJourneyButton">
                <Link to="/questionnaire"> Start Your Journey </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
