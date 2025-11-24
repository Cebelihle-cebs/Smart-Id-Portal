import React from "react";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaFingerprint,
  FaCheckCircle,
  FaShieldAlt,
  FaPlusCircle,
} from "react-icons/fa";
import "../styles/ApplicantDashboard.scss";
import { useNavigate } from "react-router-dom";

const ApplicantDashboard = () => {
  const navigate = useNavigate();

  const application = {
    id: "APP-2024-001",
    steps: [
      { name: "Documents Submitted", status: "Pending", message: "Waiting for previous steps" },
      { name: "Appointment Scheduled", status: "Pending", message: "Waiting for previous steps" },
      { name: "Biometric Data Uploaded", status: "Pending", message: "Waiting for previous steps" },
      { name: "Ready for Collection", status: "Pending", message: "Waiting for previous steps" },
    ],
    documents: [
      { name: "Birth Certificate", status: "Pending" },
      { name: "Proof of Residence", status: "Pending" },
      { name: "Passport Photo", status: "Pending" },
    ],
    appointment: null,
  };

  return (
    <div className="app-wrap">
      {/* Header */}
      <header className="app-hero">
        <div className="hero-inner">
          <div className="logo-and-title">
            <div className="logo-circle"><FaShieldAlt /></div>
            <div className="hero-text">
              <h1>Welcome back, John!</h1>
              <p className="subtitle">Track your Smart ID application progress</p>
            </div>
          </div>

          {/* Start New Application Button */}
          <button
            className="start-application-btn"
            onClick={() => navigate("/apply")}
          >
            <FaPlusCircle className="btn-icon" /> Start Application
          </button>
        </div>
      </header>

      <main className="dashboard">
        {/* Application Progress */}
        <div className="application-progress card">
          <h3 className="card-title">
            <FaCheckCircle className="section-icon" /> Application Progress
          </h3>
          <p className="application-id">Application ID: {application.id}</p>

          <div className="steps-list">
            {application.steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="left">
                  <FaCheckCircle className="step-icon" />
                  <div>
                    <p className="step-name">{step.name}</p>
                    <p className="step-message">{step.message}</p>
                  </div>
                </div>
                <span className="status pending">{step.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="lower-grid">
          {/* Document Status */}
          <div className="document-status card">
            <h3 className="card-title">
              <FaFileAlt className="section-icon" /> Document Status
            </h3>

            <div className="document-list">
              {application.documents.map((doc, index) => (
                <div key={index} className="doc-item">
                  <p className="doc-name">{doc.name}</p>
                  <span className="status pending">{doc.status}</span>
                </div>
              ))}
            </div>

            <button className="upload-docs" onClick={() => navigate("/upload")}>
              Upload More Documents
            </button>
          </div>

          {/* Appointment */}
          <div className="appointment card">
            <h3 className="card-title">
              <FaCalendarAlt className="section-icon" /> Scheduled Appointment
            </h3>

            {application.appointment ? (
              <p className="appointment-details">{application.appointment}</p>
            ) : (
              <p className="no-appointment">No appointment scheduled yet</p>
            )}

            <button
              className="schedule-btn"
              onClick={() => navigate("/appointment")}
            >
              Schedule Appointment
            </button>
          </div>
        </div>

        {/* Biometrics */}
        <div className="biometrics card">
          <h3 className="card-title">
            <FaFingerprint className="section-icon" /> Biometric Data & Photo
          </h3>
          <p>Your biometric data will be captured at your appointment</p>
          <p className="status pending">Awaiting Appointment</p>
        </div>

        {/* ID Collection */}
        <div className="collection card">
          <h3 className="card-title">
            <FaShieldAlt className="section-icon" /> ID Collection
          </h3>
          <p>Your Smart ID will be ready for collection once processing is complete</p>
          <p className="status processing">Processing</p>
        </div>

        {/* Getting Started */}
        <div className="getting-started card">
          <h3 className="card-title">Getting Started</h3>
          <p>Click the "Start Application" button above to begin your Smart ID application process.</p>
        </div>
      </main>
    </div>
  );
};

export default ApplicantDashboard;
