import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUserModal = ({ showModal, closeModal, userData }) => {
  const [name, setName] = useState(userData.name || "");
  const [email, setEmail] = useState(userData.email || "");
  const [role, setRole] = useState(userData.role || "User"); // Default to 'User'
  const navigate = useNavigate();
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://localhost:44390/api/updateuser/${userData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          role,
        }),
      });
      const data = await response.json();
      if (data.Status === "0") {
        alert("User updated successfully!");
        closeModal();
        navigate("/UserManagement"); 
      } else {
        alert("Failed to update user. Please try again.");
      }
    } catch (error) {
      alert("Error updating user.");
    }
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Edit User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <div>
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  checked={role === "Admin"}
                  onChange={() => setRole("Admin")}
                />
                Admin
                <input
                  type="radio"
                  name="role"
                  value="User"
                  checked={role === "User"}
                  onChange={() => setRole("User")}
                />
                User
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
            <button type="button" onClick={closeModal} className="btn btn-secondary">Cancel</button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditUserModal;
