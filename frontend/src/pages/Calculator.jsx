import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";

export default function Calculator() {
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(12);

  const navigate = useNavigate();

  const interest = 0.045;
  const monthly = (amount + amount * interest) / term;

  return (
    <div className="loan-container">
      <div className="card">

        <div className="header">
          <h1>
            Get Your Loan Approved <span>Fast</span>
          </h1>
          <p className="subtitle">
            Quick approval • Competitive rates • Flexible terms
          </p>
        </div>

        <div className="section">
          <label>Loan Amount</label>
          <input
            type="range"
            min="2000"
            max="500000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="slider"
          />
          <p>GHS {amount}</p>
        </div>

        <div className="section">
          <label>Loan Term</label>
          <select onChange={(e) => setTerm(e.target.value)}>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
            <option value="24">24 months</option>
          </select>
        </div>

        <div className="payment-box">
          <p>Monthly Payment</p>
          <h2>GHS {monthly.toFixed(2)}</h2>
        </div>

        <button className="btn" onClick={() => navigate("/apply")}>
          APPLY NOW
        </button>

        <div className="features">
          <div className="feature">⚡ Fast Approval</div>
          <div className="feature">💰 Low Rates</div>
          <div className="feature">🔒 Secure</div>
        </div>

      </div>
    </div>
  );
}