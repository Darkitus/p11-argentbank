import "./LoginForm.css";
import React from "react";
// import { useNavigate } from "react-router-dom";

function LoginForm() {
  // A faire: Utilisation du useNavigate pour redict en utilisant le bouton plutôt que le <a>
  // Le formulaire n'est pas encore fonctionnel
  return (
    <section className="login-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* PLACEHOLDER DUE TO STATIC SITE */}
        <a href="./profile" className="login-button">
          Sign In
        </a>
        {/* SHOULD BE THE BUTTON BELOW */}
        {/* <button type="submit" class="login-button">
          Sign In
        </button> */}
      </form>
    </section>
  );
}

export default LoginForm;
