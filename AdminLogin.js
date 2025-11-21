import React from "react";
import { Link } from "react-router-dom";

const Adminlogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin login submitted (demo only – no backend yet).");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          BIMS Admin Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Admin Email / Username
            </label>
            <input
              type="text"
              placeholder="Enter admin email or username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
          >
            Login as Admin
          </button>
        </form>

        {/* ONLY this link for registration */}
        <p className="text-sm text-center mt-4 text-gray-600">
  New Admin?{" "}
  <Link
    to="/admin/register"
    className="text-purple-600 font-semibold hover:underline"
  >
    Register Admin
  </Link>
</p>


        <p className="text-xs text-center text-gray-500 mt-2">
          <Link to="/" className="hover:underline">
            Back to Student Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Adminlogin;
