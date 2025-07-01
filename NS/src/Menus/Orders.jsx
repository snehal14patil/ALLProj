import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Orders.css"; // You can reuse Customer.css or create Orders.css
import { Modal, Button, Form } from "react-bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    OrderNo: "",
    CustomerName: "",
    Date: "",
    Total: "",
    PaymentStatus: "",
    FulfillementStatus: "",
    DeliveryType: ""
  });
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://localhost:44390/api/getorders");
        const data = await response.json();
       
        if (data.Status === "0") {
          setOrders(data.Order);
          setFilteredOrders(data.Order);
        } else {
          setError(data.Message);
        }
      } catch (error) {
        setError("Failed to fetch order data. Please try again.");
      }
    };

    fetchOrders();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = orders.filter((order) =>
      order.CustomerName.toLowerCase().includes(value)
    );
    setFilteredOrders(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = () => {
    const newEntry = {
        Srno: (orders?.length || 0) + 1,
      ...newOrder
    };
  
    setOrders([...orders, newEntry]);
    setFilteredOrders([...filteredOrders, newEntry]);
    setShowModal(false);
    setNewOrder({
      OrderNo: "",
      CustomerName: "",
      Date: "",
      Total: "",
      PaymentStatus: "",
      FulfillementStatus: "",
      DeliveryType: ""
    });
  };
  

  return (
    <div className="products-page">
      <Sidebar />
      <div className={`content-area ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Order List</h2>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Add Order
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
                <th>Order ID</th>
                <th>Total</th>
                <th>Customer Name</th>
                <th>Payment Status</th>
                <th>Fulfillement Status</th>
                <th>Delivery Type</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                  <tr key={order.Srno || index}>
                    <td>{order.Srno}</td>
                    <td>{order.OrderNo}</td>
                    <td>{order.Total}</td>
                    <td>{order.CustomerName}</td>
                    <td>{order.PaymentStatus}</td>
                    <td>{order.FulfillementStatus}</td>
                    <td>{order.DeliveryType}</td>
                    <td>{order.Date}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-danger ms-2">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No orders found.
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
          <Modal.Title>Add Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-2">
  <Form.Label>Order No</Form.Label>
  <Form.Control
    type="text"
    name="OrderNo"
    value={newOrder.OrderNo}
    onChange={handleInputChange}
  />
</Form.Group>

<Form.Group className="mb-2">
  <Form.Label>Customer Name</Form.Label>
  <Form.Control
    type="text"
    name="CustomerName"
    value={newOrder.CustomerName}
    onChange={handleInputChange}
  />
</Form.Group>

<Form.Group className="mb-2">
  <Form.Label>Date</Form.Label>
  <Form.Control
    type="date"
    name="Date"
    value={newOrder.Date}
    onChange={handleInputChange}
  />
</Form.Group>

<Form.Group className="mb-2">
  <Form.Label>Total</Form.Label>
  <Form.Control
    type="number"
    name="Total"
    value={newOrder.Total}
    onChange={handleInputChange}
  />
</Form.Group>

<Form.Group className="mb-2">
  <Form.Label>Payment Status</Form.Label>
  <Form.Control
    type="text"
    name="PaymentStatus"
    value={newOrder.PaymentStatus}
    onChange={handleInputChange}
  />
</Form.Group>

<Form.Group className="mb-2">
  <Form.Label>Fulfillement Status</Form.Label>
  <Form.Control
    type="text"
    name="FulfillementStatus"
    value={newOrder.FulfillementStatus}
    onChange={handleInputChange}
  />
</Form.Group>

<Form.Group className="mb-2">
  <Form.Label>Delivery Type</Form.Label>
  <Form.Control
    type="text"
    name="DeliveryType"
    value={newOrder.DeliveryType}
    onChange={handleInputChange}
  />
</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddOrder}>
            Save Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orders;
