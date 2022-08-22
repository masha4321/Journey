import React from "react";

/* Function that will make an API call to get all users, and then pop-up an alert with the results. */
function callGetAll() {
  fetch("http://localhost:3001/users", { method: "GET" })
    .then((data) => data.json())
    .then((json) => console.log(JSON.stringify(json)));
}

function callPostBody() {
  fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify({
      username: "thussain",
      password: "124",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callGetQuery() {
  fetch("http://localhost:3001/user?username=thussain", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callGetParams() {
  fetch("http://localhost:3001/users/thussain", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callPutBody() {
  fetch("http://localhost:3001/users", {
    method: "PUT",
    body: JSON.stringify({
      username: "thussain",
      password: "125",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callPatchBodyUsername() {
  fetch("http://localhost:3001/users/thussain/password", {
    method: "PATCH",
    body: JSON.stringify({
      password: "126",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callDeleteParams() {
  fetch("http://localhost:3001/users/thussain", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function DbData() {
  return (
    <>
      <button onClick={callGetAll}>Get all users</button>
      <button onClick={callPostBody}>Post</button>
      <button onClick={callGetQuery}>Query</button>
      <button onClick={callGetParams}>Params</button>
      <button onClick={callPutBody}>Put</button>
      <button onClick={callPatchBodyUsername}>Patch</button>
      <button onClick={callDeleteParams}>Delete</button>
    </>
  );
}

export default DbData;
