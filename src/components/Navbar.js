import React from 'react';
import {useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import logo from '../data/camera.png'; // Import the logo image file

function Navbar() {
    const location = useLocation(); // Get current route

  // Check if the current route is the login page
  const isOnLoginPage = location.pathname === '/login';

    // Check if the current route is the signup page
  const isOnSignUpPage = location.pathname === '/signup';

  return (
    <nav className="navbar">
      <div className="logo">
      <a href="/">
        <img src={logo} alt="Photo Gallery Logo" />
      </a>
      </div>
      <ul className="nav-links">
        {!isOnLoginPage && (<li>
          <a href="/login" className="login-btn">
            Login
          </a>
        </li>)}
        {!isOnSignUpPage && (<li>
          <a href="/signup" className="signup-btn">
            Signup
          </a>
        </li>)}
      </ul>
    </nav>
  );
}

export default Navbar;