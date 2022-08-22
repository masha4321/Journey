import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../App";
import { Container, Typography, Box } from "@mui/material";

const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url + "/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success ? navigate("dashboard") : alert(JSON.stringify(json.msg));
        json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
      });
  };

  return (
    <div className="signInPage">
      <Container component="main" className="loginForm" maxWidth="xs">
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
            Continue Your Journey
          </Typography>
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              placeholder="Email"
              type="text"
              ref={email}
              required
            />

            <input
              placeholder="Password"
              id="password"
              type="password"
              ref={password}
              required
            />
            <button id="signInBtn" type="submit">
              Sign In
            </button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default LoginForm;
