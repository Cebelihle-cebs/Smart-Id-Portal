import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: Add API call to authenticate user
    console.log("Email:", email, "Password:", password);
    alert("Sign In clicked!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">Login</div>
       
        <p>Welcome<br />Sign in to your account or create a new one</p>

        <form onSubmit={handleSignIn}>
          <label>Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>

        <div className="signup-link">
          Don't have an account?{" "}
          <Link to="/register" className="sign-up-btn">Sign Up</Link>
        </div>

        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
};

export default LoginPage;
