import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import "./rightbar.css";

function RightBar() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);
  let fetchQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  return (
    <>
      <Box className="box" flex={2} p={2}>
        <h2 className="quote-header">Quotes</h2>
        <h3 className="quote-body">{quote}</h3>
        <p className="author">-{author}-</p>
        <Button
          sx={{
            fontFamily: "Lato",
            fontSize: "15px",
            padding: "10px 50px 10px 50px",
            background: "#EDB694",
            borderRadius: "25px",
            border: "#5A5373 1px",
            color: "white",
          }}
          onClick={fetchQuote}
        >
          Tired of This Quote?
        </Button>
      </Box>
    </>
  );
}

export default RightBar;
