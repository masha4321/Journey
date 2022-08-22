import React from "react";

const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

function EditUser({ editForm, handleUserUpdate, handleChange }) {
  let { _id, firstName, lastName, email } = editForm;

  function handleEditForm(e) {
    e.preventDefault();
    fetch(url + `/users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editForm),
    })
      .then((results) => results.text())
      .then((updatedUser) => {
        handleUserUpdate(updatedUser);
      });
  }

  return (
    <div>
      <h4>Edit User</h4>
      <form onSubmit={handleEditForm}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <input type="text" name="email" value={email} onChange={handleChange} />
        <button id="submitBtn" type="submit">
          Submit Changes
        </button>
      </form>
    </div>
  );
}
export default EditUser;
