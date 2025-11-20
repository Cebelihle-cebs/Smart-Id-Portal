import React from "react";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaFingerprint,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/ApplicantDashboard.scss";
import { useNavigate } from "react-router-dom";

const ApplicantDashboard = () => {
  const navigate = useNavigate();

  const application = {
    id: "APP-2024-001",
    steps: [
      { name: "Documents Submitted", status: "Completed", message: "Step completed successfully", icon: <FaFileAlt /> },
      { name: "Appointment Scheduled", status: "Completed", message: "Step completed successfully", icon: <FaCalendarAlt /> },
      { name: "Biometric Data Uploaded", status: "In Progress", message: "Currently being processed", icon: <FaFingerprint /> },
      { name: "Ready for Collection", status: "Pending", message: "Waiting for previous steps", icon: <FaCheckCircle /> },
    ],
    documents: [
      { name: "Birth Certificate", status: "Verified" },
      { name: "Proof of Residence", status: "Verified" },
      { name: "Passport Photo", status: "Pending" },
    ],
    appointment: {
      date: "Tuesday, February 20, 2024",
      time: "10:00 AM",
      location: "Home Affairs Main Office",
      status: "Confirmed",
    },
  };

  return (
    <div className="app-wrap">
      <header className="app-hero">
        <div className="hero-inner">
          <div className="logo-and-title">
            <div className="logo-circle"><FaShieldAlt /></div>
            <div className="hero-text">
              <h1>Welcome back, John!</h1>
              <p className="subtitle">Track your Smart ID application progress</p>
            </div>
          </div>

          {/* ⭐ Top Appointment Button */}
          <button
            className="appointment-btn"
            onClick={() => navigate("/appointment")}
          >
            Book / View Appointment
          </button>
        </div>
      </header>

      <main className="dashboard">
        {/* Application Progress */}
        <div className="application-progress card">
          <h3 className="card-title">
            <FaCheckCircle className="section-icon" /> Application Progress
          </h3>
          <p className="app-id">Application ID: {application.id}</p>

          <ul className="progress-list">
            {application.steps.map((step, index) => {
              const cls = step.status.toLowerCase().replace(" ", "-");
              return (
                <li key={index} className={`step ${cls}`}>
                  <div className="icon-wrap">
                    <div className="icon-bg">{step.icon}</div>
                    <div className="vertical-line" />
                  </div>

                  <div className="step-info">
                    <div className="step-name">{step.name}</div>
                    <div className="step-message">{step.message}</div>
                  </div>

                  <div className={`status-label ${cls}`}>{step.status}</div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Lower row: document status and appointment */}
        <div className="lower-grid">
          <div className="document-status card">
            <h3 className="card-title"><FaFileAlt className="section-icon" /> Document Status</h3>
            <ul>
              {application.documents.map((doc, i) => (
                <li key={i}>
                  <span className="doc-name">{doc.name}</span>
                  <span className={`status-label ${doc.status.toLowerCase()}`}>{doc.status}</span>
                </li>
              ))}
            </ul>
            <button className="upload-docs">Upload More Documents</button>
          </div>

          <div className="appointment card">
            <h3 className="card-title"><FaCalendarAlt className="section-icon" /> Scheduled Appointment</h3>
            <div className="appt-details">
              <p><strong>Date & Time:</strong> {application.appointment.date} | {application.appointment.time}</p>
              <p><strong>Location:</strong> {application.appointment.location}</p>
              <p><strong>Status:</strong> <span className="appt-status">{application.appointment.status}</span></p>
            </div>

            <div className="appointment-actions">
              <button className="reschedule">Reschedule</button>
              <button className="view-details">View Details</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicantDashboard;
