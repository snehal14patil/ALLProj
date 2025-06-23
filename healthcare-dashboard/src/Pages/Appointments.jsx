import React, { useState } from 'react';
import '../Stylesheets/Appointments.css';

const initialAppointments = [
  { id: 1, patient: "John Doe", date: "2025-06-08", time: "10:30 AM", doctor: "Dr. Smith" },
  { id: 2, patient: "Jane Smith", date: "2025-06-09", time: "02:00 PM", doctor: "Dr. Adams" },
];

function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ patient: '', date: '', time: '', doctor: '' });

  const filtered = appointments.filter(a =>
    a.patient.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    if (editId) {
      setAppointments(appointments.map(a => a.id === editId ? { ...form, id: editId } : a));
    } else {
      setAppointments([...appointments, { ...form, id: Date.now() }]);
    }
    setModalOpen(false);
    setForm({ patient: '', date: '', time: '', doctor: '' });
    setEditId(null);
  };

  const handleEdit = (appt) => {
    setForm(appt);
    setEditId(appt.id);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <div className="appointment-container">
      <h3>Appointments</h3>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search patient"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Add Appointment</button>
      </div>

      <table className="table mt-3 table-hover">
        <thead>
          <tr>
            <th>Patient</th><th>Date</th><th>Time</th><th>Doctor</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(appt => (
            <tr key={appt.id}>
              <td>{appt.patient}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.doctor}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(appt)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(appt.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h5>{editId ? 'Edit' : 'Add'} Appointment</h5>
            <input type="text" placeholder="Patient Name" value={form.patient} onChange={e => setForm({ ...form, patient: e.target.value })} />
            <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            <input type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
            <input type="text" placeholder="Doctor Name" value={form.doctor} onChange={e => setForm({ ...form, doctor: e.target.value })} />
            <div className="modal-actions">
              <button className="btn btn-success" onClick={handleSave}>Save</button>
              <button className="btn btn-secondary" onClick={() => { setModalOpen(false); setEditId(null); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
