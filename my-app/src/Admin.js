import "./bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";

function Admin() {
  const [hint, setHint] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleHintSubmit = (e) => {
    e.preventDefault();
    setShowQR(true);
  };

  return (
    <div className="admin-page">
      <div className="admin-banner">
        <h1>Admin Page</h1>
      </div>
      <div className="admin-body">
        <div className="create-qr">
          {!showQR ? (
            <button
              className="create-qr-button"
              onClick={() => setShowQR(true)}
            >
              Create QR
            </button>
          ) : (
            <div className="qr-code-container">
              <QrCode value={hint} size={200} />
              <button className="create-qr-button">Create QR</button>
            </div>
          )}
          {showQR && (
            <form className="hint-form" onSubmit={handleHintSubmit}>
              <label htmlFor="hint-input">Hint or Clue:</label>
              <input
                id="hint-input"
                type="text"
                value={hint}
                onChange={(e) => setHint(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
