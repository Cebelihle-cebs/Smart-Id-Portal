import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import "../styles/Appointment.scss";

const AppointmentPage = () => {
  const appointment = {
    date: "2024-11-30",
    time: "10:30 AM",
    location: "Home Affairs Durban Central",
    status: "Confirmed",
  };

  return (
    <div className="appointment-container">
      <h2 className="title">Your Biometrics Appointment</h2>

      <div className="appointment-card">
        <div className="row">
          <FaCalendarAlt className="icon" />
          <div>
            <h3>Date</h3>
            <p>{appointment.date}</p>
          </div>
        </div>

        <div className="row">
          <FaClock className="icon" />
          <div>
            <h3>Time</h3>
            <p>{appointment.time}</p>
          </div>
        </div>

        <div className="row">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h3>Location</h3>
            <p>{appointment.location}</p>
          </div>
        </div>

        <div className="status-section">
          <FaCheckCircle className="status-icon" />
          <span className="status-text">{appointment.status}</span>
        </div>

        <div className="buttons">
          <button className="reschedule-btn">Reschedule</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
