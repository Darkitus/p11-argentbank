import "./UserHeader.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername, fetchUserProfile } from "../../redux/authSlice";

const UserHeader = () => {
  const { username, firstName, lastName } = useSelector((state) => state.auth);
  const [newUsername, setNewUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  // Récupère les informations du profil utilisateur au chargement du composant
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  // Enregistre le nouveau nom d'utilisateur
  const handleSave = () => {
    if (newUsername !== username) {
      dispatch(updateUsername(newUsername)); // Met à jour Redux et localStorage
    }
    setIsEditing(false); // Désactive le mode édition
  };

  return (
    <header className="header">
      <h1>
        {isEditing ? (
          <section>
            <h2 className="header-title">Edit user info </h2>
            <div className="editing-container">
              <label htmlFor="username-input" className="editing-label">
                User name :
              </label>
              <input
                id="username-input"
                className="editing-input"
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />{" "}
            </div>
            <div className="editing-container">
              <label htmlFor="firstname-input" className="editing-label">
                First name :
              </label>
              <input
                id="firstname-input"
                className="editing-input readonly-input"
                type="text"
                value={lastName}
                readOnly
              />
            </div>
            <div className="editing-container">
              <label htmlFor="lastname-input" className="editing-label">
                Last name :
              </label>
              <input
                id="lastname-input"
                className="editing-input readonly-input"
                type="text"
                value={firstName}
                readOnly
              />
            </div>
            <div className="editing-button-container">
              <button className="editing-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="editing-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </section>
        ) : (
          <section>
            <h2 className="header-title">Welcome back</h2>
            <p className="username">{username}!</p>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </section>
        )}
      </h1>
    </header>
  );
};

export default UserHeader;
