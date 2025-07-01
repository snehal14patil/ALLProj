import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Assuming Sidebar is in the same directory
import "./Layout.css"; // Add necessary styles

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true); // Track sidebar state

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout">
      {/* Pass the isOpen and toggleSidebar as props to Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Rest of the content that adjusts based on sidebar */}
      <div className={`content-area ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        {/* Your page content goes here */}
      </div>
    </div>
  );
};

export default Layout;
