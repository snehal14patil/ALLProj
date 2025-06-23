import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import AdminPanel from "./Pages/Adminpanel";
import PatientRecords from "./Pages/PatientRecords";
import SidebarLayout from "./Pages/SidebarLayout";
import Appointments from "./Pages/Appointments";
import MedicalHistory from "./Pages/MedicalHistory";
import HealthMetrics from "./Pages/HealthMetrics";
import UserManagement from "./Pages/UserManagement";
import AnalyticsReports from "./Pages/AnalyticsReports";
import BillingPayments from "./Pages/BillingPayments";
import NotificationsAlert from "./Pages/NotificationsAlerts";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<SidebarLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin" element={<AdminPanel />} />
          <Route path="patient-records" element={<PatientRecords />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="medical-history" element={<MedicalHistory />} />
          <Route path="health-metrics" element={<HealthMetrics />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="analytics-reports" element={<AnalyticsReports />} />
          <Route path="billing-payments" element={<BillingPayments />} />
          <Route path="notifications-alert" element={<NotificationsAlert />} />
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;