import React from "react";

// Toggle the color
function toggle(color) {
  return color === "blue" ? "red" : "blue";
}

// User Button
function ChangeColorButton(props) {
  const handleOnClick = () => {
    props.setColor(toggle(props.color));
    props.setCount(props.count + 1);
  };

  return <button onClick={handleOnClick}>Click me React</button>;
}

export default ChangeColorButton;

// // User Button (old)
// function UserActions(props) {
//   return (
//     <button
//       onClick={() => {
//         props.setColor(toggle(props.color));
//         props.setCount(props.count + 1);
//       }}
//     >
//       Click me React
//     </button>
//   );
// }
