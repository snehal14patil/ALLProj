import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Customer.css"; // Reuse this for styling or create a separate Customer.css
import { Modal, Button, Form } from "react-bootstrap";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    CustomerName: "",
    EmailId: "",
    Orders: "",
    TotalSpent: "",
    City: "",
    LastSeen: "",
    LastOrder: ""
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("https://localhost:44390/api/getcustomerdata");
        const data = await response.json();
        if (data.Status === "0") {
          setCustomers(data.Customers); // Assuming API returns in `Products` key
          setFilteredCustomers(data.Customers);
        } else {
          setError(data.Message);
        }
      } catch (error) {
        setError("Failed to fetch customer data. Please try again.");
      }
    };

    fetchCustomers();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = customers.filter((customer) =>
      customer.CustomerName.toLowerCase().includes(value)
    );
    setFilteredCustomers(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    const newEntry = { ...newCustomer, Srno: customers.length + 1 };
    setCustomers([...customers, newEntry]);
    setFilteredCustomers([...filteredCustomers, newEntry]);
    setShowModal(false);
    setNewCustomer({
      CustomerName: "",
      EmailId: "",
      Orders: "",
      TotalSpent: "",
      City: "",
      LastSeen: "",
      LastOrder: ""
    });
  };

  return (
    <div className="products-page">
      <Sidebar />
      <div className={`content-area ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Customer List</h2>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Add Customer
            </button>
          </div>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by customer name..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {error && <p className="text-danger">{error}</p>}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>City</th>
                <th>Last Seen</th>
                <th>Last Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer, index) => (
                  <tr key={customer.Srno || index}>
                    <td>{customer.Srno}</td>
                    <td>{customer.Customer}</td> 
                    <td>{customer.EmailId}</td>
                    <td>{customer.Orders}</td>
                    <td>{customer.TotalSpent}</td>
                    <td>{customer.City}</td>
                    <td>{customer.LastSeen}</td>
                    <td>{customer.LastOrder}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-danger ms-2">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="CustomerName"
                value={newCustomer.CustomerName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="EmailId"
                value={newCustomer.EmailId}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Orders</Form.Label>
              <Form.Control
                type="number"
                name="Orders"
                value={newCustomer.Orders}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Total Spent</Form.Label>
              <Form.Control
                type="number"
                name="TotalSpent"
                value={newCustomer.TotalSpent}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="City"
                value={newCustomer.City}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Last Seen</Form.Label>
              <Form.Control
                type="date"
                name="LastSeen"
                value={newCustomer.LastSeen}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Last Order</Form.Label>
              <Form.Control
                type="date"
                name="LastOrder"
                value={newCustomer.LastOrder}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCustomer}>
            Save Customer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Customer;
