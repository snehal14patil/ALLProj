import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const staticEmail = "admin@test.com";
    const staticPassword = "admin123";
    const staticRole = "Admin";

    if (email === staticEmail && password === staticPassword) {
      const fakeToken = "static-jwt-token-12345";
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("role", staticRole);
      localStorage.setItem("email", email);
      navigate("/sidebar");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '350px', borderRadius: '1rem' }}>
        <h3 className="text-center mb-4 text-primary">Healthcare Login</h3>
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
       
      </div>
    </div>
  );
}

export default Login;
