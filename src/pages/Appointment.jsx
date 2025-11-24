import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Appointment.scss";

const branches = [
  { name: "Downtown Office", address: "123 Main St, City Center" },
  { name: "North Branch", address: "456 North Ave, District 2" },
  { name: "West Center", address: "789 West Blvd, Zone 3" },
];

const times = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const Appointment = () => {
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({
    branch: "",
    date: "",
    time: "",
  });

  const handleBranchSelect = (branchName) => {
    setAppointmentData({ ...appointmentData, branch: branchName });
  };

  const handleTimeSelect = (time) => {
    setAppointmentData({ ...appointmentData, time });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointmentData.branch || !appointmentData.date || !appointmentData.time) {
      alert("Please select branch, date, and time.");
      return;
    }
    console.log("Appointment booked:", appointmentData);
    navigate("/upload"); // redirect after booking
  };

  return (
    <div className="appointment-wrap">
      <h2>Book Appointment</h2>
      <p>Schedule your biometric capture session (photo and fingerprints)</p>

      <form className="appointment-form" onSubmit={handleSubmit}>
        {/* Branch Selection */}
        <div className="form-group">
          <label>Select Location</label>
          <div className="branch-list">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className={`branch-card ${appointmentData.branch === branch.name ? "selected" : ""}`}
                onClick={() => handleBranchSelect(branch.name)}
              >
                <h4>{branch.name}</h4>
                <p>{branch.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div className="form-group">
          <label>Select Date</label>
          <input
            type="date"
            name="date"
            value={appointmentData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time Selection */}
        <div className="form-group">
          <label>Select Time</label>
          <div className="time-slots">
            {times.map((t) => (
              <button
                type="button"
                key={t}
                className={`time-btn ${appointmentData.time === t ? "selected" : ""}`}
                onClick={() => handleTimeSelect(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Appointment Summary */}
        <div className="appointment-summary">
          <h3>Appointment Summary</h3>
          <div className="summary-item">
            <strong>Location:</strong> {appointmentData.branch || "Not selected"}
          </div>
          <div className="summary-item">
            <strong>Date:</strong> {appointmentData.date || "Not selected"}
          </div>
          <div className="summary-item">
            <strong>Time:</strong> {appointmentData.time || "Not selected"}
          </div>
          <div className="summary-note">
            <strong>What to bring:</strong>
            <ul>
              <li>Your application reference number</li>
              <li>Original identification documents</li>
              <li>Proof of address</li>
            </ul>
          </div>
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
