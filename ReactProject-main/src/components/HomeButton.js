import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// import Button from "react-bootstrap/Button";

function HomeButton() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      <Button variant="contained" onClick={handleSubmit}>
        Home
      </Button>
    </div>
  );
}

export default HomeButton;
