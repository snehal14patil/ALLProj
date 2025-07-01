import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaShoppingCart, FaUserShield, FaBoxOpen, FaBoxes, FaHome, FaFirstOrder } from "react-icons/fa";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (onToggle) {
      onToggle(!isOpen); // Notify the parent component about sidebar state change
    }
  };
  const handleClick = () => {
    // 👈 navigate to your desired route
    navigate("/UserManagement");
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {isOpen && <h4 className="title">MenuBoard</h4>}
      </div>
      <ul className="menu">
        <li>
          <div className="menu-item dropdown-btn" onClick={handleClick} style={{cursor:"pointer"}}>
          <FaUser /> <span className={!isOpen ? "hidden" : ""}>User Management</span>
          </div>
        </li>

        <li>
          <div className="menu-item dropdown-btn" onClick={() => setIsEcommerceOpen(!isEcommerceOpen)} style={{cursor:"pointer"}}>
            <FaShoppingCart /> <span className={!isOpen ? "hidden" : ""}>Ecommerce</span>
          </div>
          {isEcommerceOpen && (
            <ul className="submenu">
              <li>
                <div className="menu-item dropdown-btn" onClick={() => setIsAdminOpen(!isAdminOpen)} style={{cursor:"pointer"}}>
                  <FaUserShield /> <span>Admin</span>
                </div>
                {isAdminOpen && (
                  <ul className="submenu" style={{cursor:"pointer"}}>
                    <li>
                      <Link to="/addProduct" className="menu-item">
                        <FaBoxOpen /> <span>Add Product</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="menu-item">
                        <FaBoxes /> <span>Products</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer" className="menu-item">
                        <FaUser /> <span>Customer</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders" className="menu-item">
                        <FaFirstOrder /> <span>Orders</span>
                      </Link>
                    </li>
                  </ul>
                )}
                <div className="menu-item dropdown-btn" onClick={() => setIsUserOpen(!isUserOpen)} style={{cursor:"pointer"}}>
                  <FaUserShield /> <span>User</span>
                </div>
                {isUserOpen && (
                  <ul className="submenu" style={{cursor:"pointer"}}>
                    <li>
                      <Link to="/homeview" className="menu-item">
                        <FaHome /> <span>HomePage</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
