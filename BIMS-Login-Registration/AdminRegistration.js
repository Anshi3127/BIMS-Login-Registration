import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    // Personal Details
    adminId: "",
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",

    // Authentication & Security
    username: "",
    password: "",
    confirmPassword: "",
    securityQuestionChoice: "",
    customSecurityQuestion: "",
    securityAnswer: "",

    // Role & Access Control
    role: "",
    department: "",
    departmentOther: "",
    permissions: {
      read: false,
      write: false,
      edit: false,
      delete: false,
    },

    // System Details
    registrationDate: "",
    accountStatus: "active",
    lastLogin: "",
  });

  const [message, setMessage] = useState("");

  // Auto-generate admin ID + registration date
  useEffect(() => {
    const now = new Date();
    setFormData((prev) => ({
      ...prev,
      adminId: `ADM-${now.getTime()}`,
      registrationDate: now.toLocaleDateString(),
      lastLogin: "Not logged in yet",
    }));
  }, []);

  const inputClass =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    // Compose final security question
    const finalSecurityQuestion =
      formData.securityQuestionChoice === "custom"
        ? formData.customSecurityQuestion
        : formData.securityQuestionChoice;

    // Simple validation
    const requiredFields = [
      "fullName",
      "dob",
      "gender",
      "email",
      "mobile",
      "address",
      "username",
      "password",
      "confirmPassword",
      "securityAnswer",
      "role",
      "department",
      "registrationDate",
      "accountStatus",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setMessage("⚠️ Please fill all required fields.");
        return;
      }
    }

    if (!finalSecurityQuestion) {
      setMessage("⚠️ Please choose or enter a security question.");
      return;
    }

    if (
      formData.department === "other" &&
      formData.departmentOther.trim() === ""
    ) {
      setMessage("⚠️ Please specify the department.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("⚠️ Password and Confirm Password do not match.");
      return;
    }

    setMessage("✅ Admin registered successfully (frontend demo only).");

    const dataToSubmit = {
      ...formData,
      securityQuestion: finalSecurityQuestion,
      department:
        formData.department === "other"
          ? formData.departmentOther
          : formData.department,
    };

    console.log("Admin registration data:", dataToSubmit);
  };

  const resetForm = () => {
    setFormData((prev) => ({
      ...prev,
      fullName: "",
      dob: "",
      gender: "",
      email: "",
      mobile: "",
      address: "",
      username: "",
      password: "",
      confirmPassword: "",
      securityQuestionChoice: "",
      customSecurityQuestion: "",
      securityAnswer: "",
      role: "",
      department: "",
      departmentOther: "",
      permissions: {
        read: false,
        write: false,
        edit: false,
        delete: false,
      },
      accountStatus: "active",
    }));
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Admin Registration
        </h2>

        {message && (
          <p
            className={`mb-4 text-center font-semibold text-sm ${
              message.startsWith("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
          onSubmit={handleSubmit}
        >
          {/* ========== Personal Details ========== */}
          <div className="col-span-2 border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Personal Details
            </h3>
          </div>

          {/* Admin ID */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Admin ID (Auto Generated)
            </label>
            <input
              type="text"
              name="adminId"
              value={formData.adminId}
              disabled
              className={`${inputClass} bg-gray-100 cursor-not-allowed`}
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter full name"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter official email"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Mobile Phone No.
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter mobile number"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Physical Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`${inputClass} min-h-[70px]`}
              placeholder="Enter full address"
            />
          </div>

          {/* ========== Authentication & Security ========== */}
          <div className="col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Authentication &amp; Security
            </h3>
          </div>

          {/* Username */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={inputClass}
              placeholder="Choose a username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={inputClass}
              placeholder="Re-enter password"
            />
          </div>

          {/* Security Question Dropdown */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Security Question
            </label>
            <select
              name="securityQuestionChoice"
              value={formData.securityQuestionChoice}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a question</option>
              <option value="What is your first school name?">
                What is your first school name?
              </option>
              <option value="What is your favourite teacher's name?">
                What is your favourite teacher&apos;s name?
              </option>
              <option value="What is your birth city?">
                What is your birth city?
              </option>
              <option value="What is your mother's maiden name?">
                What is your mother&apos;s maiden name?
              </option>
              <option value="What is your childhood nickname?">
                What is your childhood nickname?
              </option>
              <option value="custom">Choose your own question</option>
            </select>
          </div>

          {/* Custom Security Question (if custom selected) */}
          {formData.securityQuestionChoice === "custom" && (
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-gray-700">
                Your Own Security Question
              </label>
              <input
                type="text"
                name="customSecurityQuestion"
                value={formData.customSecurityQuestion}
                onChange={handleChange}
                className={inputClass}
                placeholder="Type your own question"
              />
            </div>
          )}

          {/* Security Answer */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Security Answer
            </label>
            <input
              type="text"
              name="securityAnswer"
              value={formData.securityAnswer}
              onChange={handleChange}
              className={inputClass}
              placeholder="Answer to the selected security question"
            />
          </div>

          {/* ========== Role & Access Control ========== */}
          <div className="col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Role &amp; Access Control
            </h3>
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Role / Designation
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select role</option>
              <option value="super_admin">Super Admin</option>
              <option value="sub_admin">Sub Admin</option>
            </select>
          </div>

          {/* Department dropdown + other */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select department</option>
              <option value="Administration">Administration</option>
              <option value="Examination Cell">Examination Cell</option>
              <option value="IT Department">IT Department</option>
              <option value="Accounts Department">Accounts Department</option>
              <option value="Admission Cell">Admission Cell</option>
              <option value="Library">Library</option>
              <option value="other">Other (Specify)</option>
            </select>
          </div>

          {formData.department === "other" && (
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-gray-700">
                Specify Department
              </label>
              <input
                type="text"
                name="departmentOther"
                value={formData.departmentOther}
                onChange={handleChange}
                className={inputClass}
                placeholder="Type department name"
              />
            </div>
          )}

          {/* Permissions */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Access Level / Permissions
            </label>
            <div className="flex flex-wrap gap-4">
              {["read", "write", "edit", "delete"].map((perm) => (
                <label key={perm} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={perm}
                    checked={formData.permissions[perm]}
                    onChange={handlePermissionChange}
                  />
                  <span className="capitalize">{perm}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ========== System Details ========== */}
          <div className="col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              System Details
            </h3>
          </div>

          {/* Date of Registration */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Date of Registration (Auto)
            </label>
            <input
              type="text"
              name="registrationDate"
              value={formData.registrationDate}
              disabled
              className={`${inputClass} bg-gray-100 cursor-not-allowed`}
            />
          </div>

          {/* Account Status */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Account Status
            </label>
            <select
              name="accountStatus"
              value={formData.accountStatus}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>

          {/* Last Login */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Last Login Time
            </label>
            <input
              type="text"
              name="lastLogin"
              value={formData.lastLogin}
              disabled
              className={`${inputClass} bg-gray-100 cursor-not-allowed`}
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
            >
              Register
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 rounded-lg border border-purple-400 text-purple-600 font-semibold hover:bg-purple-50 transition duration-300"
            >
              Reset
            </button>

            <Link
              to="/admin/login"
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition duration-300 flex items-center"
            >
              Back to Admin Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRegistration;
