import React, { useRef } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import "../pages/login/login.css";

const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

function RegisterForm() {
  //testing
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  // let cardioExercise = sessionStorage.getItem("cardioExercise");
  // let relaxationExercise = sessionStorage.getItem("relaxationExercise");
  // let strengthExercise = sessionStorage.getItem("strengthExercise");
  // let stretchingExercise = sessionStorage.getItem("stretchingExercise");
  // let memeExercise = sessionStorage.getItem("memeExercise");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url + "/users/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) =>
        json.success
          ? alert("You're Registered!!!")
          : alert(JSON.stringify(json.msg))
      );
  };

  return (
    <div className="homePage">
      <Container component="main" className="registrationForm" maxWidth="xs">
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
          <Grid container spacing={1} sx={{ p: 1, m: 1, textAlign: "center" }}>
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
  );
}

export default RegisterForm;
