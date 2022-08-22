import React from "react";

function Calender(props) {
  return (
    <div>
      <p style={{ textAlign: "center", fontSize: "28px" }}>{props.date}</p>
    </div>
  );
}

export default Calender;
