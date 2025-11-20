import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Footer from "./components/Footer";

import Home from "./pages/Home";
import ApplyID from "./pages/ApplyID";
import UploadDocs from "./pages/UploadDocs";
import TrackStatus from "./pages/TrackStatus";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import Register from "./pages/Register";  
import ApplicantDashboard from "./pages/ApplicantDashboard";

function App() {
  return (
    <Router>
    

      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ApplicantDashboard />} />
          <Route path="/apply" element={<ApplyID />} />
          <Route path="/upload" element={<UploadDocs />} />
          <Route path="/track" element={<TrackStatus />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
