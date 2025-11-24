import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Mock users data
  const mockUsers = [
    {
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
    },
    {
      email: "user@gmail.com",
      password: "user123",
      role: "applicant",
    },
  ];

  const handleSignIn = (e) => {
    e.preventDefault();

    // Find user in mock data
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Sign In successful!");

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admindashboard"); // Admin dashboard route
      } else {
        navigate("/dashboard"); // Applicant dashboard route
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <p>
          Welcome to Smart ID Portal
          <br />
          Sign in to your account or create a new one
        </p>

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

export default Login;
