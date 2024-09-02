import "./Navbar.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import Logo from "../../assets/images/argentBankLogo.png";

const Navbar = () => {
  const dispatch = useDispatch(); // Permet d'appeler les actions
  const navigate = useNavigate(); // Permet de naviguer entre les pages
  const { token, username } = useSelector((state) => state.auth); // Récupère le token et le nom d'utilisateur

  // Fonction de déconnexion
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // Appel de l'action logout
    navigate("/"); // Redirection vers la page d'accueil
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img src={Logo} alt="Logo" className="main-nav-logo-image" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token ? (
        <div>
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {username || "Profile"}{" "}
            {/* Affiche le nom d'utilisateur ou "Profile" si aucun nom n'est disponible */}
          </Link>
          <Link to="/" onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <Link to="/Login" className="main-nav-item">
          <i className="fa fa-user-circle "></i>
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
