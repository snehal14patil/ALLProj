import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
  FaCalendarAlt,
  FaUserCog,
  FaFileMedicalAlt,
  FaMoneyBillWave,
  FaBell
} from 'react-icons/fa';
import '../Stylesheets/SidebarLayout.css';

function SidebarLayout() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="layout">
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h4><button className="toggle-btn ms-2" onClick={toggleSidebar}>
    <FaBars />
  </button>{collapsed ? "🏥" : "🏥 HealthCare"}</h4>
          
   </div>
          {!collapsed && <small>{email}</small>}
       
        <ul className="nav-links">
          <li>
            <Link to="dashboard">
              <FaTachometerAlt className="icon" /> {!collapsed && 'Dashboard'}
            </Link>
          </li>
          {role === "Admin" && (
            <li>
              <Link to="patient-records">
                <FaUsers className="icon" /> {!collapsed && 'Patients Records'}
              </Link>
            </li>
          )}
          <li>
            <Link to="appointments">
              <FaCalendarAlt className="icon" /> {!collapsed && 'Appointments Overview'}
            </Link>
          </li>
          <li>
            <Link to="health-metrics">
              <FaChartBar className="icon" /> {!collapsed && 'Health Metrics'}
            </Link>
          </li>
          <li>
            <Link to="user-management">
              <FaUserCog className="icon" /> {!collapsed && 'User Management'}
            </Link>
          </li>
          <li>
            <Link to="analytics-reports">
              <FaChartBar className="icon" /> {!collapsed && 'Analytics / Reports'}
            </Link>
          </li>
          <li>
            <Link to="medical-history">
              <FaFileMedicalAlt className="icon" /> {!collapsed && 'Medical History'}
            </Link>
          </li>
          <li>
            <Link to="billing-payments">
              <FaMoneyBillWave className="icon" /> {!collapsed && 'Billing & Payments'}
            </Link>
          </li>
          <li>
            <Link to="notifications-alert">
              <FaBell className="icon" /> {!collapsed && 'Notifications & Alerts'}
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">
              <FaSignOutAlt className="icon" /> {!collapsed && 'Logout'}
            </button>
          </li>
        </ul>
      
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default SidebarLayout;
