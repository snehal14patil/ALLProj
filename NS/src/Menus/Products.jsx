import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import { Modal, Button, Form } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    ProductsName: "",
    Price: "",
    Category: "",
    Vendor: "",
    Tags: "",
    PublishedOn: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://localhost:44390/api/getproductsdata");
        const data = await response.json();
        if (data.Status === "0") {
          setProducts(data.Products);
          setFilteredProducts(data.Products);
        } else {
          setError(data.Message);
        }
      } catch (error) {
        setError("Failed to fetch products. Please try again.");
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = products.filter((product) =>
      product.ProductsName.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    // TODO: Replace with actual API POST call if needed
    const newEntry = { ...newProduct, Srno: products.length + 1 };
    setProducts([...products, newEntry]);
    setFilteredProducts([...filteredProducts, newEntry]);
    setShowModal(false);
    setNewProduct({
      ProductsName: "",
      Price: "",
      Category: "",
      Vendor: "",
      Tags: "",
      PublishedOn: "",
    });
  };

  return (
    <div className="products-page">
      <Sidebar />
      <div className={`content-area ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Product List</h2>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Add Product
            </button>
          </div>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by product name..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {error && <p className="text-danger">{error}</p>}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Products Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Vendor</th>
                <th>Tags</th>
                <th>PublishedOn</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.Srno}>
                    <td>{product.Srno}</td>
                    <td>{product.ProductsName}</td>
                    <td>{product.Price}</td>
                    <td>{product.Category}</td>
                    <td>{product.Vendor}</td>
                    <td>{product.Tags}</td>
                    <td>{product.PublishedOn}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-danger ms-2">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Products Name</Form.Label>
              <Form.Control
                type="text"
                name="ProductsName"
                value={newProduct.ProductsName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="Price"
                value={newProduct.Price}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="Category"
                value={newProduct.Category}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Vendor</Form.Label>
              <Form.Control
                type="text"
                name="Vendor"
                value={newProduct.Vendor}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                name="Tags"
                value={newProduct.Tags}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Save Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
