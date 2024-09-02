import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

const PrivateRoute = ({ element, redirectTo }) => {
  const token = useSelector((state) => state.auth.token); // Récupération du token d'authentification de l'utilisateur
  if (token && redirectTo === "/login") {
    return <Navigate to="/profile" />; // Si connecté et tente d'allez sur la pas login, redirige vers profile
  }
  if (!token && redirectTo === "/profile") {
    return <Navigate to="/login" />; // Si non connecté et tente d'allez sur la pas profile, redirige vers login
  }
  return element; // Affiche la page demandée
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<PrivateRoute element={<Login />} redirectTo="/login" />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute element={<Profile />} redirectTo="/profile" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
