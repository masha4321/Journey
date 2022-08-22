import React from "react";
import { Link } from "react-router-dom";
// import HomeButton from "./HomeButton";
import "../Header.css";
// import NavButton from "./NavButton";
// import { LoggedInContext } from "../App";
// import LogoutButton from "./LogoutButton";

function HeaderDashboard() {
  //const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

  return (
    <>
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Title">
            <Link to="/"> Journey </Link>{" "}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderDashboard;
