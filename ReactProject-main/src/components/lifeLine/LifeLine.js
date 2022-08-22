import React from "react";
import { Button } from "@mui/material";

function LifeLine() {
  return (
    <>
      <Button
        href="https://www.canada.ca/en/health-canada/services/substance-use/get-help-problematic-substance-use.html#wb-auto-4"
        sx={{
          fontFamily: "Lato",
          fontSize: "15px",

          background: "red",
          borderRadius: "25px",
          border: "#5A5373 1px",
          marginRight: "50px",
          marginLeft: "20px",
          height: "50px",
          width: "100px",
        }}
      >
        LIFE LINE
      </Button>
    </>
  );
}

export default LifeLine;
