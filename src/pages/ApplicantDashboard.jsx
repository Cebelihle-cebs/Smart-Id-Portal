import React from "react";
import { FaFileAlt, FaCalendarAlt, FaFingerprint, FaCheckCircle, FaShieldAlt, FaPlusCircle } from "react-icons/fa";
import "../styles/ApplicantDashboard.scss";
import { useNavigate } from "react-router-dom";

const ApplicantDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="app-wrap">
      {/* Header */}
      <header className="app-hero">
        <div className="hero-inner">
          <div className="logo-and-title">
            <div className="logo-circle"><FaShieldAlt /></div>
            <div className="hero-text">
              <h1>Welcome back!</h1>
              <p className="subtitle">Track your Smart ID application progress</p>
            </div>
          </div>

          {/* Start New Application Button */}
          <button
            className="start-application-btn"
            onClick={() => navigate("/apply")}
          >
            <FaPlusCircle className="btn-icon" /> Start New Application
          </button>
        </div>
      </header>

      <main className="dashboard">
        {/* Placeholder: Application Progress */}
        <div className="application-progress card">
          <h3 className="card-title">
            <FaCheckCircle className="section-icon" /> Application Progress
          </h3>
          <p className="no-application">You currently have no active applications.</p>
          <p>Once you start an application, progress will appear here.</p>
        </div>

        {/* Lower row: document status and appointment placeholders */}
        <div className="lower-grid">
          <div className="document-status card">
            <h3 className="card-title"><FaFileAlt className="section-icon" /> Document Status</h3>
            <p className="no-documents">No documents uploaded yet.</p>
            <button 
              className="upload-docs" 
              onClick={() => navigate("/apply")}
            >
              Upload Documents
            </button>
          </div>

          <div className="appointment card">
            <h3 className="card-title"><FaCalendarAlt className="section-icon" /> Scheduled Appointment</h3>
            <p className="no-appointment">No appointment scheduled yet.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicantDashboard;
