import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Calculator() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(170400);
  const [months, setMonths] = useState(12);

  const monthly = (amount / months * 1.05).toFixed(2);

  return (
    <div className="container">
      <h1>Get Your Loan Approved Fast</h1>
      <p style={{ textAlign: "center" }}>
        Quick approval • Competitive rates • Flexible terms
      </p>

      <div className="calculator-box">
        <h2>Loan Calculator</h2>

        <label>Loan Amount</label>
        <h3>{amount}</h3>

        <input
          type="range"
          min="2000"
          max="500000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Loan Term</label>
        <select onChange={(e) => setMonths(e.target.value)}>
          <option value={6}>6 months</option>
          <option value={12}>12 months</option>
          <option value={24}>24 months</option>
        </select>

        <h3>Monthly Payment: {monthly}</h3>

        <button onClick={() => navigate("/apply")}>
          APPLY NOW
        </button>
      </div>

      <div className="features">
        <div className="feature">⚡ Fast Approval</div>
        <div className="feature">💰 Low Rates</div>
        <div className="feature">🔒 Secure</div>
      </div>
    </div>
  );
}