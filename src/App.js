import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Student pages
import Login from "./components/login/login";
import Registration from "./components/registration/registration";

// Admin pages
import AdminLogin from "./components/admin/AdminLogin";
import AdminRegistration from "./components/admin/AdminRegistration";

function App() {
  return (
    <Router>
      <Routes>
        {/* ===== Student Routes ===== */}
        {/* Default page = Student Login */}
        <Route path="/" element={<Login />} />
        <Route path="/student/login" element={<Login />} />
        <Route path="/student/register" element={<Registration />} />
        {/* You can still keep /register for convenience */}
        <Route path="/register" element={<Registration />} />

        {/* ===== Admin Routes ===== */}
        {/* Admin Login opens separately */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
