import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login_body">
      <div className="container4">
        {/* Left side for image */}
        <div className="image-container">
          <img src="8.png" alt="Welcome" className="side-image" />
        </div>

        {/* Right side for forms */}
        <div className="form-container">
          {isLogin ? (
            <LoginForm toggleForm={toggleForm} />
          ) : (
            <SignupForm toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </div>
  );
};

// LoginForm Component
const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });

    // Here you would typically validate the credentials
    // For this example, we'll assume login is successful if email and password are not empty
    if (email && password) {
      // Redirect to the dashboard on successful login
      navigate('/real-time'); // Change this to your actual dashboard route
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label>Password:</label>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
      </div>

      <button type="submit" className="submit-btn">Login</button>
      <p className="toggle-link">
        Don't have an account? <span onClick={toggleForm}>Sign up here.</span>
      </p>
    </form>
  );
};

// SignupForm Component
const SignupForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-field">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label>Password:</label>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
      </div>

      <button type="submit" className="submit-btn">Sign Up</button>
      <p className="toggle-link">
        Already have an account? <span onClick={toggleForm}>Login here.</span>
      </p>
    </form>
  );
};

export default LoginPage;
