import "./LoginForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, fetchUserProfile } from "../../redux/authSlice";

function LoginForm() {
  const [email, setEmail] = useState(""); // Stocke les valeurs des champs email et password
  const [password, setPassword] = useState(""); // Stocke les valeurs des champs email et password
  const [errorMessage, setError] = useState(""); // Stocke les messages d'erreur
  const navigate = useNavigate(); // Permet de naviguer entre les pages
  const dispatch = useDispatch(); // Permet d'appeler les actions
  const { error } = useSelector((state) => state.auth); // Récupère l'erreur de connexion

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password })); // Appel de l'action loginUser
    if (loginUser.fulfilled.match(resultAction)) {
      const profileAction = await dispatch(fetchUserProfile()); // Appel de l'action fetchUserProfile
      if (fetchUserProfile.fulfilled.match(profileAction)) {
        navigate("/profile"); // Redirige vers la page de profil
      } else {
        setError("Erreur lors de la récupération du profil"); // Affiche un message d'erreur
      }
    } else {
      setError("Erreur de connexion"); // Affiche un message d'erreur
    }
  };

  return (
    <section className="login-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
        {(errorMessage || error) && (
          <p className="error-message">{errorMessage}</p> // Fait apparaître le message d'erreur
        )}
      </form>
    </section>
  );
}

export default LoginForm;
