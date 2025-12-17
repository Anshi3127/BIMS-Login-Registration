import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBriefcase,
  FaChevronDown,
  FaChevronRight,
  FaChartBar, // new icon for Report
} from "react-icons/fa";

export default function Sidebar() {
  // Dropdown toggle states
  const [openStudents, setOpenStudents] = useState(false);
  const [openInternships, setOpenInternships] = useState(false);
  const [openPostings, setOpenPostings] = useState(false);
  const [openJoinings, setOpenJoinings] = useState(false);
  const [openBonds, setOpenBonds] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);
  const [openReport, setOpenReport] = useState(false); // new state

  return (
    <div
      className="bg-dark text-white vh-100 p-3"
      style={{ width: "250px", fontSize: "0.9rem" }}
    >
      <div className="mb-4 text-center">
        <h5 className="text-uppercase text-info">BIMS</h5>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/dashboard" className="nav-link text-white d-flex align-items-center">
            <FaTachometerAlt className="me-2" /> Dashboard
          </Link>
        </li>

        <li className="text-secondary mt-3 mb-2">MANAGE</li>

        {/* Students Dropdown */}
        <li className="nav-item">
          <button
            className="btn btn-toggle align-items-center rounded collapsed text-white w-100 text-start d-flex justify-content-between"
            onClick={() => setOpenStudents((s) => !s)}
          >
            <span><FaUserGraduate className="me-2" /> Students</span>
            {openStudents ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openStudents && (
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
              <li>
                <Link to="/add-student" className="nav-link text-white-50">Add Student</Link>
              </li>
              <li>
                <Link to="/view-students" className="nav-link text-white-50">View All Students</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Manage Internships */}
        <li className="nav-item mt-2">
          <button
            className="btn btn-toggle text-white w-100 text-start d-flex justify-content-between"
            onClick={() => setOpenInternships((s) => !s)}
          >
            <span><FaBriefcase className="me-2" /> Manage Internships</span>
            {openInternships ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openInternships && (
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
              <li>
                <Link to="/add-internship" className="nav-link text-white-50">Add Internship</Link>
              </li>
              <li>
                <Link to="/view-internships" className="nav-link text-white-50">View Internships</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Manage Postings */}
        <li className="nav-item mt-2">
          <button
            className="btn btn-toggle text-white w-100 text-start d-flex justify-content-between"
            onClick={() => setOpenPostings((s) => !s)}
          >
            <span><FaBriefcase className="me-2" /> Manage Postings</span>
            {openPostings ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openPostings && (
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
              <li>
                <Link to="/assign-postings" className="nav-link text-white-50">Assign Postings</Link>
              </li>
              <li>
                <Link to="/view-posting-details" className="nav-link text-white-50">View Posting Details</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Manage Joinings */}
        <li className="nav-item mt-2">
          <button
            className="btn btn-toggle text-white w-100 text-start d-flex justify-content-between"
            onClick={() => setOpenJoinings((s) => !s)}
          >
            <span><FaBriefcase className="me-2" /> Manage Joinings</span>
            {openJoinings ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openJoinings && (
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
              <li>
                <Link to="/add-joining" className="nav-link text-white-50">Add Joining</Link>
              </li>
              <li>
                <Link to="/view-joinings" className="nav-link text-white-50">View Joinings</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Manage Bonds */}
        <li className="nav-item mt-2">
          <button
            className="btn btn-toggle text-white w-100 text-start d-flex justify-content-between"
            onClick={() => setOpenBonds((s) => !s)}
          >
            <span><FaBriefcase className="me-2" /> Manage Bonds</span>
            {openBonds ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openBonds && (
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
              <li>
                <Link to="/assign-bonds" className="nav-link text-white-50">Assign Bonds</Link>
              </li>
              <li>
                <Link to="/completed-bonds" className="nav-link text-white-50">Completed Bonds</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Notice Master */}
        <li className="nav-item mt-2">
          <button
            className="btn btn-toggle text-white w-100 text-start d-flex justify-content-between"
            onClick={() => setOpenNotice((s) => !s)}
          >
            <span><FaBriefcase className="me-2" /> Notice Master</span>
            {openNotice ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openNotice && (
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
              <li>
                <Link to="/assign-notice" className="nav-link text-white-50">Assign Notices</Link>
              </li>
              <li>
                <Link to="/view-notices" className="nav-link text-white-50">Added Notices</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Report Dropdown (new) */}
        <li className="nav-item mt-3">
          <button
            className="btn btn-toggle text-white w-100 text-start d-flex justify-content-between"
            onClick={() => setOpenReport((s) => !s)}
          >
            <span><FaChartBar className="me-2" /> Report</span>
            {openReport ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openReport && (
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
              <li>
                <Link to="/generate-report" className="nav-link text-white-50">Generate Report</Link>
              </li>
              {/* add more report-related links here if needed */}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
