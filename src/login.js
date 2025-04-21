import { useState } from "react";
import "./styles.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
export default function Login() {
    return (
      <div className="auth-section">
        <h2>Login</h2>
        <form className="form">
          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="btn submit"><Link to="/dashboard" className="btn login">Login</Link></button>
        </form>
      </div>
    );
  }
  