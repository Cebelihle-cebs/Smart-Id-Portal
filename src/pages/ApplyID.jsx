import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ApplyID.scss";

const ApplyID = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    nationality: "",
    phone: "",
    email: "",
    address: "",
    province: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    // Validate current step before moving forward
    if (step === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.dob ||
        !formData.gender ||
        !formData.nationality ||
        !formData.phone ||
        !formData.email
      ) {
        alert("Please fill all personal information fields before proceeding.");
        return;
      }
    }

    if (step === 2) {
      if (!formData.address || !formData.city || !formData.province) {
        alert("Please fill all address fields before proceeding.");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: final check before submission
    const allFieldsFilled = Object.values(formData).every((val) => val.trim() !== "");
    if (!allFieldsFilled) {
      alert("Please complete all fields before submitting the application.");
      return;
    }

    console.log("Application submitted:", formData);
    navigate("/appointment");
  };

  return (
    <div className="apply-form-wrap">
      <h2>Apply for Smart ID Card</h2>

      <form className="apply-form" onSubmit={handleSubmit}>
        {/* Step Indicator */}
        <div className="step-indicator">
          <div className={step >= 1 ? "active" : ""}>Personal Info</div>
          <div className={step >= 2 ? "active" : ""}>Address</div>
          <div className={step >= 3 ? "active" : ""}>Review</div>
        </div>

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="form-section">
            <h3>Personal Info</h3>
            <p>Enter your personal information</p>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="e.g., South African"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 123 456 789"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="btn-group">
              <button type="button" className="next-btn" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Address */}
        {step === 2 && (
          <div className="form-section">
            <h3>Address Details</h3>

            <div className="form-group">
              <label>Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                required
              />
            </div>

            <div className="form-group">
              <label>Province</label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="Gauteng"
                required
              />
            </div>

            <div className="form-group">
              <label>City/Town</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Johannesburg"
                required
              />
            </div>

            <div className="btn-group">
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="next-btn" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="form-section">
            <h3>Review Your Info</h3>
            <p>Check all details before submission</p>

            <div className="review-item">
              <strong>First Name:</strong> {formData.firstName}
            </div>
            <div className="review-item">
              <strong>Last Name:</strong> {formData.lastName}
            </div>
            <div className="review-item">
              <strong>Date of Birth:</strong> {formData.dob}
            </div>
            <div className="review-item">
              <strong>Gender:</strong> {formData.gender}
            </div>
            <div className="review-item">
              <strong>Nationality:</strong> {formData.nationality}
            </div>
            <div className="review-item">
              <strong>Phone:</strong> {formData.phone}
            </div>
            <div className="review-item">
              <strong>Email:</strong> {formData.email}
            </div>
            <div className="review-item">
              <strong>Address:</strong> {formData.address}, {formData.city}, {formData.province}
            </div>

            <div className="btn-group">
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ApplyID;
