import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UploadDocs.scss";

const documents = [
  { name: "Birth Certificate", required: true },
  { name: "Proof of Address", required: true },
  { name: "Passport Photo", required: true },
  { name: "Previous ID Card", required: false },
];

const UploadDocs = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleFileChange = (e, docName) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles({ ...uploadedFiles, [docName]: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check all required documents
    for (let doc of documents) {
      if (doc.required && !uploadedFiles[doc.name]) {
        alert(`Please upload ${doc.name}`);
        return;
      }
    }

    console.log("Uploaded files:", uploadedFiles);
    // TODO: API call to upload files
    navigate("/dashboard"); // Redirect after upload
  };

  return (
    <div className="upload-wrap">
      <h2>Upload Documents</h2>
      <p>Upload the required documents for your Smart ID application</p>

      <div className="doc-requirements">
        <h4>Document Requirements</h4>
        <ul>
          <li>Documents must be clear and readable</li>
          <li>Accepted formats: PDF, JPG, PNG (max 5MB per file)</li>
          <li>All text and details must be visible</li>
          <li>Documents must be valid and not expired</li>
        </ul>
      </div>

      <form className="upload-form" onSubmit={handleSubmit}>
        {documents.map((doc) => (
          <div className="doc-card" key={doc.name}>
            <div className="doc-info">
              <h4>{doc.name}</h4>
              <span className={`doc-required ${doc.required ? "required" : "optional"}`}>
                {doc.required ? "Required" : "Optional"}
              </span>
            </div>

            <div className="doc-upload">
              {uploadedFiles[doc.name] ? (
                <span className="uploaded-file">{uploadedFiles[doc.name].name}</span>
              ) : (
                <span className="no-file">No document uploaded yet</span>
              )}
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={(e) => handleFileChange(e, doc.name)}
              />
            </div>
          </div>
        ))}

        <button type="submit" className="submit-btn">Submit Documents</button>
      </form>
    </div>
  );
};

export default UploadDocs;
