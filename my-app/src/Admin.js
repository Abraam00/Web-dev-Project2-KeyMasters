import "./bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import QrCode from "qrcode.react";

function Admin() {
  const [hint, setHint] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleHintSubmit = (e) => {
    e.preventDefault();
    setShowQR(true);
  };

  return (
    <div>
      <div className="adminTopBanner">
        <h1>Admin Page</h1>
      </div>
      <div className="adminFormGroup">Test</div>
    </div>
  );
}

export default Admin;
