import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ApplyID.scss";

const ApplyID = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    province: "",
    city: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit the application via API and generate Application ID
    console.log("Application submitted:", formData);

    // Redirect to appointment booking page
    navigate("/appointment");
  };

  return (
    <div className="apply-form-wrap">
      <h2>Smart ID Application Form</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        {/* Personal Info */}
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Contact Info */}
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Province</label>
          <input type="text" name="province" value={formData.province} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>City/Town</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>

     

        <button type="submit" className="submit-btn">Proceed to Appointment</button>
      </form>
    </div>
  );
};

export default ApplyID;
