import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/Login";
import Home from "./pages/Home";

const App = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const roleFromToken = token.split(" ")[1];
      setRole(roleFromToken);
    }
  }, []);

  const handleLogin = (role) => {
    setRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRole(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={role ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/home"
          element={role ? <Home role={role} onLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
