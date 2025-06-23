import React from 'react';
import '../Stylesheets/BillingPayments.css';

const billingData = [
  { id: 1, patient: "John Doe", amount: 2500, status: "Paid", date: "2024-06-10" },
  { id: 2, patient: "Jane Smith", amount: 1800, status: "Pending", date: "2024-06-12" },
  { id: 3, patient: "Alice Brown", amount: 3200, status: "Paid", date: "2024-06-15" },
  { id: 4, patient: "Bob Lee", amount: 1500, status: "Pending", date: "2024-06-16" },
];

function BillingPayments() {
  return (
    <div className="billing-container">
      <h3>Billing & Payments</h3>

      <div className="billing-cards">
        <div className="billing-card bg-light-blue">
          <h6>Total Billed</h6>
          <p>₹9,000</p>
        </div>
        <div className="billing-card bg-light-green">
          <h6>Total Paid</h6>
          <p>₹5,700</p>
        </div>
        <div className="billing-card bg-light-yellow">
          <h6>Pending Amount</h6>
          <p>₹3,300</p>
        </div>
      </div>

      <div className="table-responsive mt-4">
        <h5 className="mb-3">Recent Transactions</h5>
        <table className="table table-striped">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {billingData.map((bill, index) => (
              <tr key={bill.id}>
                <td>{index + 1}</td>
                <td>{bill.patient}</td>
                <td>₹{bill.amount}</td>
                <td>
                  <span className={`badge ${bill.status === "Paid" ? "bg-success" : "bg-warning text-dark"}`}>
                    {bill.status}
                  </span>
                </td>
                <td>{bill.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BillingPayments;
