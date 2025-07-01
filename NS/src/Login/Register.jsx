import { useState } from "react";
import "./Register.css"; // Import the CSS file
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registered with:", formData);
  
    try {
      const response = await fetch("https://localhost:44390/api/registeruser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          EmailID: formData.email,
          Password: formData.password,
        }),
      });
  
      const data = await response.json();
  
      if (data.Status === "0") {
       
        console.log("Registration successful:", data.Message);
        navigate(Login);
      } else {
        
        console.log("Error:", data.Message);
      }
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };
  

  
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-box">
        <h2>Create an Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>

        <p>Already have an account? <a href="/">Login</a></p>
      </form>
    </div>
  );
}
