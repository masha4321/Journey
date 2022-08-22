import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Questionnaire from "./pages/Questionnaire";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import "./App.css";
import PersonalQuestionnaire from "pages/PersonalQuestionnaire";
import Admin from "pages/Admin";

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter
  const body = document.body;
  body.classList.add("light");

  return (
    <div>
      <LoggedInContext.Provider value={loggedInValueToProvide}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="personalQuestionnaire"
              element={<PersonalQuestionnaire />}
            />
            <Route path="questionnaire" element={<Questionnaire />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route
              path="dashboard"
              element={isLoggedIn ? <Dashboard /> : <Login />}
            />
          </Route>
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
