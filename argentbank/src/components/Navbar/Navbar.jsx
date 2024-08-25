import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/argentBankLogo.png";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img src={Logo} alt="Logo" className="main-nav-logo-image" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Link to="/Login" className="main-nav-item">
        <i className="fa fa-user-circle "></i>
        Sign In
      </Link>
    </nav>
  );
};

export default Navbar;
