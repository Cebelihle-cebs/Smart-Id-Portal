import React from "react";
import "../styles/AdminVerificationDocs.scss";

const AdminVerificationDocs = ({ isOpen, onClose, applicant, onVerify }) => {
  if (!isOpen || !applicant) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Verify Documents</h2>
        <p>
          Applicant: <strong>{applicant.name}</strong>
          <br />
          Email: <span className="email">{applicant.email}</span>
        </p>

        <div className="documents-section">
          <h3>Uploaded Documents:</h3>
          {applicant.documents && applicant.documents.length > 0 ? (
            applicant.documents.map((doc, index) => (
              <div key={index} className="doc-preview">
                <p>{doc.name}</p>
                {doc.type.includes("image") ? (
                  <img src={doc.url} alt={doc.name} />
                ) : (
                  <a href={doc.url} target="_blank" rel="noreferrer">
                    View Document
                  </a>
                )}
              </div>
            ))
          ) : (
            <p>No documents uploaded yet.</p>
          )}
        </div>

        <div className="modal-actions">
          <button
            className="approve-btn"
            onClick={() => onVerify(applicant.id, "Verified")}
          >
            Approve
          </button>
          <button
            className="reject-btn"
            onClick={() => onVerify(applicant.id, "Rejected")}
          >
            Reject
          </button>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminVerificationDocs;
