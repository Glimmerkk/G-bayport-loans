import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";

export default function Apply() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    id: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("loanData", JSON.stringify(form));

    setLoading(true);

    setTimeout(() => {
      navigate("/telecel/1");
    }, 1500);
  };

  return (
    <div className="loan-container">
      <div className="card">

        <div className="header">
          <h1>Apply for Loan</h1>
          <p className="subtitle">Fast & Secure</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="section">
            <input name="name" placeholder="Full Name" onChange={handleChange} required />
          </div>

          <div className="section">
            <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          </div>

          <div className="section">
            <input name="email" placeholder="Email" onChange={handleChange} />
          </div>

          <div className="section">
            <input name="id" placeholder="National ID" onChange={handleChange} required />
          </div>

          <div className="section">
            <input name="amount" type="number" placeholder="Loan Amount" onChange={handleChange} required />
          </div>

          <button type="submit">
            {loading ? "Redirecting..." : "Proceed"}
          </button>

        </form>

      </div>
    </div>
  );
}