import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UploadDocs.scss";

const UploadDocs = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API call to upload documents
    console.log("Uploaded files:", files);

    // Redirect back to dashboard after successful upload
    navigate("/dashboard");
  };

  return (
    <div className="upload-wrap">
      <h2>Upload Required Documents</h2>
      <p>Please upload all necessary documents for your Smart ID application (Birth Certificate, Photo, etc.).</p>

      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Files</label>
          <input type="file" multiple onChange={handleFileChange} required />
        </div>

        <div className="selected-files">
          {files.length > 0 && (
            <ul>
              {files.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="submit-btn">Submit Documents</button>
      </form>
    </div>
  );
};

export default UploadDocs;
