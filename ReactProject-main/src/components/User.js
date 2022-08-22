import React from "react";

const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

// deconstructed props
function User({
  user,
  user: { _id, firstName, lastName, email },
  captureEdit,
  changeEditState,
}) {
  function handleDelete() {
    fetch(url + `/users/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <tr key={_id}>
      <td>{_id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <button
          id="editBtn"
          onClick={() => {
            captureEdit(user);
            changeEditState(user);
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          id="deleteBtn"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default User;
