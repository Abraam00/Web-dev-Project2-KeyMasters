import React from "react";
import "./bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">QR Scavange</a>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="./QRLanding" className="nav-link active">
                QR Hint
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Admin" className="nav-link active">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Leaderboard" className="nav-link active">
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Rules" className="nav-link active">
                Rules
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
