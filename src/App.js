import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Teams from './pages/Teams';
import Trash from './pages/Trash';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar user={user} onLogout={handleLogout} />}
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/tasks" 
          element={isAuthenticated ? <Tasks user={user} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/teams" 
          element={isAuthenticated ? <Teams user={user} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/trash" 
          element={isAuthenticated ? <Trash user={user} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;