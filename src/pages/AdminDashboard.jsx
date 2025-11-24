// src/pages/AdminDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.scss";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Applications", value: 156, subtitle: "This month" },
    { title: "Pending Documents", value: 8, subtitle: "Need verification" },
    { title: "Upcoming Appointments", value: 15, subtitle: "Next 7 days" },
    { title: "Ready for Collection", value: 23, subtitle: "IDs ready" },
  ];

  const applications = [
    {
      id: "APP-2024-001",
      name: "John Doe",
      email: "john@example.com",
      docs: "Verified",
      appointment: "Completed",
      biometrics: "Pending",
      collection: "Processing",
      action: "Upload Biometrics",
    },
    {
      id: "APP-2024-002",
      name: "Jane Smith",
      email: "jane@example.com",
      docs: "Pending Review",
      appointment: "Scheduled 2024-02-18 at 2:00 PM",
      biometrics: "Not Scheduled",
      collection: "Not Ready",
      action: "Verify Docs",
    },
    {
      id: "APP-2024-003",
      name: "Mike Johnson",
      email: "mike@example.com",
      docs: "Verified",
      appointment: "Completed",
      biometrics: "Uploaded",
      collection: "Ready",
      action: "Mark Collected",
    },
    {
      id: "APP-2024-004",
      name: "Sarah Williams",
      email: "sarah@example.com",
      docs: "Verified",
      appointment: "Completed",
      biometrics: "Uploaded",
      collection: "Collected",
      action: "—",
    },
    {
      id: "APP-2024-005",
      name: "David Brown",
      email: "david@example.com",
      docs: "Rejected",
      appointment: "Not Scheduled",
      biometrics: "Not Scheduled",
      collection: "Not Ready",
      action: "Review",
    },
  ];

  // Navigate to document verification page for a specific app
  const handleVerifyDocs = (appId) => {
    navigate(`/verify/${appId}`);
  };

  // Navigate to general verification page
  const handleVerifyTopButton = () => {
    navigate("/verify");
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p className="subtitle">Review and manage Smart ID applications</p>
        <button className="top-verify-btn" onClick={handleVerifyTopButton}>
          Verify Documents
        </button>
      </div>

      <div className="stats-cards">
        {stats.map((stat, index) => (
          <div className="card" key={index}>
            <h2>{stat.value}</h2>
            <p>{stat.title}</p>
            <span>{stat.subtitle}</span>
          </div>
        ))}
      </div>

      <div className="applications-section">
        <h2>All Applications</h2>
        <button className="export-btn">Export</button>
        <table>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Applicant</th>
              <th>Documents</th>
              <th>Appointment</th>
              <th>Biometrics</th>
              <th>Collection</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>
                  {app.name}
                  <br />
                  <span className="email">{app.email}</span>
                </td>
                <td>{app.docs}</td>
                <td>{app.appointment}</td>
                <td>{app.biometrics}</td>
                <td>{app.collection}</td>
                <td>
                  {app.action === "Verify Docs" ? (
                    <button
                      className="action-btn verify-btn"
                      onClick={() => handleVerifyDocs(app.id)}
                    >
                      Verify Docs
                    </button>
                  ) : app.action !== "—" ? (
                    <button className="action-btn">{app.action}</button>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
