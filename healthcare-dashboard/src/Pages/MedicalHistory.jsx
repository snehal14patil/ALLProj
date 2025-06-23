import React, { useState } from 'react';
import '../Stylesheets/MedicalHistory.css';

const dummyData = [
  { id: 1, patient: 'John Doe', condition: 'Diabetes', diagnosisDate: '2022-05-12', medication: 'Metformin' },
  { id: 2, patient: 'Jane Smith', condition: 'Hypertension', diagnosisDate: '2021-11-03', medication: 'Lisinopril' },
  { id: 3, patient: 'Robert King', condition: 'Asthma', diagnosisDate: '2020-02-18', medication: 'Albuterol' },
];

function MedicalHistory() {
  const [search, setSearch] = useState('');

  const filteredRecords = dummyData.filter(record =>
    record.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="medical-container">
      <div className="medical-header">
        <h3>Medical History</h3>
        <input
          type="text"
          placeholder="Search by patient name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Condition</th>
            <th>Diagnosis Date</th>
            <th>Medication</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map(record => (
            <tr key={record.id}>
              <td>{record.patient}</td>
              <td>{record.condition}</td>
              <td>{record.diagnosisDate}</td>
              <td>{record.medication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicalHistory;
