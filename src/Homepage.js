import { useState, useEffect } from "react";
import "./styles.css"; 
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from "./images/logo.PNG"; 
import centralized from "./images/centralized.PNG";
import connect from "./images/connect.PNG";
import turn from "./images/turn.PNG";

export default function Homepage() {
    const [section, setSection] = useState("main");
  
    return (
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <img src={logo} className="image" alt="logo" style={{ marginLeft:"50px", width: "150px", height: "60px" }}/>
          </div>
          <nav>
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup" style={{ marginRight: "50px" }}>Sign Up</Link>
           </nav>
        </header>
  
        {section === "main" ? (
          <main className="main">
            {/* Sections with alternating image and text */}
            <section className="section">
            <img src={centralized} className="image" alt="logo" style={{ height:"300px", width:"500px", marginLeft:"40px"}}/>
              <div><h1 className="details1" style={{fontSize:"30px"}}>Centralize information</h1>
              <p className="details1">Organize everything in one space, from projects to company policies and beyond.</p>
              </div>
            </section>
            <section className="section reverse">
              <img src={connect} className="image" alt="logo" style={{ height:"300px", width:"500px", marginRight:"40px"}}/>
              <div><h1 className="details2" style={{fontSize:"30px"}}>Connect work across teams</h1>
              <p className="details2">Collaborate across teams with comments, mentions, notifications, and co-editing.</p>
              </div>
            </section>
            <section className="section">
            <img src={turn} className="image" alt="logo" style={{ height:"300px", width:"500px", marginLeft:"40px"}}/>
              <div><h1 className="details1" style={{fontSize:"30px"}}>Turn ideas into action faster</h1>
              <p className="details1">With whiteboards in Taskify, you can directly work with whiteboards to discuss your new big ideas.</p>
              </div>
            </section>
  
            {/* Get it for free button */}
            <p className="promo-text">Make quick decisions, gain alignment, and transform how your team works together.</p>
            <button onClick={() => setSection("auth")} className="btn get-free">
              Get it for Free
            </button>
          </main>
        ) : (
          /* Authentication Section */
          <div className="auth-section">
            <h2>Login</h2>
            <form className="form">
              <input type="text" placeholder="Username" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="btn submit"><Link to="/dashboard" className="btn login">Login</Link></button>
            </form>
            <button onClick={() => setSection("main")} className="back-link">Back to Main</button>
          </div>
        )}
  
        {/* Footer */}
        <footer className="footer">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </div>
    );
  }