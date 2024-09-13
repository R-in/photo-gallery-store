// src/SignupPage.js

import React, { useState } from 'react';
//import './SignupPage.css'; // Import a CSS file for styling

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation: At least 6 characters
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      setIsSubmitting(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long.');
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    // Clear any existing errors
    setError('');

    // Simulate form submission
    console.log('Form Submitted:', { email, password });

    // Reset form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsSubmitting(false);

    // Here you can handle registration (e.g., API call)
  };

  return (
    <div className="signup-container mt-2">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
