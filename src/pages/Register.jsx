import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.scss";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // TODO: Add API call to register user
    console.log("Register Email:", email, "Password:", password);
    alert("Sign Up successful!");
    navigate("/login"); // Redirect to login after registration
  };

  return (
    <div className="register-container">
      <div className="register-box">
     
        <h1>Create Your Account</h1>
        <form onSubmit={handleSignUp}>
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

          <button type="submit" className="sign-up-btn">Sign Up</button>
        </form>

        <div className="login-link">
          Already have an account?{" "}
          <Link to="/login" className="sign-in-btn">Sign In</Link>
        </div>

        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
