import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/Sidebar"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [userRole, setUserRole] = useState("2"); // Default to "User" role
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://localhost:44390/api/getusermanagedata");
        const data = await response.json();
        if (data.Status === "0") {
          setUsers(data.Users);
        } else {
          setError(data.Message);
        }
      } catch (error) {
        setError("Failed to fetch users. Please try again.");
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    const user = users.find((user) => user.Id === userId);
    if (user) {
      setSelectedUser(user);
      setUpdatedName(user.Name);
      setUpdatedEmail(user.EmailID);
      setUserRole(user.Role || "2"); // Default to "User" if role is missing
      setShowModal(true);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch("https://localhost:44390/api/deleteusermaangedata", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Id: userId }),
        });

        const data = await response.json();
        if (data.Status === "0") {
          setUsers(users.filter((user) => user.Id !== userId));
        } else {
          setError(data.Message);
        }
      } catch (error) {
        setError("Failed to delete user. Please try again.");
      }
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const updatedUser = {
      Id: selectedUser.Id,
      Name: updatedName,
      EmailID: updatedEmail,
      Role: userRole,
    };

    try {
      const response = await fetch("https://localhost:44390/api/updateusermaangedata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();

      if (data.Status === "0") {
        setUsers(users.map((user) => (user.Id === updatedUser.Id ? updatedUser : user)));
        setShowModal(false);
      } else {
        setError(data.Message);
      }
    } catch (error) {
      setError("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="user-management-page">
      <Sidebar />
      <div className={`content-area ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="container">
          <h2>User Management</h2>
          {error && <p className="text-danger">{error}</p>}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.Id}>
                    <td>{user.Id}</td>
                    <td>{user.Name}</td>
                    <td>{user.EmailID}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => handleEdit(user.Id)}>
                        Edit
                      </button>
                      <button className="btn btn-danger ms-2" onClick={() => handleDelete(user.Id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Editing User */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit User</h2>
            <form onSubmit={handleUpdateUser}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
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
                    value="1"
                    checked={userRole === "1"}
                    onChange={(e) => setUserRole(e.target.value)}
                  />{" "}
                  Admin
                  <input
                    type="radio"
                    name="role"
                    value="2"
                    checked={userRole === "2"}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="ms-2"
                  />{" "}
                  User
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
