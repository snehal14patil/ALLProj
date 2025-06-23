import React from 'react';
import '../Stylesheets/AnalyticsReports.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: 'Jan', patients: 80, appointments: 120 },
  { month: 'Feb', patients: 100, appointments: 150 },
  { month: 'Mar', patients: 130, appointments: 170 },
  { month: 'Apr', patients: 90, appointments: 140 },
  { month: 'May', patients: 160, appointments: 200 },
];

function AnalyticsReports() {
  return (
    <div className="analytics-container">
      <h3>Analytics & Reports</h3>

      <div className="report-cards">
        <div className="report-card">
          <h5>Total Patients</h5>
          <p className="value">1,250</p>
        </div>
        <div className="report-card">
          <h5>Total Appointments</h5>
          <p className="value">2,430</p>
        </div>
        <div className="report-card">
          <h5>Revenue</h5>
          <p className="value">₹4,85,000</p>
        </div>
      </div>

      <div className="chart-wrapper">
        <h5 className="mt-4">Monthly Patient & Appointment Trends</h5>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="patients" stroke="#8884d8" name="Patients" />
            <Line type="monotone" dataKey="appointments" stroke="#82ca9d" name="Appointments" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsReports;
