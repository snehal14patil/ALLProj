import React from 'react';
import '../Stylesheets/NotificationsAlerts.css';
import { Bell, AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

const notifications = [
  { id: 1, type: "info", title: "New Appointment", message: "John Doe has booked an appointment.", time: "2 mins ago" },
  { id: 2, type: "success", title: "Payment Received", message: "₹2500 payment from Alice confirmed.", time: "10 mins ago" },
  { id: 3, type: "warning", title: "Pending Bill", message: "Jane Smith has ₹1800 pending.", time: "1 hour ago" },
  { id: 4, type: "error", title: "Missed Appointment", message: "Bob Lee missed his scheduled appointment.", time: "2 hours ago" },
];

const iconMap = {
  info: <Info size={20} color="#3b82f6" />,
  success: <CheckCircle size={20} color="#22c55e" />,
  warning: <AlertCircle size={20} color="#facc15" />,
  error: <XCircle size={20} color="#ef4444" />,
};

function NotificationsAlerts() {
  return (
    <div className="notifications-container">
      <div className="header">
        <h3><Bell className="me-2" size={24} /> Notifications</h3>
      </div>

      <div className="notification-list">
        {notifications.map(note => (
          <div key={note.id} className={`notification-item ${note.type}`}>
            <div className="icon">{iconMap[note.type]}</div>
            <div className="details">
              <strong>{note.title}</strong>
              <p>{note.message}</p>
              <span className="time">{note.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsAlerts;
