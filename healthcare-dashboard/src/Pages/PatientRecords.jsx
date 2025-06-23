import React, { useState } from 'react';
import '../Stylesheets/PatientRecords.css';
import SidebarLayout from '../Pages/SidebarLayout';

const samplePatients = [
  { id: 1, name: 'John Doe', age: 35, gender: 'Male', condition: 'Diabetes' },
  { id: 2, name: 'Jane Smith', age: 29, gender: 'Female', condition: 'Hypertension' },
];

function PatientRecords() {
  const [patients, setPatients] = useState(samplePatients);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', age: '', gender: '', condition: '' });

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    if (editing !== null) {
      const updated = patients.map(p => p.id === editing ? { ...form, id: editing } : p);
      setPatients(updated);
    } else {
      setPatients([...patients, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
    setForm({ name: '', age: '', gender: '', condition: '' });
    setEditing(null);
  };

  const handleEdit = (patient) => {
    setForm(patient);
    setEditing(patient.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  return (
    
    <div className="patient-container">
      <h3>Patient Records</h3>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Patient</button>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Gender</th><th>Condition</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.condition}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(p)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h5>{editing ? 'Edit' : 'Add'} Patient</h5>
            <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input type="number" placeholder="Age" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
            <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input type="text" placeholder="Condition" value={form.condition} onChange={e => setForm({ ...form, condition: e.target.value })} />
            <div className="modal-actions">
              <button className="btn btn-success" onClick={handleSave}>Save</button>
              <button className="btn btn-secondary" onClick={() => { setShowModal(false); setEditing(null); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
}

export default PatientRecords;
