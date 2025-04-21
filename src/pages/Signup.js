import { useState } from "react";
import "./styles.css"; // Import the CSS file
export default function Signup() {
    return (
      <div className="auth-section">
        <h2>Sign Up</h2>
        <form className="form">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input type="password" placeholder="Confirm Password" className="input" />
          <button className="btn submit">Sign Up</button>
        </form>
      </div>
    );
  }