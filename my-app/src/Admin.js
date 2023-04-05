import "./bootstrap.min.css";
import "./App.css";
import React from "react";

function Admin() {
  return (
    <div>
      <div className="adminTopBanner">
        <h1>Admin Page</h1>
      </div>
      <div className="adminBody">
        <button type="button" class="btn btn-outline-primary">
          Primary
        </button>
      </div>
    </div>
  );
}

export default Admin;
