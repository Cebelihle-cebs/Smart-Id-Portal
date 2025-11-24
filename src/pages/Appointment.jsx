import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Appointment.scss";

const Appointment = () => {
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({
    branch: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit appointment via API
    console.log("Appointment booked:", appointmentData);

    // Redirect to Upload Documents page after appointment
    navigate("/upload");
  };

  return (
    <div className="appointment-wrap">
      <h2>Schedule Your Biometrics Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Choose Branch / Location</label>
          <select name="branch" value={appointmentData.branch} onChange={handleChange} required>
            <option value="">Select Branch</option>
            <option value="Main Office">Home Affairs Main Office</option>
            <option value="Branch 1">Branch 1</option>
            <option value="Branch 2">Branch 2</option>
          </select>
        </div>

        <div className="form-group">
          <label>Select Date</label>
          <input type="date" name="date" value={appointmentData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Select Time</label>
          <input type="time" name="time" value={appointmentData.time} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
