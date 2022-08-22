import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";
import { LoggedInContext } from "../App";
import Calender from "./Calender";
import LifeLine from "./lifeLine/LifeLine";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const DarkMode = React.lazy(() => import("../components/DarkMode/DarkMode"));
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("dashboard");
  };
  const handleSubmit = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Title">
            {isLoggedIn ? (
              <Link to="journey"> Journey </Link>
            ) : (
              <Link to="/"> Journey </Link>
            )}
            <Suspense fallback={<div>Loading...</div>}>
              <DarkMode />
            </Suspense>
          </div>
          <div className="calender">
            <Calender date={new Date().toDateString()} />
          </div>

          <div className="btnsHeader">
            <button className="aboutUsBtn">
              <Link to="/about"> About Us </Link>
            </button>

            {isLoggedIn ? (
              <>
                <button className="loginBtn" onClick={handleNavigate}>
                  Dashboard
                </button>
                <button
                  className="loginBtn"
                  style={{ marginLeft: "20px" }}
                  onClick={handleSubmit}
                >
                  Logout
                </button>
              </>
            ) : (
              <button className="loginBtn">
                <Link to="/login"> Continue Your Journey </Link>
              </button>
            )}
            <LifeLine />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
