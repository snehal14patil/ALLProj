import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddProduct.css";

const Inventory = () => {
  const [activeTab, setActiveTab] = useState("pricing");

  return (
    <div>
      <h3>Inventory</h3>
      <label>---------------------------------------------------------------------------------------------</label>
      <div className="inventory-container">
  {/* Sidebar */}
  <div className="inventory-sidebar">
    <button className={activeTab === "pricing" ? "active" : ""} onClick={() => setActiveTab("pricing")} style={{color:"black"}}>
      <i className="icon">🏷️</i> Pricing
    </button>
    <button className={activeTab === "restock" ? "active" : ""} onClick={() => setActiveTab("restock")} style={{color:"black"}}>
      <i className="icon">📦</i> Restock
    </button>
    <button className={activeTab === "shipping" ? "active" : ""} onClick={() => setActiveTab("shipping")} style={{color:"black"}}>
      <i className="icon">🚚</i> Shipping
    </button>
    <button className={activeTab === "globaldelivery" ? "active" : ""} onClick={() => setActiveTab("globaldelivery")} style={{color:"black"}}>
      <i className="icon">🌍</i> Global Delivery
    </button>
    <button className={activeTab === "attributes" ? "active" : ""} onClick={() => setActiveTab("attributes")} style={{color:"black"}}>
      <i className="icon">⚙️</i> Attributes
    </button>
    <button className={activeTab === "advanced" ? "active" : ""} onClick={() => setActiveTab("advanced")} style={{color:"black"}}>
      <i className="icon">🔒</i> Advanced
    </button>
  </div>

  {/* Content Area */}
  <div className="pricing-container">
    {activeTab === "pricing" && (
      <>
        <label>Regular price</label>
        <input type="text" placeholder="$$$" className="price-input" />
        <label>Sale price</label>
        <input type="text" placeholder="$$$" className="price-input" />
      </>
    )}

          {activeTab === "restock" && (
            <>
              <label>Add to Stock</label>
              <input type="text" placeholder="Enter quantity" className="restock-input" style={{ width:"242px" }} />
              <button type="submit" className="btn btn-primary " style={{width:"95px",marginTop:"-32px",marginLeft:"253px"}}>Confirm</button>

              <h6>Productin Stock : $1,090</h6>
              <h6>Product in transit:	5000</h6>
              <h6>Last time restocked:	30th June, 2021</h6>
              <h6>Total stock over lifetime:	20,000</h6>
            </>
          )}
         {activeTab === "shipping" && (
   <div className="shipping-container">
    <label>Shipping</label>
    <div className="radio-group">
      <label className="radio-option" style={{fontWeight:"500"}}>
        <input type="radio" name="shipping" value="1" />
        Fulfilled By Seller
      </label>
      <p>You’ll be responsible for product delivery.
      Any damage or delay during shipping may cost you a Damage fee.</p>
      <label className="radio-option"style={{fontWeight:"500"}}>
        <input type="radio" name="shipping" value="2" className="ms-2" />
        Fulfilled By NS
      </label>
      <p>Your product, Our responsibility.
      For a measly fee, we will handle the delivery process for you.</p>

      <p>See our<a href="#" className="ms-2 text-primary"style={{fontSize:"14px"}}> Delivery terms and conditions</a> for details.</p>
    </div>
  </div>
)}
 {activeTab === "globaldelivery" && (
  <div className="globaldelivery-container">
    <label>Global Delivery</label>
    <div className="radio-group">
      <label className="radio-option" style={{fontWeight:"500"}}>
        <input type="radio" name="shipping" value="1" />
        Worldwide delivery
      </label>
      <p>Only available with Shipping method:<a href="#" className="ms-2 text-primary"style={{fontSize:"14px"}}> Fullfilled by NS</a></p>
      <label className="radio-option"style={{fontWeight:"500",margintop:"-11px"}}>
        <input type="radio" name="shipping" value="2" className="ms-2" />
        Selected Countries
      </label>
      <select className="form-select" style={{ width: "309px" ,marginTop:"7px",margintop:"6px"}}>
        <option value="India">India</option>
        <option value="United States of America">United States of America</option>
        <option value="Mexico">Mexico</option>
        <option value="Canada">Canada</option>
      </select>
      <label className="radio-option"style={{fontWeight:"500"}}>
        <input type="radio" name="shipping" value="3" className="ms-2" />
        Local delivery
      </label>
      <p>Deliver to your country of residence <a href="#" className="ms-2 text-primary"style={{fontSize:"14px"}}> Change profile address</a></p>
      
    </div>
  </div>
)}
{activeTab === "attributes" && (
  <div className="attributes-container">
    <label>Attributes</label>

    {/* Checkbox Options in a Column */}
    <div className="checkbox-group" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <label className="checkbox-option" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input type="checkbox" name="attributes" value="fragile" />
        Fragile Product
      </label>

      <label className="checkbox-option" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input type="checkbox" name="attributes" value="biodegradable" />
        Biodegradable
      </label>

      {/* Frozen Product with Input Field Below */}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label className="checkbox-option" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="checkbox" name="attributes" value="frozen" />
          Frozen Product
        </label>
        <input
          type="text"
          placeholder="Max. allowed Temperature"
          style={{ width: "200px", padding: "5px" ,height: "26px"}}
        />
      </div>

      {/* Expiry Date Field Below */}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label className="checkbox-option" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="checkbox" name="attributes" value="expiry_date" />
          Expiry Date of Product
        </label>
        <input
          type="text"
          placeholder="d/m/y"
          style={{ width: "200px", padding: "5px",height: "26px" }}
        />
      </div>
    </div>
  </div>
)}
{activeTab === "advanced" && (
            <>
            <label>Advanced</label>
              <label>Product ID Type</label>
              <select className="form-select" style={{ width: "309px" ,marginTop:"7px",margintop:"6px"}}>
              <option value="ISBN">ISBN</option>
              <option value="UPS">UPS</option>
              <option value="EAN">EAN</option>
              <option value="JAN">JAN</option>
            </select>

              <label>Product ID</label>
              <input
          type="text"
          placeholder="ISBN Number"
          style={{ width: "306px", padding: "5px" ,height: "33px"}}
        />
            </>
          )}


        </div>
      </div>
    </div>
  );
};

const AddProduct = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [userRole, setUserRole] = useState("User"); // Default role selection
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

  return (
    <div className="add-product-page">
      {/* <Sidebar /> */}
      <div className="content-area">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Add Product</h2>
       
            <div className="button-group">
              <button className="btn btn-danger">Discard</button>
              <button className="btn btn-secondary">Save Draft</button>
              <button className="btn btn-primary">Publish Product</button>
            </div>
          </div>
          {/* Shadow Box - Positioned at Right */}
    <div 
      className="shadow p-3 mt-2 bg-white rounded ms-auto" 
      style={{ width: "357px", borderRadius: "10px",height:"387px",marginRight:"33px" }}
    >
      <h4>Organize</h4>
     <div className="">
      <h6 className="mb-0">Category <a href="#" className="ms-2 text-primary" style={{fontSize:"12px"}}>Add new Category</a></h6>
      <select className="form-select" style={{ width: "309px" ,marginTop:"13px"}}>
        <option value="Men's Clothing">Men's Clothing</option>
        <option value="Women's Clothing">Women's Clothing</option>
        <option value="kid's Clothing">kid's Clothing</option>
      </select>
      </div>
      <div className="">
      <h6 className="mb-0"style={{marginTop:"13px"}}>Vendor <a href="#" className="ms-2 text-primary"style={{fontSize:"12px"}}>Add new Vendor</a></h6>
      <select className="form-select" style={{ width: "309px" ,marginTop:"13px"}}>
        <option value="Men's Clothing">Men's Clothing</option>
        <option value="Women's Clothing">Women's Clothing</option>
        <option value="kid's Clothing">kid's Clothing</option>
      </select>
      </div>
      <div className="">
      <h6 className="mb-0"style={{marginTop:"13px"}}>Collection</h6>
      <input type="text" placeholder="Collection" style={{ padding: "10px", width: "97%", borderRadius: "5px", border: "1px solid #ccc",marginTop:"7px",height:"37px" }} />
      </div>  
      <div className="">
      <h6 className="mb-0"style={{marginTop:"13px"}}>Tags <a href="#" className="ms-2 text-primary"style={{fontSize:"12px"}}>View all tags</a></h6>
      <select className="form-select" style={{ width: "309px" ,marginTop:"13px"}}>
        <option value="Men's Clothing">Men's Clothing</option>
        <option value="Women's Clothing">Women's Clothing</option>
        <option value="kid's Clothing">kid's Clothing</option>
      </select>
      </div>
    </div>
    <div 
      className="shadow p-3 mt-2 bg-white rounded ms-auto" 
      style={{ width: "357px", borderRadius: "10px",height:"441px",marginRight:"33px" }}
    >
      <h4>Variants</h4>
     <div className="">
      <h6 className="mb-0">Option 1 <a href="#" className="ms-2 text-primary" style={{fontSize:"12px"}}>Remove</a></h6>
      <select className="form-select" style={{ width: "309px" ,marginTop:"13px"}}>
        <option value="Size">Size</option>
        <option value="Color">Color</option>
        <option value="Weight">Weight</option>
        <option value="Smell">Smell</option>
      </select>
      <textarea  style={{ padding: "10px", width: "95%", borderRadius: "5px",border: "1px solid #ccc",height: "68px",resize: "none", marginTop: "10px"  }} />
      </div>
      <label >----------------------------------------------</label>
      <div className="">
      <h6 className="mb-0">Option 2 <a href="#" className="ms-2 text-primary" style={{fontSize:"12px"}}>Remove</a></h6>
      <select className="form-select" style={{ width: "309px" ,marginTop:"13px"}}>
      <option value="Men's Clothing">Size</option>
      <option value="Size">Size</option>
        <option value="Color">Color</option>
        <option value="Weight">Weight</option>
        <option value="Smell">Smell</option>
      </select>
      <textarea  style={{ padding: "10px", width: "95%", borderRadius: "5px",border: "1px solid #ccc",height: "68px",resize: "none", marginTop: "10px"  }} />
      <button type="submit" className="btn btn-primary " style={{width: "177px",marginTop:"5px",marginLeft:"82px",height: "36px", background: "white",color: "cornflowerblue",border: "2px solid rgb(204, 204, 204)"}}>Add Another option</button>
      </div>
      
    </div>
          <p style={{ marginTop: "-846px" }}>Orders Placed Across your store</p>
          <h4>Product Title</h4>
          <input type="text" placeholder="Enter title here..." style={{ padding: "10px", width: "60%", borderRadius: "5px", border: "1px solid #ccc" ,height:"36px"}} />
         <br/>
          <h4 style={{ marginTop: "17px" }}>Product Description</h4>
          <textarea placeholder="Enter Description here..." style={{ padding: "10px", width: "60%", borderRadius: "5px",border: "1px solid #ccc",height: "224px",resize: "none"   }} />
          <br/>
          <h4 style={{ marginTop: "17px" }}>Display images</h4>
          <input type="file" accept="image/*" style={{ padding: "10px", width: "60%", borderRadius: "5px", border: "1px solid #ccc" ,height: "173px"}} />
          <div className="inventory-section">
          <Inventory />
</div>
        </div>
        <div> 
          {/* Content goes here */}
        </div>
      </div>

     
    </div>
  );
};


export default AddProduct;
