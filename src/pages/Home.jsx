import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Home.scss";

const HomePage = () => {
  const navigate = useNavigate();

  // 🔥 Create reference for the "Why Choose" section
  const whyChooseRef = useRef(null);

  // 🔥 Scroll Function
  const handleLearnMore = () => {
    if (whyChooseRef.current) {
      whyChooseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartApplication = () => navigate("/login");
  const handleCreateAccount = () => navigate("/register");

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Smart ID Portal</div>

        <ul className="nav-links">
          <li>
            <Link to="/login" className="login-btn">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      {/* PAGE CONTENT */}
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <h2>Secure • Digital • Fast</h2>
          <h1>Your National ID, Simplified</h1>
          <p>
            Apply for your Smart ID card online. No queues, no hassle. Track
            your application from start to finish with complete transparency.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleStartApplication}>
              Start Application
            </button>

            {/* 🔥 Learn More Button now scrolls smoothly */}
            <button className="secondary-btn" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </section>

        {/* Why Choose Section — we attach the ref here */}
        <section className="why-choose" ref={whyChooseRef}>
          <h2>Why Choose Smart ID Portal?</h2>
          <p>Modern, efficient, and completely transparent</p>
          <div className="features">
            <div className="feature-card">
              <h3>Easy Application</h3>
              <p>Apply online in minutes</p>
            </div>
            <div className="feature-card">
              <h3>Schedule Appointments</h3>
              <p>Book your biometric session</p>
            </div>
            <div className="feature-card">
              <h3>Track Progress</h3>
              <p>Monitor your status in real-time</p>
            </div>
            <div className="feature-card">
              <h3>Quick Processing</h3>
              <p>Fast review with digital verification</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <p>Four simple steps to your Smart ID</p>
          <div className="steps">
            <div className="step-card">
              <span>01</span>
              <h3>Create Account</h3>
              <p>Register your basic information</p>
            </div>
            <div className="step-card">
              <span>02</span>
              <h3>Submit Application</h3>
              <p>Upload required documents</p>
            </div>
            <div className="step-card">
              <span>03</span>
              <h3>Book Appointment</h3>
              <p>Schedule biometrics</p>
            </div>
            <div className="step-card">
              <span>04</span>
              <h3>Receive ID</h3>
              <p>Get your Smart ID delivered</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands who simplified their ID application</p>
          <button className="primary-btn" onClick={handleCreateAccount}>
            Create Account
          </button>
        </section>
      </div>
    </>
  );
};

export default HomePage;
