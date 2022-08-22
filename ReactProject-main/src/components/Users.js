import React, { useState } from "react";
import User from "../components/User";
import EditUser from "../components/EditUser";

function Users({ users, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleUserUpdate(updatedUser) {
    setIsEditing(false);
    onUpdateUser(updatedUser);
  }

  // capture user input in edit form inputs
  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  function changeEditState(user) {
    if (user._id === editForm._id) {
      setIsEditing((isEditing) => !isEditing); // hides the form
    } else if (isEditing === false) {
      setIsEditing((isEditing) => !isEditing); // shows the form
    }
  }

  function captureEdit(clickedUser) {
    let filtered = users.filter((user) => user._id === clickedUser._id);
    setEditForm(filtered[0]);
  }
  return (
    <div>
      {isEditing ? (
        <EditUser
          editForm={editForm}
          handleChange={handleChange}
          handleUserUpdate={handleUserUpdate}
        />
      ) : null}
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* iterate through the users array and render a unique User component for each user object in the array */}
          {users.map((user) => (
            <User
              key={user._id}
              user={user}
              captureEdit={captureEdit}
              changeEditState={changeEditState}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
