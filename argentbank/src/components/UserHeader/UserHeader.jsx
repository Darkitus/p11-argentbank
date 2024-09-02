import "./UserHeader.css";
import React from "react";
import { useSelector } from "react-redux";

const UserHeader = () => {
  const username = useSelector((state) => state.auth.username);
  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {username}
      </h1>
      <button className="edit-button">Edit Name</button>
    </header>
  );
};

export default UserHeader;
