import React, { useState } from "react";

const Registration = () => {
  const [message, setMessage] = useState("");

  // All form fields
  const [formData, setFormData] = useState({
    // Student Profile
    studentName: "",
    fatherName: "",
    motherName: "",
    category: "",
    subCategory: "",
    sex: "",
    allotmentLetterNo: "",
    seatAllotmentDate: "",
    collegeRegNo: "",
    admissionDate: "",
    entranceType: "",

    // Address
    permanentAddress: "",
    localAddress: "",

    // Student Contact
    studentEmail: "",
    studentMobile: "",

    // Guardian Contact
    guardianEmail: "",
    guardianMobile: "",

    // Education – 10th
    tenthBoard: "",
    tenthSchool: "",
    tenthYear: "",
    tenthPercentage: "",

    // Education – 12th
    twelfthBoard: "",
    twelfthSchool: "",
    twelfthYear: "",
    twelfthPercentage: "",

    // Account Security
    password: "",
    confirmPassword: "",
  });

  // ✅ Category → Sub Category options
  const subCategoryOptions = {
    General: ["General (UR)", "EWS", "General - PWD"],
    OBC: ["OBC - NCL", "OBC - CL", "OBC - PWD"],
    "SC/ST": ["SC", "ST", "SC - PWD", "ST - PWD"],
  };

  // ✅ This gives the list of subcategories for the selected category
  const availableSubCategories = formData.category
    ? subCategoryOptions[formData.category]
    : [];

  // ✅ Entrance types (ONLY medical-related, no JEE)
  const entranceTypes = [
    "NEET-UG",
    "NEET-PG",
    "INI-CET",
    "State Medical Entrance",
    "College Level Entrance",
    "Management Quota",
    "Other",
  ];

  const inputClass =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm";

  const handleChange = (e) => {
    const { name, value } = e.target;

    // When category changes, also reset subCategory
    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        subCategory: "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const requiredFields = [
      "studentName",
      "fatherName",
      "category",
      "sex",
      "studentEmail",
      "studentMobile",
      "entranceType",
      "tenthBoard",
      "tenthYear",
      "tenthPercentage",
      "twelfthBoard",
      "twelfthYear",
      "twelfthPercentage",
      "password",
      "confirmPassword",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setMessage("⚠️ Please fill all required fields.");
        return;
      }
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("⚠️ Password and Confirm Password do not match.");
      return;
    }

    setMessage("✅ Student registered successfully (frontend demo only).");
    console.log("Student registration data:", formData);
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      fatherName: "",
      motherName: "",
      category: "",
      subCategory: "",
      sex: "",
      allotmentLetterNo: "",
      seatAllotmentDate: "",
      collegeRegNo: "",
      admissionDate: "",
      entranceType: "",
      permanentAddress: "",
      localAddress: "",
      studentEmail: "",
      studentMobile: "",
      guardianEmail: "",
      guardianMobile: "",
      tenthBoard: "",
      tenthSchool: "",
      tenthYear: "",
      tenthPercentage: "",
      twelfthBoard: "",
      twelfthSchool: "",
      twelfthYear: "",
      twelfthPercentage: "",
      password: "",
      confirmPassword: "",
    });
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-green-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Student Registration Form
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
          {/* ========== Student Profile ========== */}
          <div className="col-span-2 border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Student Profile
            </h3>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Father Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter father's name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Mother Name
            </label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter mother's name"
            />
          </div>

          {/* Category dropdown */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC/ST">SC/ST</option>
            </select>
          </div>

          {/* Sub Category dropdown */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Sub Category
            </label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className={inputClass}
              disabled={!formData.category}
            >
              <option value="">
                {formData.category
                  ? "Select sub category"
                  : "Select category first"}
              </option>

              {availableSubCategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {/* Sex */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Sex
            </label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select sex</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Allotment Letter No */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Allotment Letter No.
            </label>
            <input
              type="text"
              name="allotmentLetterNo"
              value={formData.allotmentLetterNo}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter allotment letter no."
            />
          </div>

          {/* Seat Allotment Date */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Seat Allotment Date
            </label>
            <input
              type="date"
              name="seatAllotmentDate"
              value={formData.seatAllotmentDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* College Registration No */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              College Registration No.
            </label>
            <input
              type="text"
              name="collegeRegNo"
              value={formData.collegeRegNo}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter college registration no."
            />
          </div>

          {/* Admission Date */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Admission Date
            </label>
            <input
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Entrance Type */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Entrance Type
            </label>
            <select
              name="entranceType"
              value={formData.entranceType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select entrance type</option>
              {entranceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* ========== Address Details ========== */}
          <div className="col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Address Details
            </h3>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Permanent Address
            </label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className={`${inputClass} min-h-[60px]`}
              placeholder="Enter permanent address"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Local Address
            </label>
            <textarea
              name="localAddress"
              value={formData.localAddress}
              onChange={handleChange}
              className={`${inputClass} min-h-[60px]`}
              placeholder="Enter local address (if different)"
            />
          </div>

          {/* ========== Contact Information ========== */}
          <div className="col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Contact Information
            </h3>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Student Email
            </label>
            <input
              type="email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter student email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Student Mobile No.
            </label>
            <input
              type="text"
              name="studentMobile"
              value={formData.studentMobile}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter student mobile no."
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Guardian Email
            </label>
            <input
              type="email"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter guardian email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Guardian Mobile No.
            </label>
            <input
              type="text"
              name="guardianMobile"
              value={formData.guardianMobile}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter guardian mobile no."
            />
          </div>

          {/* ========== Education Qualification ========== */}
          <div className="col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Education Qualification
            </h3>
          </div>

          {/* 10th */}
          <div className="md:col-span-2 font-semibold text-gray-600">
            10th Standard Details
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              10th Board
            </label>
            <input
              type="text"
              name="tenthBoard"
              value={formData.tenthBoard}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. CBSE, ICSE, State Board"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              10th School Name
            </label>
            <input
              type="text"
              name="tenthSchool"
              value={formData.tenthSchool}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter school name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Year of Passing (10th)
            </label>
            <input
              type="number"
              name="tenthYear"
              value={formData.tenthYear}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. 2020"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              10th Percentage / CGPA
            </label>
            <input
              type="text"
              name="tenthPercentage"
              value={formData.tenthPercentage}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. 89.4 or 9.2 CGPA"
            />
          </div>

          {/* 12th */}
          <div className="md:col-span-2 font-semibold text-gray-600 mt-2">
            12th Standard Details
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              12th Board
            </label>
            <input
              type="text"
              name="twelfthBoard"
              value={formData.twelfthBoard}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. CBSE, State Board"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              12th School / College Name
            </label>
            <input
              type="text"
              name="twelfthSchool"
              value={formData.twelfthSchool}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter school/college name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Year of Passing (12th)
            </label>
            <input
              type="number"
              name="twelfthYear"
              value={formData.twelfthYear}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. 2022"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              12th Percentage
            </label>
            <input
              type="text"
              name="twelfthPercentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. 92.5"
            />
          </div>

          {/* ========== Set Password ========== */}
          <div className="col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Account Security – Set Password
            </h3>
          </div>

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
              placeholder="Create a password"
            />
          </div>

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

          {/* Buttons */}
          <div className="col-span-2 flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Register
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 rounded-lg border border-green-400 text-green-600 font-semibold hover:bg-green-50 transition duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
