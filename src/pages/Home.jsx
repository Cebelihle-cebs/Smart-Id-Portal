import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartApplication = () => {
    navigate("/login");
  };

  const handleCreateAccount = () => {
    navigate("/register");
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h2>Secure • Digital • Fast</h2>
        <h1>Your National ID, Simplified</h1>
        <p>
          Apply for your Smart ID card online. No queues, no hassle. Track your
          application from start to finish with complete transparency.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={handleStartApplication}>
            Start Application
          </button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>Why Choose Smart ID Portal?</h2>
        <p>Modern, efficient, and completely transparent</p>
        <div className="features">
          <div className="feature-card">
            <h3>Easy Application</h3>
            <p>
              Apply for your Smart ID card online in minutes with our
              streamlined process
            </p>
          </div>
          <div className="feature-card">
            <h3>Schedule Appointments</h3>
            <p>Book your photo and fingerprint session at your convenience</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>
              Monitor your application status in real-time from submission to
              delivery
            </p>
          </div>
          <div className="feature-card">
            <h3>Quick Processing</h3>
            <p>
              Fast review and approval process with digital document
              verification
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Four simple steps to your Smart ID</p>
        <div className="steps">
          <div className="step-card">
            <span>01</span>
            <h3>Create Account</h3>
            <p>Register with your basic information</p>
          </div>
          <div className="step-card">
            <span>02</span>
            <h3>Submit Application</h3>
            <p>Fill out the form and upload documents</p>
          </div>
          <div className="step-card">
            <span>03</span>
            <h3>Book Appointment</h3>
            <p>Schedule your biometric capture session</p>
          </div>
          <div className="step-card">
            <span>04</span>
            <h3>Receive ID</h3>
            <p>Get your Smart ID card delivered</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Join thousands of citizens who have already simplified their ID
          application process
        </p>
        <button className="primary-btn" onClick={handleCreateAccount}>
          Create Account
        </button>
      </section>
    </div>
  );
};

export default HomePage;
