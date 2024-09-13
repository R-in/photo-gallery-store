// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PhotoPage from './pages/PhotoPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
    return (
        <Router>
          <div className="App">
          <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/photo/:id" element={<PhotoPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
