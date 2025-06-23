import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import '../Stylesheets/Dashboard.css';

const barData = [
  { name: "Jan", patients: 30 },
  { name: "Feb", patients: 45 },
  { name: "Mar", patients: 50 },
];

const pieData = [
  { name: "Cardiology", value: 25 },
  { name: "Neurology", value: 15 },
  { name: "Orthopedics", value: 20 },
  { name: "General", value: 40 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="mb-4">Healthcare Dashboard</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card summary-card">
          <h5>Total Patients</h5>
          <p>1,235</p>
        </div>
        <div className="card summary-card">
          <h5>Appointments Today</h5>
          <p>58</p>
        </div>
        <div className="card summary-card">
          <h5>New Admissions</h5>
          <p>12</p>
        </div>
        <div className="card summary-card">
          <h5>Pending Lab Results</h5>
          <p>7</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-box">
          <h5>Monthly Patient Visits</h5>
          <BarChart width={400} height={250} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Bar dataKey="patients" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="chart-box">
          <h5>Patients by Department</h5>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      <div className="recent-section mt-4">
        <h5>Recent Appointments</h5>
        <ul className="list-group">
          <li className="list-group-item">John Doe - 10:00 AM - Cardiology</li>
          <li className="list-group-item">Jane Smith - 11:30 AM - Neurology</li>
          <li className="list-group-item">Mark Wilson - 1:00 PM - Orthopedics</li>
        </ul>
      </div>

      {/* Alerts */}
      <div className="alert-section mt-4">
        <h5>Alerts & Notifications</h5>
        <div className="alert alert-warning">Blood report pending for patient ID #1245</div>
        <div className="alert alert-danger">Critical: Oxygen level low in room 305</div>
      </div>
    </div>
  );
}

export default Dashboard;
