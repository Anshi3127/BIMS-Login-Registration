import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
export default function AddStudent() {
  // use a single source for student form data
  const [formData, setFormData] = useState({ category: "", subCategory: "" });
  const { category, subCategory } = formData;

  // Example category to subcategory mapping — replace with your real data if available
  const categoryToSub = {
    General: ["General(UR)","EWS", "General - PWD" ],
    OBC: ["OBC - NCL", "OBC - CL","OBC - PWD"],
    "SC/ST": ["SC", "ST","SC - PWD","ST - PWD"],
  };
  const availableSubCategories = category ? categoryToSub[category] || [] : [];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ backgroundColor: "#f8f9fa" }}>
        <h4 className="mb-4">Add Student</h4>

        {/* Student Profile Section */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Student Profile</div>
          <div className="card-body">
            <form>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Student Name*</label>
                  <input type="text" className="form-control" placeholder="Enter Student Name" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Father Name</label>
                  <input type="text" className="form-control" placeholder="Enter Father Name" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Mother Name</label>
                  <input type="text" className="form-control" placeholder="Enter Mother Name" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Roll Number</label>
                  <input type="text" className="form-control" placeholder="Enter Roll Number" />
                </div>
                <div className="col-md-4">
  <label className="form-label">Category</label>
  <select
    className="form-select"
    value={formData.category}
    onChange={(e) =>
      setFormData({
        ...formData,
        category: e.target.value,
        subCategory: "",
      })
    }
  >
    <option value="">Select category</option>
    <option value="General">General</option>
    <option value="OBC">OBC</option>
    <option value="SC/ST">SC/ST</option>
  </select>
</div>

<div className="col-md-4">
  <label className="form-label">Sub Category</label>
  <select
    className="form-select"
    value={formData.subCategory}
    onChange={(e) =>
      setFormData({
        ...formData,
        subCategory: e.target.value,
      })
    }
    disabled={!formData.category} // disable until category selected
  >
    <option value="">Select sub category</option>

    {availableSubCategories.map((sub, index) => (
      <option key={index} value={sub}>
        {sub}
      </option>
    ))}
  </select>
</div>

                
                </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Sex*</label>
                  <select className="form-select">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Allotment Letter No</label>
                  <input type="text" className="form-control" placeholder="Enter Allotment No" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Seat Allotment Date</label>
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Admission Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Date of Issue</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Bond</label>
                  <select className="form-select">
                    <option>Bond</option>
                    <option>No Bond</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">10th Standard Details</label>
                  <input type="text" className="form-control" placeholder="10th Board" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">&nbsp;</label>
                  <input type="text" className="form-control" placeholder="Year of passing (10th)" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">&nbsp;</label>
                  <input type="text" className="form-control" placeholder="10th Percentage/CGPA" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">12th Standard Details</label>
                  <input type="text" className="form-control" placeholder="12th Board" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">&nbsp;</label>
                  <input type="text" className="form-control" placeholder="Year of passing (12th)" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">&nbsp;</label>
                  <input type="text" className="form-control" placeholder="12th Percentage/CGPA" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Entrance Type</label>
                  <select className="form-select">
                    <option>Select Entrance Type</option>
                    <option>NEET-UG</option>
                    <option>NEET-PG</option>
                    <option>State Medical Entrance</option>
                    <option>College Level Entrance</option>
                    <option>Management Quota</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Category Pool</label>
                  <select className="form-select">
                    <option> Select Central Pool </option>
                    <option>Central Pool Quota</option>
                    <option>State Quota</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">College Registration No</label>
                  <input type="text" className="form-control" placeholder="Enter registration no" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Sr No.</label>
                  <input type="text" className="form-control" placeholder="Enter Sr No." />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Select an option</label>
                  <select className="form-select">
                    <option>UG</option>
                    <option>PG</option>
                  </select>
                </div>
                
                 <div className="col-md-4">
                  <label className="form-label">Validity</label>
                  <input type="text" className="form-control" placeholder="Enter Validity" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Issuing Auth Board</label>
                  <input type="text" className="form-control" placeholder="Enter Issuing Auth Board" />
                </div>
              </div>


            </form>
          </div>
        </div>
        {/* Address */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Address </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Permanent Address</label>
                <input type="tel" className="form-control" placeholder="Enter Permanent Address" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Mailing Address</label>
                <input type="tel" className="form-control" placeholder="Enter Mailing Address" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Local Address</label>
                <input type="email" className="form-control" placeholder="Enter Local Address" />
              </div>
            </div>
          </div>
        </div>
         
        {/* Contact Info */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Student Contact Information</div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Mobile No*</label>
                <input type="tel" className="form-control" placeholder="Enter Mobile No" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone No</label>
                <input type="tel" className="form-control" placeholder="Enter Phone No" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email*</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>
            </div>
          </div>
        </div>

        {/* Parent Info */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Parent Contact Information</div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Mobile No</label>
                <input type="tel" className="form-control" placeholder="Enter Mobile No" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone No</label>
                <input type="tel" className="form-control" placeholder="Enter Phone No" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>
            </div>
          </div>
        </div>

        {/* Guardian Info */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Guardian Contact Information</div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Mobile No</label>
                <input type="tel" className="form-control" placeholder="Enter Mobile No" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone No</label>
                <input type="tel" className="form-control" placeholder="Enter Phone No" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>
            </div>
          </div>
        </div>


        {/* Surety Info */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Surety Information</div>
          <div className="card-body">
            <h6 className="mb-3">Surety 1</h6>
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Surety Name 1</label>
                <input type="text" className="form-control" placeholder="Enter Surety Name 1" />
              </div>
              <div className="col-md-3">
                <label className="form-label">ID of Surety 1</label>
                <input type="text" className="form-control" placeholder="Enter ID" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Mobile No 1</label>
                <input type="tel" className="form-control" placeholder="Enter Mobile No" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Email 1</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-3">
                <label className="form-label">Landline No 1</label>
                <input type="tel" className="form-control" placeholder="Enter Line no" />
              </div>
              
              <div className="col-md-9">
                <label className="form-label">Aadhaar no. 1</label>
                <input type="text" className="form-control" placeholder="Enter Aadhaar no." />
              </div>
              <div className="col-md-9">
                <label className="form-label">Address 1</label>
                <input type="text" className="form-control" placeholder="Enter Address" />
              </div>
            </div>

            <h6 className="mb-3">Surety 2</h6>
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Surety Name 2</label>
                <input type="text" className="form-control" placeholder="Enter Surety Name 2" />
              </div>
              <div className="col-md-3">
                <label className="form-label">ID of Surety 2</label>
                <input type="text" className="form-control" placeholder="Enter ID" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Mobile No 2</label>
                <input type="tel" className="form-control" placeholder="Enter Mobile No" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Email 2</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Landline No 2</label>
                <input type="tel" className="form-control" placeholder="Enter Line no" />
              </div>
              <div className="col-md-9">
                <label className="form-label">Aadhaar no. 2</label>
                <input type="text" className="form-control" placeholder="Enter Aadhaar no." />
              </div>
              <div className="col-md-9">
                <label className="form-label">Address 2</label>
                <input type="text" className="form-control" placeholder="Enter Address" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mb-4">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      
      </div>
    </div>
      
  
  );
}
