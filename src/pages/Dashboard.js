import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <h2 className="mb-4">Dashboard Overview</h2>
        <div className="row my-4">
          <div className="col-md-3">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Total Students</h5>
                <p className="card-text fs-4 fw-bold">120</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Total Bonds</h5>
                <p className="card-text fs-4 fw-bold">65</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Active Internships</h5>
                <p className="card-text fs-4 fw-bold">45</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-info mb-3">
              <div className="card-body">
                <h5 className="card-title">Postings</h5>
                <p className="card-text fs-4 fw-bold">32</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Welcome to BIMS</h5>
            <p className="text-secondary">
              Welcome to the Bond Information Management System Dashboard. Use the sidebar to navigate through different sections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}