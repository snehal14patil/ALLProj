import React, { useState } from 'react';
import '../Stylesheets/UserManagement.css';

const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@test.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@test.com', role: 'Patient' },
  { id: 3, name: 'Alice Johnson', email: 'alice@test.com', role: 'Doctor' },
];

function UserManagement() {
  const [search, setSearch] = useState('');

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-container">
      <div className="user-header">
        <h3>User Management</h3>
        <input
          type="text"
          className="form-control search-box"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary">+ Add User</button>
      </div>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="text-end">
                <button className="btn btn-sm btn-warning me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
