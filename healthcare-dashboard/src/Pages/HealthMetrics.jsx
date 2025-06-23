import React from 'react';
import '../Stylesheets/HealthMetrics.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const metricsData = [
  { day: 'Mon', value: 120 },
  { day: 'Tue', value: 135 },
  { day: 'Wed', value: 110 },
  { day: 'Thu', value: 140 },
  { day: 'Fri', value: 125 },
  { day: 'Sat', value: 130 },
  { day: 'Sun', value: 118 },
];

function HealthMetrics() {
  return (
    <div className="metrics-container">
      <h3>Health Metrics Overview</h3>

      <div className="metric-cards">
        <div className="metric-card">
          <h5>Heart Rate</h5>
          <p className="value">76 bpm</p>
        </div>
        <div className="metric-card">
          <h5>Blood Pressure</h5>
          <p className="value">120/80 mmHg</p>
        </div>
        <div className="metric-card">
          <h5>Glucose Level</h5>
          <p className="value">95 mg/dL</p>
        </div>
      </div>

      <div className="chart-section">
        <h5 className="mt-4">Weekly Blood Pressure Trend</h5>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={metricsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default HealthMetrics;
