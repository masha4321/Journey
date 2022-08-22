import React, { useEffect, useState } from "react";
import Users from "../components/Users";

const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url + "/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function onUpdateUser(updatedUser) {
    const updatedUsers = users.map((user) => {
      if (user._id === updatedUser._id) {
        return updatedUser;
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  }

  return (
    <div className="users">
      <Users users={users} onUpdateUser={onUpdateUser} />
    </div>
  );
};

export default AsyncAwait;
